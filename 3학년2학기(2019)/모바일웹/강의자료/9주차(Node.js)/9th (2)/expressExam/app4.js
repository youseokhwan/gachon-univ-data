/* express를 이용한 웹서버 구축 */

/* 파일 전체에서 ESLint 규칙 경고 미사용 선언 */
/* eslint-disable */

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
    
    req.user = '손흥민';//user 속성 설정
    
    //다음 미들웨어에서 응답하도록 next() 함수로 현재 미들웨어를 벗어남
    next();

});

//두번째 미들웨어 설정
app.use((req, res, next) => {
    console.log('두번째 미들웨어 호출됨.');
     
    const person = {name:req.user, age:27};
    //person 객체를 send하면 JSON 형태로 전송됨 - 객체로 전송 - 데이터만 주고 받을 때 사용
    //res.send(person); 
    
    const personStr = JSON.stringify(person);
    res.send(personStr);
    
});

//express(app)를 사용하여 서버 객체 생성(listener, port, collback)
const server = http.createServer(app).listen(app.get('port'), () => {
    console.log('익스프레스 웹 서버 실행 %d', app.get('port'));
});