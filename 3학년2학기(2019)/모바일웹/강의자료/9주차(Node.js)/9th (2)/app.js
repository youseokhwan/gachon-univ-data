/* cookie & session 처리 */

/* 필요 모듈 참조 */
const express = require('express')
const exphbs = require('express-handlebars')
const cookieParser = require('cookie-parser')
const sessionParser = require('express-session')

/* 익스프레스 객체 생성 */
const app = express()
const port = 3000;

/* View 탬플릿 엔진(Handlebars) 설정 */
app.engine('.hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}))
app.set('view engine', '.hbs')

/* cookieParser미들웨어 등록 */
app.use(cookieParser())

/* sessionParser 미들웨어 등록 및 세션 설정정보 등록 
   - 세션 설정정보를 등록하면 요청객체(req)에서 session 속성을 가지고 처리할 수 있음
*/
app.use(sessionParser({
    /* 쿠키에 저장할 connect.sid값을 암호화할 키값 입력
       - 이 암호화 키를 통해서 Session Id를 암호화하여 관리
    */
    secret: 'secretToken',
    //세션 아이디를 접속할때마다 새롭게 발급(재저장)
    resave: true,
    //세션 아이디가 세션 store에 저장되기 전에는 Uninitialized된 상태로 저장
    saveUninitialized: true
}))

// root('/') 라우팅 설정
app.get('/', (req, res) => {
    //요청패스의 msg 값을 가져옴
    const msg = req.query.msg
    console.log(msg)
    
    /* 이미 로그인 되어있다면 마이페이지로 이동시킵니다.*/
    if (req.session.user) {
        res.redirect('/mypage')
    } else {
        /*만약 이메일 쿠키가 있으면 체크박스를 체크되도록 합니다.*/
        const isChecked = req.cookies.user_email ? "checked" : ""
        /* View 탬플릿 랜더링
           - login.hbs에 데이터 바인딩
        */
        res.render('login', {email: req.cookies.user_email, isChecked: isChecked, msg: req.query.msg})
    }
})

// '/login' 라우팅 설정
app.get('/login', (req, res) => {
    /* "아이디 기억하기" 체크박스가 표시되어있으면*/
    if (req.query.chk_remember) {
        /* res.cookie() 메서드롤 쿠키값을 저장
           - 서버에서 응답객체로 쿠키를 저장해달라고 요청하면 브라우저에 저장됨 
        */
        res.cookie('user_email', req.query.user_id)
    } else {
        /* 없으면 쿠키를 없앱니다.*/
        res.clearCookie('user_email')
    }

    /* 설정된 세션 정보는 요청객체인 req.session에 들어 있음
       - user라는 세션 정보가 있으면 로그인된 상태이므로 mypage로 이동하고,
         없으면 세션을 저장하도록 설정
    */
    if (req.session.user) {
        /* 유저의 세션정보가 있으면 mypage로 이동시켜줍니다. */
        res.redirect('/mypage')
    } else {
        /* 유저의 세션정보가 없으면 만들어줍니다. */
        
        /* 세션 객체 설정(세션 저장)
           - 'user' 객체를 세션으로 저장할 때는 요청객체(req)의
             session 속성으로 'user' 객체를 설정하면 됨
        */
        req.session.user = {       
            //user_id 값을 user_email에 할당하여 세션정보 설정
            "user_email": req.query.user_id
        }
        /* 세션 정보를 저장한 후 mypage로 이동시켜줍니다 */
        res.redirect('/mypage')
    }
})

// '/mypage' 라우팅 설정
/* 오직 세션정보가 있는 사용자만 확인가능합니다.*/
app.get('/mypage', (req, res) => {
    /* 유저의 세션정보가 있으면 */
    if (req.session.user) {
        /* View 탬플릿 랜더링
           - mypage.hbs에 데이터 바인딩
        */
        res.render('mypage', {email: req.session.user.user_email})
    } else {
        /* 없으면 로그인페이지로 이동시킵니다.*/
        res.redirect('/?msg=로그인을 먼저해주세요.')
    }
})

// '/logout' 라우팅 설정
app.get('/logout', (req, res) => {
    /* 전체 세션을 삭제합니다.*/
    req.session.destroy(function () {
        req.session
    })

    /* 메인페이지로 이동합니다. */
    res.redirect('/?msg=로그아웃 되었습니다.')
})

/* 익스프레스 서버 시작 */
app.listen(port, () => {
	console.log('Sever running on port : %s', port);
});
