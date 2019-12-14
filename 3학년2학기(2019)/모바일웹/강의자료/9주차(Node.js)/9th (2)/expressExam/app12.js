/* session 사용하기 * 
 * 웹브라우저에서 아래 주소의 페이지를 열고 웹페이지에서 요청
 *    - http://localhost:3000/public/login2-1.html
 */

/* 파일 전체에서 ESLint 규칙 경고 미사용 선언 */
/* eslint-disable */

// Express 기본 모듈 불러오기
var express = require('express')
  , http = require('http')
  , path = require('path');

// Express의 미들웨어 불러오기
var bodyParser = require('body-parser')
  , cookieParser = require('cookie-parser')
  , errorHandler = require('errorhandler');

// 에러 핸들러 모듈 사용
var expressErrorHandler = require('express-error-handler');

// Session 미들웨어 불러오기
var expressSession = require('express-session');

// 익스프레스 객체 생성
var app = express();

// 기본 속성 설정
app.set('port', process.env.PORT || 3000);

// body-parser 등록
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// public 폴더 공유
app.use('/public', express.static(path.join(__dirname, 'public')));

// cookie-parser 설정
app.use(cookieParser());

/* 세션 설정정보 등록
   - 세션 설정정보를 등록하면 요청객체(req)에서 session 속성을 가지고 처리할 수 있음
*/
app.use(expressSession({
    /* 쿠키에 저장할 connect.sid값을 암호화할 키값 입력
       - 이 암호화 키를 통해서 Session Id를 암호화하여 관리
    */
	secret:'sid',
    //세션 아이디를 접속할때마다 새롭게 발급(재저장)
	resave:true,
    //세션 아이디가 세션 store에 저장되기 전에는 Uninitialized된 상태로 저장
	saveUninitialized:true
}));

// 라우터 객체 참조
var router = express.Router();

// 로그인 라우팅 함수 설정 - 로그인 후 세션 저장함
router.route('/process/login').post(function(req, res) {
	console.log('/process/login 호출됨.');

    //요청 파라미터(아이디, 패스워드)를 받는다. 
	var paramId = req.body.id || req.query.id;
	var paramPs = req.body.ps || req.query.ps;
	
    /* 설정된 세션 정보는 요청객체인 req.session에 들어 있음
       - user라는 세션 정보가 있으면 로그인된 상태이므로 상품페이지로 이동하고
         없으면 세션을 저장하도록 설정
    */
	if (req.session.user) {
		// 이미 로그인된 상태
		console.log('로그인되어 있습니다.  상품 페이지로 이동합니다.');		
		res.redirect('/public/product.html');
	} else {// 로그인 안된 상태
		/* 세션 객체 설정(세션 저장)
           - 'user' 객체를 세션으로 저장할 때는 요청객체(req)의
             session 속성으로 'user' 객체를 설정하면 됨
        */
		req.session.user = {
			id: paramId,
			ps: paramPs,
			authorized: true// 인증
		};
		
        //저장된 세션을 확인하기 위해 json으로 응답
        //res.json(req.session);
        
		res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
		res.write('<h1>로그인 성공</h1>');
		res.write('<div><p>Param id : ' + paramId + '</p></div>');
		res.write('<div><p>Param password : ' + paramPs + '</p></div>');
		res.write('<br><br><a href="/process/product">상품 페이지로 이동하기</a>');
		res.end();//브라우저로 전송
	}
});

// 로그아웃 라우팅 함수 - 로그아웃 후 세션 삭제함
router.route('/process/logout').get(function(req, res) {
	console.log('/process/logout 호출됨.');
	
    //세션 객체안에 user가 있는지 확인하여 분기
	if (req.session.user) {
		// 로그인된 상태
		console.log('로그아웃합니다.');
		
        //세션 삭제
		req.session.destroy(function(err) {           
			if (err) {throw err;}
   	
			console.log('세션을 삭제하고 로그아웃되었습니다.');
			res.redirect('/public/login2-1.html');
		});
	} else {
		// 로그인 안된 상태
		console.log('아직 로그인되어있지 않습니다.');		
		res.redirect('/public/login2-1.html');
	}
});

// 상품정보 라우팅 함수
router.route('/process/product').get(function(req, res) {
	console.log('/process/product 호출됨.');
	
    /* 세션 객체에 user가 있는지 확인하여 분기
       - 로그인이 되어 있을 때만 상품페이지를 볼 수 있게 하고
         로그인인 안된 경우는 로그인을 먼저 하도록 설정
    */
	if (req.session.user) {
		res.redirect('/public/product.html');
	} else {
        console.log('상품보기 페이지는 로그인해야 가능합니다.');
		res.redirect('/public/login2-1.html');
	}
});

app.use('/', router);

// 404 에러 페이지 처리
var errorHandler = expressErrorHandler({
    static: {
      '404':'./public/404.html'
    }
});

//expressErrorHandler 설정
app.use( expressErrorHandler.httpError(404) );
app.use( errorHandler );

// Express 서버 시작
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

