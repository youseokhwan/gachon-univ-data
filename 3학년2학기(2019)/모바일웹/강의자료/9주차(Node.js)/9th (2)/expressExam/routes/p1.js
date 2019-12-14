/* eslint-disable */

//express 모듈 추가
var express = require('express')
//라우터 객체 생성
var route = express.Router();

route.get('/r1', function(req, res) {
    res.send('Routing /p1/r1');
});
route.get('/r2', function(req, res) {
    res.send('Routing /p1/r2');
});

module.exports = route;