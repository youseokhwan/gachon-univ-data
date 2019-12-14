/*  파일 업로드하기
 * 웹브라우저에서 아래 주소의 페이지를 열고 웹페이지에서 요청
 * - http://localhost:3000/public/photo.html
 * - 파일업로드를 위해 클라이언트에서 지정한 요청 파라미터 이름은 photo 임
 */

/* 파일 전체에서 ESLint 규칙 경고 미사용 선언 */
/* eslint-disable */

// Express 기본 모듈 불러오기
var express = require('express')
  , http = require('http')
  , path = require('path');

// Express의 미들웨어 불러오기
var bodyParser = require('body-parser')
  , cookieParser = require('cookie-parser')
  , errorHandler = require('errorhandler');

// 에러 핸들러 모듈 사용
var expressErrorHandler = require('express-error-handler');

// Session 미들웨어 불러오기
var expressSession = require('express-session');

// 파일 업로드용 미들웨어
var multer = require('multer');
// 파일 시스템 모듈 미들웨어
var fs = require('fs');

//클라이언트에서 ajax로 요청 시 CORS(다중 서버 접속) 지원
var cors = require('cors');

// 익스프레스 객체 생성
var app = express();

// 포트 기본 속성 설정
app.set('port', process.env.PORT || 3000);

// body-parser 등록
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// public 폴더와 uploads 폴더 오픈(uploads 폴더 미리 만들 것)
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// cookie-parser 설정
app.use(cookieParser());

// 세션 설정
app.use(expressSession({
	secret:'my key',
	resave:true,
	saveUninitialized:true
}));

//클라이언트에서 ajax로 요청 시 CORS(다중 서버 접속) 지원
app.use(cors());

<!-- 파일 업로드를 위한 설정 -->
//multer 미들웨어 사용 : 미들웨어 사용 순서 중요  body-parser -> multer -> router
// 파일 제한 : 10개, filesize : 1G
var storage = multer.diskStorage({
    destination: function (req, file, callback) {//파일 저장 폴더 지정 
        callback(null, 'uploads')
    },
    filename: function (req, file, callback) {//저장 파일이름 지정
        //callback(null, file.originalname + Date.now());
               
        //확장자를 별도롤 저장하여 처리하는 방법
        var extension = path.extname(file.originalname);//파일 확장자 추출
        var basename = path.basename(file.originalname, extension);//파일명만 추출
        callback(null, basename + Date.now() + extension);
    }
});

//multer 설정
var upload = multer({ 
    storage: storage,//파일 저장 장소 등
    limits: {//업로드 파일 수(10개), 파일 크기(1G) 제한 속성 설정
		files: 10,
		fileSize: 1024 * 1024 * 1024
	}
});

// 라우터 객체 참조
var router = express.Router();

/* 사용자가 업로드한 파일을 받아서 처리할 라우팅 함수 설정
   - 파일의 정보를 확인하고, 클라이언트에 응답을 보내는 기능 수행
*/
//upload.array('photo', 1) : photo라는 이름의 파일이 1개라도 넘어오면 배열에 저장하도록 설정
router.route('/process/photo').post(upload.array('photo', 1), function(req, res) {
	console.log('/process/photo 호출됨.');
	
	try {
        /* 업로드된 파일은 요청객체(req)의 files 객체(배열객체)에 저장됨, 
           따라서 업로드한 파일의 정보를 확인할 때는 req.files 배열에 있는 원소들을 참조
        */
		var files = req.files;//업로드 된 파일 추출
	
        console.dir('#===== 업로드된 첫번째 파일 정보 =====#')
        
        if (files.length > 0) {
            console.dir(req.files[0]);
        } else {
            console.log('업로드 된 파일이 없습니다.');
        }
        
        console.dir('#=====#')
        
		// 현재의 파일 정보를 저장할 변수 선언
		var originalname = '', //클라이언트에서 보낼 때의 원본 파일이름
			filename = '',     //서버에 저장될 파일 이름
			mimetype = '',     //MIME Type
			size = 0;          //파일 크기
		
        // 배열에 들어 있는 파일을 확인
		if (Array.isArray(files)) {// 배열에 들어가 있는 경우(설정에서 1개의 파일도 배열에 넣게 했음)
	        console.log("배열에 들어있는 파일 갯수 : %d", files.length);
	        
	        for (var index = 0; index < files.length; index++) {
	        	originalname = files[index].originalname;
	        	filename = files[index].filename;
	        	mimetype = files[index].mimetype;
	        	size = files[index].size;
	        }
	        
	    } else {   // 배열에 들어가 있지 않은 경우 (현재 설정에서는 해당 없음)
	        console.log("파일 갯수 : 1 ");
	        
	    	originalname = files[index].originalname;
	    	filename = files[index].name;
	    	mimetype = files[index].mimetype;
	    	size = files[index].size;
	    }
		
		console.log('현재 파일 정보 : ' + originalname + ', ' + filename + ', '
				+ mimetype + ', ' + size);
		
		// 클라이언트에 응답 전송
		res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
		res.write('<h3>파일 업로드 성공</h3>');
		res.write('<hr/>');
		res.write('<p>원본 파일명 : ' + originalname + ' -> 저장 파일명 : ' + filename + '</p>');
		res.write('<p>MIME TYPE : ' + mimetype + '</p>');
		res.write('<p>파일 크기 : ' + size + '</p>');
		res.end();
		
	} catch(err) {
		console.dir(err.stack);
	}			
});
 
//router 미들웨어 등록
app.use('/', router);

// 404 에러 페이지 처리
var errorHandler = expressErrorHandler({
    static: {
      '404': './public/404.html'
    }
});

app.use( expressErrorHandler.httpError(404) );
app.use( errorHandler );

// Express 서버 시작
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});


