/* express를 이용한 웹서버 구축 */
/* eslint-disable */

//Router를 사용해 요청 라우팅하는 방법

//express 관련 모듈 추가
const express = require('express')
const http = require('http');
const path = require('path');
//var bodyParser = require('body-parser'); 

// express 객체를 생성
const app = express();

//서버 포트 설정 
app.set('port', process.env.PORT || 3000);

//static 미들웨어 설정 - 특정폴더(public) 오픈 공유
app.use(express.static(path.join(__dirname, 'public')));

//body-parser 등록
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// Router 객체 참조
const router = express.Router();

//route() 매서드를 이용하여 요청 라우팅 설정(클라이언트 요청 처리) -  라우팅 함수 등록
// route('요청 패스').처리방식(콜백함수(요청객체, 응답객체)) : 요청 패스로 들어온 것만 처리
router.route('/process/login').post((req, res) => {
    console.log('/process/login 라우팅 함수에서 받음.');
    
    //요청 파라미터 추출
    const paramId = req.body.id || req.query.id;
    const paramPs = req.body.ps || req.query.ps;
    
    res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
	res.write('<h1>Express 서버에서 응답한 결과입니다.</h1>');
	res.write('<div><p>Param id : ' + paramId + '</p></div>');
	res.write('<div><p>Param password : ' + paramPs + '</p></div>');
	res.write("<br><br><a href='/login2.html'>로그인 페이지로 돌아가기</a>");
	res.end();
});

//라우터 객체를 app객체에 등록
app.use('/', router)

// 등록되지 않은 패스에 대해 페이지 오류 응답
app.all('*', (req, res) => {
	res.status(404).send('<h1>ERROR - 페이지를 찾을 수 없습니다.</h1>');
});

//express(app)를 사용하여 서버 객체 생성(listener, port, collback)
const server = http.createServer(app).listen(app.get('port'), () => {
    console.log('익스프레스 웹 서버 실행 %d', app.get('port'));//웹서버가 호출되면 실행됨
});