/* 라우팅 함수 선언[2] */

/* mongoose 모듈 참조 */
const mongoose = require('mongoose');
//mongoose.Promise = Promise;

/* Model 불러오기*/
const Student = mongoose.model('Student');
const Upload = mongoose.model('Upload');
const only = require('only');//object중 원하는 데이터만 sorting하여 리턴하는 helper 모듈

console.log('call : /controllers/students.js');

// 전체 유저 리스트를 보여주기 위해 exports 객체 속성으로 index 설정
exports.index = function (req, res) {
     console.log('students-1');
    Student.list(function (students) {
        console.log('students-2:', students);
        res.render('students/index', {//뷰 템플릿 랜더링(템플릿:index.hbs)
            students: students//students 객체를 템플릿에 바인딩
        });
    });

};

//개별 사용자에 대한 정보를 view를 통해 출력하기 위해 exports 객체 속성으로 show 설정
exports.show = function (req, res) {

    Student.load(req.params.id, function (student) {
        res.render('students/show', {//뷰 템플릿 랜더링(템플릿:show.hbs)
            student: student//student 객체를 템플릿에 바인딩
        });
    });

};

//사용자 등록 form을 view를 통해 파싱하기 위해 exports 객체 속성으로 create 설정
exports.create = function (req, res) {
    res.render('students/create');//뷰 템플릿 랜더링(템플릿:create.hbs)
};

// create.hbs view에서 form 데이터를 받아 데이터베이스에 저장하기 위해 exports 객체 속성으로 store 설정
// <form method="post" action="/store" enctype="multipart/form-data">
exports.store = function (req, res) {
    /* req안에는 name, stdId, age 요청파라미터와 업로드된 파일(files 객체)가 들어있으며
       - files 객체는 업로드한 파일이 없을경우 비어있는 array, 
         업로드한 파일이 있을경우에는 업로드한 파일의 정보를 가진 array 객체임 */
    
    
    /* student 객체 생성(ceate.hbs의 form으로부터 요청 파라미터(name, stdId, age)값을 받아 처리)
       - only(): req.body에 있는 여러개의 요청 파라미터 중에서 지정한 파라미터만 순서대로 가져옴 */
    const student = new Student(only(req.body, 'name stdId age'));
  
    // 데이터베이스에 저장(students 컬렉션)
    student.save(function (err, result) {

        if (err) {
            /* Client Validation도 무시한 후 데이터가 들어온 경우 400코드 전송*/
            res.sendStatus(400)
        }
        
        /* 업로드한 파일이 있으면 */
        if (req.files.length > 0) {

            console.log("파일있음");

            /* 업로드한 파일을 확인하여 데이터베이스에 저장 */
            req.files.forEach(function (file) {
            
                //업로드 모델(upload) 생성
                const upload = new Upload({
                    relatedId: result,
                    type: "student_photo",//업로드 파일 구분 카테고리
                    filename: file.filename,
                    originalname: file.originalname,
                    type: file.mimetype,
                    size: file.size,
                });

                //데이터베이스에 사진 저장(uploads 컬렉션)
                upload.save(function (err, result) {
                    student.photo = result;
                    student.save();
                });

            });
        }
        res.redirect('/');
    });
};

// 개별 사용자에 대한 정보를 view의 form에 출력하기 위해 exports 객체 속성으로 create 설정
exports.edit = function (req, res) {
    Student.load(req.params.id, function (student) {
        res.render('students/edit', {//뷰 템플릿 랜더링(템플릿:edit.hbs)
            student: student//student 객체를 템플릿에 바인딩
        });
    });
};

// edit.hbs view의 form 데이터를 받아 기존 데이터를 업데이트하기 위해 exports 객체 속성으로 update 설정
exports.update = function (req, res) {

    console.log(req.files.length);

     // 데이터베이스에 저장(students 컬렉션)
    Student.load(req.body.id, function (student) {

        student.name = req.body.name;
        student.stdId = req.body.stdId;
        student.age = req.body.age;

        student.save(function (err, result) {

            if (err) {
                /* Client Validation도 무시한 후 데이터가 들어온 경우 400코드 전송*/
                res.sendStatus(400)
            }

            /* 업로드한 파일이 있으면 */
            if (req.files.length > 0) {

                console.log("파일있음");

                /* 업로드한 파일을 확인하여 데이터베이스에 저장 */
                req.files.forEach(function (file) {
                    //업로드 모델(upload) 생성
                    const upload = new Upload({
                        relatedId: result,
                        type: "sstudent_photo",
                        filename: file.filename,
                        originalname: file.originalname,
                        type: file.mimetype,
                        size: file.size,
                    });

                    //데이터베이스에 사진 저장(uploads 컬렉션)
                    upload.save(function (err, result) {
                        student.photo = result;
                        student.save();
                    });

                });
            }
            res.redirect('/');
        })
    });
};

// 데이터 삭제에 대한 정보를 받아 삭제하기 위해 exports 객체 속성으로 delete 설정
exports.delete = function (req, res) {
    // students 컬렉션에서 해당 documents(레코드) 삭제
    Student.remove({
        _id: req.body.id
    }, function (err, result) {
        if (err) return res.send(err);
        res.sendStatus(200)
    });
};
