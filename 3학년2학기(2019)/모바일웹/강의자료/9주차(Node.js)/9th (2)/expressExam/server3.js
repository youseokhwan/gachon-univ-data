/* eslint-disable */

/* http 모듈을 이용한 웹 서버 구축 */

//http 모듈 추가
const http = require('http');

//이미지 파일을 처리하기 위해 fs 모듈 추가
const fs = require('fs');

//웹 서버 객체 생성 
const server = http.createServer();

//host 설정
const host = '192.168.1.3';
//사용할 포트 설정
const port = 3000;
//listen() 메서드를 호출하여 요청대기
server.listen(port, host, 50000, () => {
   console.log('웹서버가 실행되었습니다. : %s, %d', host, port);          
});

//클라이언트에서 요청이 들어오면 connection 이벤트가 발생 - 서버-클라이언트 연결
server.on('connection', (socket) => {//connection되면 socket이 리턴됨
    //socket의 address() 객체 참조
    var addr = socket.address();
    console.log('클라이언트가 접속했습니다. : %s, %d', addr.address, addr.port);
    
});

//클라이언트에서 요청이 들어오면 request 이벤트가 발생 - 요청 응답
server.on('request', (req, res) => {//요청객체, 응답객체
    console.log('클라이언트 요청이 들어 왔습니다.');
    
    var filename = __dirname + '/img/car.png';
    
    console.log(filename);
    
    //file 읽기(path, 콜백함수)
    fs.readFile(filename, (err, data) => {
        //클라이언트에 응답
        res.writeHead(200, {'Content-Type':'Image/png'});
        //응답할 본문을 작성
        res.write(data); 
        res.end();
    })
});