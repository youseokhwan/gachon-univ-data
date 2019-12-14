/* 로컬 인증 방식으로 스트래티지 설정 모듈 */
console.log('call : /config/passport/local.js');

const mongoose = require('mongoose');

// =========== 패스포트 Strategy(인증방식) 설정(8) =============//
// ('passport-local').Strategy 참조
// 사용자의 이메일과 비밀번호를 전달받아 db에 저장된 정보와 비교하는 로컬 인증 방식 기능 제공
const LocalStrategy = require('passport-local').Strategy;

// User 모델 참조
const User = mongoose.model('User');

/**
 * login.hbs에서 입력받은 요청 파라미터 값으로 User의 아이디와 비밀번호를 인증(LocalStrategy 쪽으로 인증 처리를 위임)
 */

//첫 번째 파라미터{객체} 설명
/* login.hbs의 Form Data에서 name으로 설정한 값과 패스포트 내에서 사용할 값을 맵핑시켜준다.
   - <input name="user_email" class="form-control" type="email"/> 
   - <input name="user_password" class="form-control" type="password"/> 
   - 패스포트의 요청파라미터는 기본적으로 username과 password로 받도록 되어 전제되어 있기때문에
     요청파라미터 "user_email"을 usernameField로, "user_password"를 passwordField로 변경 */  

// 로컬 인증 방식으로 스트래티지 설정
module.exports = new LocalStrategy({ //첫번째 파라미터      
        usernameField: 'user_email',
        passwordField: 'user_password',
    },
    //클라이언트의 요청파라미터를 받아서 처리
    async function (email, password, done) {//두번째 파라미터:검증 콜백 함수(local 인증처리)
        console.log('passport local 인증 처리');
    
        /*  User모델(users 컬렉션)에서 이메일을 기준으로 검색합니다. */
        const user = await User.findOne({
            "email":email,//email로 사용자 정보가 있는지 확인()"email":속성에 email 파라미터를 전달
        }).exec();

        /* 인증결과를 done()메소드를 이용하여 authenticate 쪽으로 알려 주어야
           라우팅 함수안에서 authenticate를 호출했을 때 각각의 상황에 따라 분기가 됨 */           

        if (user) {
            /* 이메일로 검색된 유저가 있다면 패스워드가 맞는지 확인합니다.*/

            /** authenticate 메소드는 UserSchema에서 선언한 메소드로서,
                유저로부터 비밀번호를 받아 대조하는 기능을 수행하는 메소드 **/
            if (user.authenticate(password)) {//인증된 경우
                 
                console.log('done 콜백을 통해서 user객체 정보를 serializeUser() 메서드로 전달');
                /* 유저가 있다면 */
                return done(null, user)
            } else {
                /* 패스워드가 틀리다면 */
                return done(null, false,"패스워드가 틀립니다."); //설정된값은 req.flash()에서 받은 값에서 error object로 받습니다.
            }
        } else {
            /*이메일로도 없는경우 */
            return done(null, false,"매칭되는 아이디가 없습니다."); //설정된값은 req.flash()에서 받은 값에서 error object로 받습니다.
        }
    },
);
