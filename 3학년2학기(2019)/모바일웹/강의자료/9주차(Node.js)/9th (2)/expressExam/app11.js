/**
 * cookie parser 미들웨어 사용하기 * 
 * 웹브라우저에서 아래 주소로 요청
 *    http://localhost:3000/public/login4.html
 *    http://localhost:3000/public/login5.html
 */

/* 파일 전체에서 ESLint 규칙 경고 미사용 선언 */
/* eslint-disable */

// express 기본 모듈 불러오기
var express = require('express')
  , http = require('http')
  , path = require('path');

// Express의 미들웨어 불러오기
var bodyParser = require('body-parser')
  , cookieParser = require('cookie-parser')
  , errorHandler = require('errorhandler')
  , expressErrorHandler = require('express-error-handler');

// 익스프레스 객체 생성
var app = express();

// 포트 설정(process.env 객체의 PORT 또는 3000)
app.set('port', process.env.PORT || 3000);

//body-parser 등록
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//public 폴더를 공유 폴더로 open
app.use('/public', express.static(path.join(__dirname, 'public')));

// cookie-parser 미들웨어 등록
app.use(cookieParser());

// Router 객체 참조
var router = express.Router();

/* '/showCookie' 라우팅 설정 - 쿠키 값을 추출하여 응답
    - route() 메소드를 사용하여 요청 패스(/showCookie')를 지정하고
    - get()메서드를 사용하여 get 방식으로  (/showCookie')로 요청이 들어 왔을 때 
      처리할 콜백함수 등록
*/
router.route('/showCookie').get(function(req, res) {
	console.log('/showCookie 호출됨.');
    
    //요청객체(req)의 cookies안에 redirect로 전달받은 쿠키 정보가 있음
    //요청객체에서 쿠키(객체)를 가져와 변수 cooki에 저장
    var cooki = req.cookies;   
    //res.send(req.cookies);//쿠키값(객체)을 출력
    
    //쿠키(객체)에서 쿠키이름과 값을 추출
    var cookiValue='';    
    for (key in cooki) {
         cookiValue = '쿠키값 ' + key + ' = ' + cooki[key];
    }
    //클라이언트에 응답
    res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
	res.write('<h1>/process/showCookie 요청패스로 응답한 결과입니다.</h1>');	
    res.write('<h1>' + cookiValue + '</h1>');	
	res.end(); 
});

/* 클라이언트에서 'login4.html', 'login5.html'로 요청 패스가 들어오면
   쿠키 정보를 저장해달라고 클라이언트(브라우저)에 요청하도록 라우팅 설정
   - url 파라미터를 사용하여 '/user/login/' 뒤에 오는 값(:name)을 
     파라미터로 사용하도록 설정
   - 이렇게 지정한 파라미터는 req.params 객체안에 들어가기 때문에
     전달된 값은 req.params.name 속성으로 가져올 수 있음
*/
router.route('/user/login/:name').post(function(req, res) {
    console.log('/user/login/:name 라우팅 함수에서 받음.');

    // 요청패스의 name을 cookieName에 저장
    var cookieName = req.params.name;    
    console.log(cookieName);
    
	// res.cookie() 메서드로 쿠키 저장
    // 서버에서 응답객체로 쿠키를 저장해달라고 요청하면 브라우저에 저장됨  
    res.cookie('user', cookieName);//쿠키명, 쿠키값
    /* 단, 쿠키는 클라이언트에 응답해야 브라우저에 저장됨 */  

    /* 사용자가 쿠키 정보를 볼 수 있도록 '/showCookie' 요청패스로 redirect
       - redirect : 웹 페이지 경로를 강제로 이동
       - 응답하면 브라우저에 쿠키가 저장됨
    */
	res.redirect('/showCookie');
    //res.end();
});

// 라우터 등록
app.use('/', router);

// 404 에러 페이지 처리
var errorHandler = expressErrorHandler({
    static: {
      '404': './public/404.html'
    }
});

//expressErrorHandler 등록 -  에러 처리
app.use( expressErrorHandler.httpError(404) );
app.use( errorHandler );

// Express 서버 시작(app:익스프레스 서버 객체)
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

