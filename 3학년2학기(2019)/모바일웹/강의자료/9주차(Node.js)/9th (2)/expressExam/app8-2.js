/* express를 이용한 웹서버 구축 
   - body-parser: post 방식의 요청 파라미터 확인을 위한 모듈 
*/

/* 파일 전체에서 ESLint 규칙 경고 미사용 선언 */
/* eslint-disable */

/* login2.html에서 post 방식으로 id,ps 전송 -*/

//express 모듈 추가
var express = require('express')
var http = require('http');
var static = require('serve-static');
var path = require('path');

//express 객체를 생성
var app = express();

//서버 포트 설정 
app.set('port', process.env.PORT || 3000);

//static 미들웨어 설정 - 특정폴더(public) 오픈 공유
app.use(static(path.join(__dirname, 'public')));
//브라우저에서 패스를 지정할 때 :  http://localhost:3000/login.html

//post 방식으로 요청했을 떄 요청 파라미터 확인
/* 익스프레스 4.16.0버전부터 body-parser의 일부 기능이 익스프레스에 내장되어
   body-parser를 설치하지 않고도 다음과 같이 사용할 수 있음 */
/* 1. 주소 형식으로 형식으로 전달된 요청 파라미터를 파싱
   - {extended:false} : querystring 모듈을 사용하여 쿼리스트링을 해석
   - {extended:true} : qs 모듈을 사용하여 쿼리스트링을 해석 */
app.use(express.urlencoded({extended:false}));
//2. json 형식으로 전달된 요청파라미터를 파싱
app.use(express.json());

// 미들웨어에서 파라미터(id, ps) 확인
app.post('/process/login', function(req, res, next) {
	console.log('첫번째 미들웨어에서 요청을 처리함.');

	var paramId = req.body.id;
	var paramPs = req.body.ps;
	
	res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
	res.write('<h1>Express 서버에서 응답한 결과입니다.</h1>');
	res.write('<div><p>Param id : ' + paramId + '</p></div>');
	res.write('<div><p>Param password : ' + paramPs + '</p></div>');
	res.end();
});

//express(app)를 사용하여 서버 객체 생성(listener, port, collback)
var server = http.createServer(app).listen(app.get('port'), function() {
    console.log('익스프레스 웹 서버 실행 %d', app.get('port'));//웹서버가 호출되면 실행됨
});