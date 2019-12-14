/* express를 이용한 웹서버 구축 */
/* eslint-disable */

//static 미들웨어 : 특정 폴더의 파일들을 특정 패스로 접근할 수 있도록 지정

//express 모듈 추가
var express = require('express')
var http = require('http');
var path = require('path');

//express 객체 생성
var app = express();

//서버 포트 설정 
app.set('port', process.env.PORT || 3000);

//static 미들웨어 설정 - 특정폴더(public) 오픈 공유
//public 폴더 안에 있는 파일을 웹 브라우저에서 '/public' 패스로 접근할 때
app.use('/public', express.static(path.join(__dirname, 'public')));
//브라우저에서 요청패스지정할 때 :  http://localhost:3000/public/imges/img.png

//use() 함수를 사용하여 미들웨어 등록 - 미들웨어 : 클라이언트에서 요청이 오면 처리
app.use(function(req, res, next) {
    console.log('첫번째 미들웨어 호출됨.');
       
    res.send('<img src="/imges/img.png" align="right">');
});

//express(app)를 사용하여 서버 객체 생성(listener, port, collback)
var server = http.createServer(app).listen(app.get('port'), function() {
    console.log('익스프레스 웹 서버 실행 %d', app.get('port'));
});