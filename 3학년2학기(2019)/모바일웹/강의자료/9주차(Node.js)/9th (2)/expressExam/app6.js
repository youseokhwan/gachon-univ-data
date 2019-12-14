/* express를 이용한 웹서버 구축 -*/

/* 파일 전체에서 ESLint 규칙 경고 미사용 선언 */
/* eslint-disable */

//서버에서 보내온 정보를 처리하는 방법

//express 모듈 추가
const express = require('express')
const http = require('http');

//express 함수를 실행하여 express 서버 객체를 생성
const app = express();

//서버 포트 설정 
app.set('port', process.env.PORT || 3000);

//use() 함수를 사용하여 미들웨어 등록 - 미들웨어 : 클라이언트에서 요청이 오면 처리
app.use((req, res, next) => {
    console.log('첫번째 미들웨어 호출됨.');
    
    /*  서버에서 보낸 정보에서 요청 파라미터를 확인 방법 */
    
    //헤더정보에서 'user-agent'를 뽑는 방법 - req:요청객체
    const userAgent = req.header('User-Agent');
    //클라이언트에서 get 방식으로 전송한 요청 파라미터를 확인 : req.query.name
    // post 방식으로 전송한 요청 파라미터를 확인 : req.body.name 
    const paramName = req.query.name;     
    
    //응답
    res.send('<h3>서버에서 응답. User-Agent : ' + userAgent + 
             '</h3><h3>Param Name : ' + paramName + '</h3>');
});

//express(app)를 사용하여 서버 객체 생성(listener, port, collback)
const server = http.createServer(app).listen(app.get('port'), () => {
    console.log('익스프레스 웹 서버 실행 %d', app.get('port'));
});