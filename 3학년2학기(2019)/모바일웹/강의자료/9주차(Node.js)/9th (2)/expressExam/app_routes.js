/* eslint-disable */

//express 모듈 추가
var express = require('express')
//express 함수를 실행하여 express 서버 객체를 생성
var app = express();

/* 라우팅 설정 - application-leve middleware를 사용하여 라우팅 설정
   - application에 직접 get을 적용
*/
app.get('/p1/r1', function(req, res) {
    res.send('routing /p1/r1');
});
app.get('/p1/r2', function(req, res) {
    res.send('routing /p1/r2');
});

app.get('/p2/r1', function(req, res) {
    res.send('routing /p2/r1');
});
app.get('/p2/r2', function(req, res) {
    res.send('routing /p2/r2');
});

app.listen(3000, function() {
    console.log('connected');
})
