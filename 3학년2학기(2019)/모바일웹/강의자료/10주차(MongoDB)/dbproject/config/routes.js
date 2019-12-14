/* app을 구동하기 위한 라우팅 함수 등록[3]
   - controllers 폴더에 있는 students.js 참조
*/

//관련 모듈 참조
const students = require('../app/controllers/students');//students 모듈 참조
const multer = require('multer');
const path = require('path');
const mongoose = require('mongoose');

console.log('call: /config/routes.js');

/* multer.diskStorage() 메서드로 파일 업로드를 위한 multer 설정
   - 업로드할 파일의 저장경로(폴더), 파일명 등을 설정 */
const storage = multer.diskStorage({
	// 업로드할 폴더(프로젝트 폴더안에 만들어야 함)
	destination: './public/uploads/',
	/* 업로드된 파일은 요청객체(req)의 files 속성에 들어가며,
       파일 이름은 클라이언트에서 보내온 name 속성값이 됨
       - 저장할 파일명의 중복울 막기 위해 filename 속성으로 고유한 파일이름으로 변경 */
	filename: function (req, file, cb) {
        console.log("file: ", file);
        console.log("cb: ", cb);
        
		/* ObjectId()는 절대로 중복될 수 없도록 고안된 값(저장시 파일명 중복 방지) 
           - ObjectId로 저장하면 저장 시점의 timeStamp + 프로세스값 + 랜덤숫자로 구성*/
		file.uploadedFile = {
			name: mongoose.Types.ObjectId(),
			ext: file.mimetype.split('/')[1]
		};
        //cb(null, 저장파일명)
		cb(null, file.uploadedFile.name + '.' + file.uploadedFile.ext);
	}
});

// multer 설정값을 바탕으로 초기화를 진행합니다. 
const uploads = multer({ storage: storage });

// 라우팅 함수 설정 (students.js에서 선언한 함수를 가져와서 라우팅 설정)
/* app.js 파일에서 "app"을 인자로 받음 */
module.exports = function (app){
	app.get('/', students.index);//전체 유저 리스트를 보여주기 위한 라우팅(students모듈의 index함수)
	app.get('/show/:id', students.show);//개별 사용자에 대한 정보를 view를 통해 출력하기 위한 라우팅
	app.get('/create', students.create);//사용자 등록을 위한 form을 view를 통해 파싱하는 라우팅
    /* 파일 업로드를 위한 라우팅 설정
       1) 클라이언트에서 post 방식으로 파일 업로드 요청이 오면
       2) multer 모듈(uploads.any())을 사용하여 설정된 업로드 폴더에 파일을 업로드 시킨 후
       3) students.store 모듈을 사용하여 데이터베이스(uploads 컬렉션)에 업로드된 파일 정보를 저장함
    */
	app.post('/store', uploads.any(),students.store);//create view에서 form 데이터를 받아 DB에 저장
	app.get('/edit/:id', students.edit);//개별 사용자에 대한 정보를 view의 form에 출력하기 위한 라우팅
	app.post('/update',uploads.any(),students.update);//edit view의 form 데이터를 받아 업데이트 하기 위한 라우팅
	app.post('/delete', students.delete);//데이터 삭제를 위한 라우팅
};