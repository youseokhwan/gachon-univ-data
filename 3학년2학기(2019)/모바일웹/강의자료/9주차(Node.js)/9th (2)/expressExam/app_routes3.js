/* eslint-disable */

//express 모듈 추가
var express = require('express')
//express 함수를 실행하여 express 서버 객체를 생성
var app = express();

/* 라우팅 설정 - router-leve middleware를 사용하여 라우팅 설정
   - router에 직접 get을 적용
*/
var r1 = require('./routes/p1');
app.use('/p1', r1);

var r2 = require('./routes/p2');
app.use('/p2', r2);

app.listen(3000, function() {
    console.log('connected');
})
