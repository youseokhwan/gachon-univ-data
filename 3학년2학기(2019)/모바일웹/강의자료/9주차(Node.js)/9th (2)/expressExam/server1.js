/* eslint-disable */

/* http 모듈을 이용한 웹 서버 구축 */

//모듈 추가
const http = require('http');

/* 웹 서버 객체 생성 */
const server = http.createServer();

//host 설정
//const host = '192.168.1.3';//웹서버의 ip주소 할당
const host = '127.0.0.1';//웹서버의 ip주소 할당
//const host = 'localhost';//웹서버의 ip주소 할당

//사용할 포트 설정
const port = 3000;

/* listen() 메서드를 호출하면 웹서버가 동작하여 요청대기
   - 해당 포트를 통해 요청이 들어오면 콜백함수 실행
   - port, host, 동시접속자수(backlog), 콜백함수
*/
server.listen(port, host, 50000, function() {
   console.log('웹서버가 실행되었습니다. : %s, %d', host, port);          
})
