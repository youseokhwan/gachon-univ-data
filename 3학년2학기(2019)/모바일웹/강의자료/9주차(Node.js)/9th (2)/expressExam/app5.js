/* express를 이용한 웹서버 구축 */
/* eslint-disable */

//특정 path로 이동하는 redirect 기능

//express 모듈 추가
const express = require('express')
const http = require('http');

//express 객체를 생성
const app = express();

//서버 포트 설정 
app.set('port', process.env.PORT || 3000);

//use() 함수를 사용하여 미들웨어 등록 
app.use((req, res, next) => {
    console.log('첫번째 미들웨어 호출됨.');
    
    //redirect() 함수 사용를 사용하야 특정 요청 path로 이동하도록 지정 
    res.redirect('http://www.google.co.kr');
});

//express(app)를 사용하여 서버 객체 생성(listener, port, collback)
const server = http.createServer(app).listen(app.get('port'), () => {
    console.log('익스프레스 웹 서버 실행 %d', app.get('port'));
});