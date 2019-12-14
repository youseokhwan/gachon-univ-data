/* eslint-disable */
/* express를 이용한 웹서버 구축 -*/

//express 모듈 추가
const express = require('express')
/* 실행 전에 프로젝트 폴더에서 npm install express로 express를 설치할 것 */

//express는 내부적으로 http 모듈을 사용함으로 http 모듈 추가
const http = require('http');

//express 함수를 실행하여 express 객체 생성
const app = express();

/* app객체에 포트 속성 설정
   - set()함수사용(PORT라는 환경변수에 설정된 포트 또는 3000번 설정) */
app.set('port', process.env.PORT || 3000);

//app을 사용하여 서버 객체 생성(http.createServer(app)) =  express를 사용하여 서버 생성
//서버를 생성하여 지정한 port에서 대기하도록 지정하고, 콜백을 지정(listen(port, collback)
const server = http.createServer(app)
                 .listen(app.get('port'), () => {
                  console.log('익스프레스 웹 서버 실행 %d', app.get('port'));
});
    
