/* ===== 경락정보서비스 Main program ====*/

console.log('call : app.js');

// 필요한 모듈 참조
const fs = require('fs');
const express = require("express");
const mongoose = require("mongoose");

//==== 패스포트 모듈 참조(1) ======//
//사용자 인증 처리에 필요한 기본 기능을 제공하는 모듈
const passport = require('passport');

// 포트번호, DB, 서비스키, URL 등 위한 환경설정 모듈 참조
const ENV = require("./config/enviroment");

//express 객체 생성
const app = express();

/* 'app/models' 폴더 path 설정 */
const {join} = require('path');
//== const join = require('path').join;
const models = join(__dirname, 'app/models');

/* models 폴더에 있는 모델 설정파일(.js)을 전부 읽어서
   해당 모듈 참조
*/
fs.readdirSync(models)
  .filter(file => ~file.search(/^[^\.].*\.js$/))
  .forEach(file => require(join(models, file)));

/* passport, express,  routes 설정파일 적용 */
require('./config/passport/passport')(passport);
require("./config/express")(app,passport);
require("./config/routes")(app,passport);
module.exports = app;


/* 몽고디비연결 */
mongoose.connect(ENV.DATABASE, {
}, err => {
    if (err) {
        console.log('DB is not connected');
        console.log(err);
    }else{
        console.log('DB connected');
    }
});


/* 서버 시작*/
app.listen(ENV.PORT || 3000, () => {
    console.log("running on "+ENV.PORT || 3000);
});
