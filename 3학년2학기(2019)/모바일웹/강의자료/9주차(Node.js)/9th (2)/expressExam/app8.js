/* express를 이용한 웹서버 구축 
   - body-parser: post 방식의 요청 파라미터 확인을 위한 모듈 */
/* eslint-disable */

/* login.html에서 post 방식으로 id, ps 전송 -*/

//express 모듈 추가
const express = require('express')
const http = require('http');
//var static = require('serve-static');
const path = require('path');
const bodyParser = require('body-parser');

//express 객체를 생성
const app = express();

//서버 포트 설정 
app.set('port', process.env.PORT || 3000);

//static 미들웨어 설정 - 특정폴더(public) 오픈 공유
app.use(express.static(path.join(__dirname, 'public')));
//브라우저에서 패스를 지정할 때 :  http://localhost:3000/login.html

//post 방식으로 요청했을 떄 요청 파라미터 확인
/* body-parser 미들웨어 등록 */
/* 1. 주소 형식으로 전달된 요청 파라미터를 파싱
   - {extended:false} : querystring 모듈을 사용하여 쿼리스트링을 해석
   - {extended:true} : qs 모듈을 사용하여 쿼리스트링을 해석 */
app.use(bodyParser.urlencoded({extended:false}));

//2. json 형식으로 전달된 요청파라미터를 파싱
app.use(bodyParser.json());
//app.use(express.urlencoded({extended:false}));
//app.use(express.json());

// 미들웨어에서 파라미터(id, ps) 확인
app.use((req, res, next) => {
	console.log('첫번째 미들웨어에서 요청을 처리함.');

    /* post 방식은 body안에, get 방식은 query안에 요청 파라미터가 들어가 있음
       - post와 get방식 모두 가능하도록 선언
    */
	const paramId = req.body.id || req.query.id;
	const paramPs = req.body.ps || req.query.ps;
	
	res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
	res.write('<h1>Express 서버에서 응답한 결과입니다.</h1>');
	res.write('<div><p>Param id : ' + paramId + '</p></div>');
	res.write('<div><p>Param password : ' + paramPs + '</p></div>');
	res.end();
});

//express(app)를 사용하여 서버 객체 생성(listener, port, collback)
const server = http.createServer(app).listen(app.get('port'), () => {
    console.log('익스프레스 웹 서버 실행 %d', app.get('port'));
});