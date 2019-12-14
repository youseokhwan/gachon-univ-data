/* app을 구동하기 위한 config 
   - 익스프레스 설정
*/

/* 필요 모듈 참조 */
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');

console.log('call: /config/express.js');

/* app.js 파일에서 "app"을 인자로 받음 */
module.exports = function (app) {
    //bodyParser 미들웨어 등록(bodyParser를 사용해 요청 파라미터 파싱)
	app.use(bodyParser.json());//application/json 파싱
	app.use(bodyParser.urlencoded({//application/x-www-form-urlencoded 파싱
		extended: true
	}));

    //이미지,css,html 등 Resource 파일의 공유를 위한 폴더 설정
	app.use(express.static('public')); 

    /* 뷰 템플릿 엔진 및 옵션 설정(뷰 템플릿으로 사용할 핸들바 옵션 설정)
       - 사용자에게 응답할 웹 문서의 기본 형태를 뷰 템플릿 파일로 만들어 사용하는 것을 권장
       - 뷰 템플릿을 사용하면 웹 문서의 기본 형태는 뷰 템플릿으로 만들고,
         DB에서 조회한 데이터를, 템플릿 안에 선언된 데이터 바인딩 부분에 넣기만 하면 됨
       - 이렇게 뷰 템플릿을 사용해 웹 문서를 자동으로 생성한 후 응답을 보내는 역할을 하는 것이
         뷰 템플릿 엔진임       
    */
	app.engine('.hbs', exphbs({
		extname: '.hbs',
		partialsDir: __dirname + '/../app/views/partials',//파셜 파일 경로
		defaultLayout: __dirname + '/../app/views/layouts/default.hbs',//디폴트 레이아웃
		layoutsDir: __dirname + '/../app/views/layouts'//레이아웃 파일 경로
	})); //사용할 뷰 엔진의 option 설정

     //뷰 템플릿 정의
	app.set('view engine', '.hbs'); //사용할 뷰 엔진을 정의
	app.set('views',path.join(__dirname,'/../app/views')); //뷰가 있는 디렉토리를 정의

};