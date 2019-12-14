/* express를 이용한 웹서버 구축 */
/* eslint-disable */
//static 미들웨어 : 특정 폴더의 파일들을 특정 패스로 접근할 수 있도록 지정

//express 모듈 추가
const express = require('express')
const http = require('http');
const path = require('path');

//express 객체 생성
const app = express();

//서버 포트 설정 
app.set('port', process.env.PORT || 3000);

//static 미들웨어 설정(static()함수를 미들웨어로 설정) - 특정폴더(public) 오픈 공유
//path.join:상위폴더와 하위폴더(파일이름)을 매핑(현재폴더 path(__dirname)와 public 폴더를 조인)
app.use(express.static(path.join(__dirname, 'public')));
//브라우저에서 요청패스지정할 때 :  http://localhost:3000/imges/img.png

//use() 함수를 사용하여 미들웨어 등록 - 미들웨어 : 클라이언트에서 요청이 오면 처리
app.use((req, res, next) => {
    console.log('첫번째 미들웨어 호출됨.');
       
    res.send('<img src="/imges/img.png" align="right">');
});

//express(app)를 사용하여 서버 객체 생성(listener, port, collback)
const server = http.createServer(app).listen(app.get('port'), () => {
    console.log('익스프레스 웹 서버 실행 %d', app.get('port'));
});