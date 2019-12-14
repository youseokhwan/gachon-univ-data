/* eslint-disable */
/* express를 이용한 웹서버 구축 */

//express 모듈 추가
const express = require('express')
const http = require('http');

//express 객체(서버 객체)를 생성
const app = express();

//서버 포트 설정 
app.set('port', process.env.PORT || 3000);

//클라이언트의 요청을 처리하여 응답할 미들웨어 함수 작성 
const resFunc = (req, res, next) => {
    console.log('첫번째 미들웨어 호출됨.');
    
    res.writeHead(200, {'Content-Type' : 'text/html; Charset=utf-8'});
    res.write('<h1>익스프레스 웹서버로부터 받은 응답입니다.</h1>');
    res.end('<h2> 클라이언트의 요청을 처리했습니다.</h2>');
};

//resFunc 함수를 미들웨어로 등록
app.use(resFunc);

//express(app)를 사용하여 서버 생성(listener, port, collback)
const server = http.createServer(app).listen(app.get('port'), () => {
    const host = server.address().address;
    console.log('익스프레스 웹 서버 실행 : %d', app.get('port'));//웹서버가 호출되면 실행됨
});
    