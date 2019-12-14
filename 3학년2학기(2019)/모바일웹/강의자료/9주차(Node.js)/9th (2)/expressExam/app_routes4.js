/* eslint-disable */

//express 모듈 추가
var express = require('express')
//express 함수를 실행하여 express 서버 객체를 생성
var app = express();

/* 모듈 p3.js를 require 하면서 'app'을 p3.js에게 함수의 매개변수로 전달함
   - 전달된 'app'을 p3.js에서 사용할 수 있도록 하기 위함
*/
var r1 = require('./routes/p3')(app);
app.use('/p1', r1);

var r2 = require('./routes/p2')(app);
app.use('/p2', r2);

app.listen(3000, function() {
    console.log('connected');
})
