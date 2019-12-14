/* eslint-disable */

//express 모듈 추가
var express = require('express')
//express 함수를 실행하여 express 서버 객체를 생성
var app = express();

/* 라우팅 설정 - router-leve middleware를 사용하여 라우팅 설정
   - router에 직접 get을 적용
*/
//라우터 객체 생성
var r1 = express.Router();

r1.get('/r1', function(req, res) {
    res.send('routing /p1/r1');
});
r1.get('/r2', function(req, res) {
    res.send('routing /p1/r2');
});

/* '/p1'으로 들어오는 모든 요청을 router에게 위임 
   - http://localhost:3000/p1/r1
   - http://localhost:3000/p1/r2
*/
app.use('/p1', r1);

//라우터 객체 생성
var r2 = express.Router();

r2.get('/r1', function(req, res) {
    res.send('routing /p2/r1');
});
r2.get('/r2', function(req, res) {
    res.send('routing /p2/r2');
});

/* '/p2'으로 들어오는 모든 요청을 router에게 위임 
   - http://localhost:3000/p2/r1
   - http://localhost:3000/p2/r2
*/
app.use('/p2', r2);


app.listen(3000, function() {
    console.log('connected');
})
