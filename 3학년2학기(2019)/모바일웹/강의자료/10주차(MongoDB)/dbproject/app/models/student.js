/* ==== 학생 정보 스키마 선언[1]  ===== */

/* mongoose, Schema 모듈 참조 */
const mongoose = require('mongoose');
const Schema   = require('mongoose').Schema;

console.log('call: /models/student.js');

/* Mongoose의 Schema는 MongoDB에 저장되는 document의 Data 구조 즉 필드 타입에 관한 정보를 
   JSON 형태로 정의한 것으로 RDBMS의 테이블 정의와 유사한 개념
*/
// Student 컬렉션 스키마 정의
const StudentSchema = new Schema({
	name: {type: String, default: '', trim: true},//이름
	stdId: {type: String, default: '', trim: true},//학번
	age: {type: Number},//나이
    //외래키(uploads 컬렉션 ObjectId) 형식으로 데이터를 맵핑시킴
	photo: { type : Schema.ObjectId, ref: 'Upload'},//사진(Upload(모델명)참조, ObjectId )
	createdAt: {type: Date, default: Date.now}//작성시간
});

/* Schema의 statics 프로퍼티에 사용자 정의 메서드(load, list)를 추가
   - method의 경우는 'this' 키워드를 사용하여 개별 데이터를 다룰때 사용하며
   - statics는 전역(콜렉션 단위)으로 사용하는 내용을 다룰때 사용
*/
StudentSchema.statics = {
    
    /* load 메서드 : 개별 id값으로 객체를 조회하는 메서드 
      - populate() : objectId로 참조한 다른 컬렉션의 객체를 가져와 데이터를 채워준다.
    */
	load: function (_id, cb) {
		this.findOne({_id})
		    .populate('photo')
		    .exec(function (err, student) {
			    cb(student)
		    });
	},

    // list 메서드 : 전체 리스트를 생성일 순으로 조회하는 메서드
	list: function (cb) {
        console.log('student:', cb);
		this.find({}).sort({createdAt: -1}).exec(function (err, students) {
			cb(students)
		});
	},
}

/* 필수 속성 required validation
   - 스키마 객체의 path 메서드를 호출하여 필수 속성 컬럼을 지정한 후 required() 메서드를 호출하여
    필수 입력 컬럼으로 만든다.
   - 필수 속성을 입력하지 않으면  '이름을 필수사항입니다'라는 오류 메시지 전달함
*/
StudentSchema.path('name').required(true, '이름을 필수사항입니다');
StudentSchema.path('stdId').required(true, '학생번호는 필수사항입니다');
StudentSchema.path('age').required(true, '나이는 필수사항입니다.');

/*   model 생성(StudentDB에 students 컬렉션이 자동으로 생성됨)
   - model() 메소드에 name(문자열)과 schema를 전달하여 model을 생성한다. 
   - model name은 보통 대문자로 시작한다.
   - model('Student', 스키마)-컬렉션 이름을 생략하면 모델name을 유추해서 컬렉션을 자동으로 생성
   - 따라서 모델을 생성하면 몽고 DB에 'students'라는 컬렉션이 자동으로 생성됨
     (collection 이름은 소문자로 구성되며 끝에 s를 붙임)  
*/

mongoose.model('Student', StudentSchema);
