/* express 서버 구축 관련 설정 모듈 */

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const hbsHelper = require('handlebars-helpers');
const ENV = require("../config/enviroment");

//쿠키모듈
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');

//세션모듈
const session = require('express-session');
const mongoStore = require('connect-mongo')(session);
//const FileStore = require('session-file-store')(session); 파일스토리지사용시

// ===== flash 메시지를 사용하기 위한 'connect-flash' 모듈 참조(2) ====//
/* - connect-flash 모듈은 요청 객체에 메시지를 넣어 둘 수 있는 기능을 제공하는데,
     보통 웹 서버 안의 다른 함수에 메시지를 전달하거나 뷰 템플릿을 처리하는 함수에 메시지를 
     전달하기 위해 사용
   - 'connect-flash' 모듈은 'cookie-parser'와 'cookie-session'을 사용함으로 
     이들보다 뒤에서 참조해야 함 
*/
const flash = require('connect-flash');

module.exports = function (app, passport) {

    console.log('call : /config/express.js');
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    //Resource 용으로 사용할 static 폴더(public) 정의
    app.use(express.static('public')); 

    //ejs,hbs등 사용할 view template을 설정합니다.
    const hbs = exphbs.create({
        extname: '.hbs', //사용할 확장자
        partialsDir: __dirname + '/../app/views/partials', // sidebar등 부분적으로 사용할 디렉토리
        defaultLayout: __dirname + '/../app/views/layouts/default.hbs', 
        layoutsDir: __dirname + '/../app/views/layouts', // 사용할 view들의 위치
        helpers: hbsHelper, 
        /* 핸들바에서 사용하는 helper 클래스들의 모음으로 
           https://github.com/helpers/handlebars-helpers 플러그인을 사용*/
    });
    /* ==== 핸들바 사용을 위한 설정 ==== */
    require('handlebars-helpers')(hbs);
    app.engine('.hbs', hbs.engine); //사용할 뷰 엔진(hbs.engine) 설정

    /* 쿠기설정 */
    app.use(cookieParser()); //쿠키사용을 설정합니다.
    app.use(cookieSession({secret: ENV.SESSION_SECRET})); //세션값을 쿠키에 담습니다.

    /* 세션을 저장할 곳을 설정  */
    /* 실무에서는 일반적으로 메모리DB(etc. redis) 사용하지만 실습에선 mongodb를 이용 */

    /* 몽고디비를 이용 */
    app.use(session({
        secret: ENV.SESSION_SECRET, //자신에 맞게 secret을 설정
        store: new mongoStore({ //세션데이터를 몽고에 저장하기때문에 mongo 접속정보
            url: ENV.DATABASE,
            collection: ENV.MONGO_SESSION_COLLECTION_NAME,
        }),
    }));

    //======= passport 초기화(3) ============//
    /* passport 사용을 위한 설정
       - passport 모듈의 initialize()함수와 session() 함수를 호출했을 때
         반환되는 객체를 미들웨어로 사용하도록 설정
    */
    app.use(passport.initialize()); //패스포트 초기화
    app.use(passport.session()); //패스포트 세션설정    
    //flash 메세지 미들웨어 등록
    app.use(flash());

    app.set('view engine', '.hbs'); //핸들바 뷰 파일의 확장자를 설정(.hbs)
    app.set('views', path.join(__dirname, '/../app/views')); //뷰가 있는 디렉토리를 정의
};
