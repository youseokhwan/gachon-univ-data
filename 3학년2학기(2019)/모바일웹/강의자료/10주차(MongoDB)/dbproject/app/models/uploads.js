/* 사진 업로드 스키마 선언[1] */

//strict 모드 선언 : 엄격한 문법 검사 키워드
'use strict';

/* mongoose, Schema 모듈 참조 */
const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

console.log('call : /models/uploads.js');

/* Mongoose의 Schema는 MongoDB에 저장되는 document의 Data 구조 즉 필드 타입에 관한 정보를 
   JSON 형태로 정의한 것으로 RDBMS의 테이블 정의와 유사한 개념
*/
// 스키마 정의
const UploadSchema = new Schema({
    //외래키(students 컬렉션 ObjectId ) 형식으로 데이터를 맵핑시킴
	relatedId: { type : Schema.ObjectId}, 
	type: { type : String},
	filename: { type : String},
	originalname: { type : String},
	size: { type : Number},
	createdAt  : { type : Date, default : Date.now }
});

/* 필수 속성 required validation
   - 스키마 객체의 path 메서드를 호출하여 필수 속성 컬럼을 지정한 후 required() 메서드를 호출하여
    필수 입력 컬럼으로 만든다.
   - 필수 속성을 입력하지 않으면  'Article title cannot be blank'라는 오류 메시지 전달함
*/
UploadSchema.path('relatedId').required(true, 'Article title cannot be blank');
UploadSchema.path('filename').required(true, 'Article body cannot be blank');
UploadSchema.path('originalname').required(true, 'Article body cannot be blank');
UploadSchema.path('size').required(true, 'Article body cannot be blank');

/*   model 생성((StudentDB에 uploads 컬렉션이 자동으로 생성됨))
   - model() 메소드에 name(문자열)과 schema를 전달하여 model을 생성한다. 
   - model name은 보통 대문자로 시작한다.
   - model('Upload', 스키마)-컬렉션 이름을 생략하면 모델 name을 유추해서 컬렉션을 자동으로 생성
   - 따라서 모델을 생성하면 몽고 DB에 'uploads'라는 컬렉션이 자동으로 생성됨
     (collection 이름은 소문자로 구성되며 끝에 s를 붙임) 
*/
mongoose.model('Upload', UploadSchema);
