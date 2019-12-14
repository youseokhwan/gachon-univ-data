<!-- express를 이용한 웹서버 구축 -->
//Router를 사용해 요청 라우팅하는 방법
//url 파라미터 사용하기
//express-error-handler 미들웨어로 오류 메시지 보내기

/* eslint-disable */

//express 모듈 추가
const express = require('express')
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
// 에러 핸들러 모듈 사용(npm install express-error-handler --save)
const expressErrorHandler = require('express-error-handler');
//express 함수를 실행하여 express 서버 객체를 생성
const app = express();

//서버 포트 설정 : set() 함수 사용(PORT라는 환경변수를 사용거나 3000번을 사용하라고 지정)
app.set('port', process.env.PORT || 3000);

//static 미들웨어 설정 - 특정폴더(public) 오픈 공유
app.use(express.static(path.join(__dirname, 'public')));

//body-parser 등록
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Express4에는 Router 미들웨어가 포함되어 있음 - Router 객체 참조
var router = express.Router();

/* route() 매서드를 이용하여 요청 라우팅 설정 - url 파라미터 사용
   - url 파라미터 : 요청 패스의 일부를 라우팅의 파라미터로 사용할 수 있음
   - url 파라미터를 사용하여 '/process/login/' 뒤에 오는 값(:name)을 
     파라미터로 사용하도록 설정
   - 이렇게 지정한 파라미터는 req.params 객체안에 들어가기 때문에
     전달된 값은 req.params.name 속성으로 가져올 수 있음
*/
router.route('/process/login/:name').post((req, res) => {
    console.log('/process/login/:name 라우팅 함수에서 받음.');
    
    //:name URL 파라미터에서 넘어온 요청 파라미터 추출(params객체의 name속성으로 추출) 
    const paramName = req.params.name;
    
    //요청 파라미터 추출
    const paramId = req.body.id || req.query.id;
    const paramPs = req.body.ps || req.query.ps;
    
    res.writeHead(200, {'Content-Type' : 'text/html; Charset=utf-8'});
    res.write('<h1>Express 서버에서 응답한 결과입니다.</h1>');
     res.write('<div><p>Param name : ' + paramName + '</p></div>');
	res.write('<div><p>Param id : ' + paramId + '</p></div>');
	res.write('<div><p>Param password : ' + paramPs + '</p></div>');
	res.write("<br><br><a href='/login3.html'>로그인 페이지로 돌아가기</a>");
    res.end();
});

//라우터 객체를 app객체에 등록
app.use('/', router);

// 404 에러 페이지 처리
const errorHandler = expressErrorHandler({
    static: {
      '404': './public/404.html'
    }
});

//expressErrorHandler 등록 -  에러 처리
app.use(expressErrorHandler.httpError(404));
app.use(errorHandler);

//express(app)를 사용하여 서버 객체 생성(listener, port, collback)
const server = http.createServer(app).listen(app.get('port'), () => {
    console.log('익스프레스 웹 서버 실행 %d', app.get('port'));
});