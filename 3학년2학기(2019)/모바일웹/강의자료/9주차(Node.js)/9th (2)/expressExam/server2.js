/* eslint-disable */

/* http 모듈을 이용한 웹 서버 구축 */

//모듈 추가
const http = require('http');

//웹 서버 객체 생성 
const server = http.createServer();

//host 설정
const host = '192.168.1.3';
//var host = '127.0.0.1';
//사용할 포트 설정
const port = 3000;

/* listen() 메서드를 호출하면 웹서버가 동작하여 요청대기
   - 해당 포트를 통해 요청이 들어오면 콜백함수 실행
   - port, host, 동시접속자수(backlog), 콜백함수
*/
server.listen(port, host, 50000, function() {
   console.log('웹서버가 실행되었습니다. : %s, %d', host, port);          
});

//클라이언트에서 요청이 들어오면 connection 이벤트가 발생
server.on('connection', function(socket){//connection되면 socket이 전달됨
    //socket의 address() 객체 참조
    var addr = socket.address();
    console.log('클라이언트가 접속했습니다. : %s, %d', addr.address, addr.port);
    
});

//클라이언트에서 요청이 들어오면 request 이벤트가 발생
server.on('request', (req, res) => {//요청객체, 응답객체
    console.log('클라이언트 요청이 들어 왔습니다.');
    //console.dir(req);
    
    //클라이언트에 응답(헤더정보를 클라이언트에 전송(200:정상)
    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    //응답할 본문을 작성
    res.write('<h1>웹서버로부터 받은 응답입니다.</h1>');
    res.write('<h2>요청을 처리했습니다.</h2>');
    //클라이언트로 응답을 전송
    res.end();
});