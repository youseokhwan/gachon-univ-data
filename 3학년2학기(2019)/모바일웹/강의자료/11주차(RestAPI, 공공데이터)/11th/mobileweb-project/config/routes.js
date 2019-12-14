/* 클라이언트 요청 패스에 따른 라우팅 함수 설정 모듈 */

const marketReqInfo = require("../app/controllers/reqInfoController");
const marketReqSaveInfo = require("../app/controllers/reqSaveInfoController");
const auth = require("../app/controllers/AuthController");
 
console.log('call : /config/routes.js');

//라우팅 함수 설정
module.exports = function (app, passport) {
    
    //comment: 공공데이터 포털에 요청한 경락정보를 그대로 파싱하여 리턴
    app.get("/", ((req, res) => res.redirect('/reqInfo'))); //메인화면(경락가격조회로 redirect)
    app.get("/reqInfo", auth.requiresLogin,marketReqInfo.index); //reqInfo의 form값
    app.get("/reqInfo/result", auth.requiresLogin,marketReqInfo.result);//reqSaveInfo의 결과값을 보여줍니다.
    app.get("/reqSaveInfo", auth.requiresLogin,marketReqSaveInfo.index);//reqSaveInfo form 화면
    app.get("/reqSaveInfo/show", auth.requiresLogin,marketReqSaveInfo.show); //reqSaveInfo 결과값
    app.delete("/reqSaveInfo/delete",auth.requiresLogin, marketReqSaveInfo.deleteResult);//reqSaveInfo DB 삭제
    app.post("/reqSaveInfo/result",auth.requiresLogin, marketReqSaveInfo.createResult);//요청결과 DB에 저장

    app.get('/login', auth.login);//로그인
    app.get('/signup', auth.signup);//회원가입
    app.get('/logout', auth.logout);//로그아웃

    /* form 유저로그인 */
    app.post("/login_user", passport.authenticate('local', {
        successRedirect : '/',
        failureRedirect: '/login',
        failureFlash:true
    }),auth.checkUserLogin);

    /* 유저생성*/
    app.post('/create', auth.create);
};
