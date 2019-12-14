/* eslint-disable */
/* express를 이용한 웹서버 구축 */

//express 모듈 추가
const express = require('express')
const http = require('http');

//express 서버 객체를 생성
const app = express();

//서버 포트 설정
app.set('port', process.env.PORT || 3000);

//use() 함수를 사용하여 미들웨어 등록 
app.use((req, res, next) => {
    console.log('첫번째 미들웨어 호출됨.');    
    //req 객체에 user 속성을 추가
    req.user = 'ugkang';    
    
    //다음 미들웨어에서 응답하도록 next() 함수로 현재 미들웨어를 벗어남
    if (req.user == 'ugkang') {
         next(); 
    }
       
});

//두번째 미들웨어 등록
app.use((req, res, next) => {
    console.log('두번째 미들웨어 호출됨.');
    
    //send() 메서드로 클라이언트에 응답
    //res.writeHead(200, {'Content-Type' : 'text/html; Charset=utf-8'});
    res.send('<h1>서버에서 ' + req.user + '이 응답하였습니다.</h1>');
    res.status(404).send('File not found!');
    res.sendStatus(404);
})

//서버 객체 생성(listener, port, collback)
const server = http.createServer(app).listen(app.get('port'), () => {
    console.log('익스프레스 웹 서버 실행 %d', app.get('port'));
});
    
