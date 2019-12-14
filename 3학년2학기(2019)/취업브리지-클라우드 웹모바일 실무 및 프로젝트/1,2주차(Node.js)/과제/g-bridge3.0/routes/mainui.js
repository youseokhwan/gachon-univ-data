// 메인화면 출력파일
const express = require('express');
const ejs = require('ejs');
const fs = require('fs');
const router = express.Router();
var loglevel = 1;

const GetMainUI = (req, res) => {   // 메인화면을 출력합니다
  let htmlstream = '';

  logging(loglevel, 'router.get() invoked!');

  htmlstream = fs.readFileSync(__dirname + '/../views/header.ejs','utf8');                         // Header 부분
  if (req.session.auth && req.session.admin) { // 관리자 로그인 여부
    htmlstream = htmlstream + fs.readFileSync(__dirname + '/../views/admin_navbar.ejs','utf8');    // 관리자 메뉴
    htmlstream = htmlstream + fs.readFileSync(__dirname + '/../views/admin_content.ejs','utf8');
  }
  else if(req.session.auth && req.session.type == '판매자') { // 판매자 로그인 여부
    htmlstream = htmlstream + fs.readFileSync(__dirname + '/../views/seller_navbar.ejs','utf8');   // 판매자 메뉴
    htmlstream = htmlstream + fs.readFileSync(__dirname + '/../views/user_content.ejs','utf8');    // Content
  }
  else { // 구매자 로그인
    htmlstream = htmlstream + fs.readFileSync(__dirname + '/../views/buyer_navbar.ejs','utf8');    // 구매자 메뉴
    htmlstream = htmlstream + fs.readFileSync(__dirname + '/../views/user_content.ejs','utf8');    // Content
  }
  htmlstream = htmlstream + fs.readFileSync(__dirname + '/../views/footer.ejs','utf8');            // Footer 부분

  res.writeHead(200, {'Content-Type':'text/html; charset=utf8'});
  if (req.session.auth) {  // true :로그인된 상태,  false : 로그인안된 상태
    res.end(ejs.render(htmlstream, {
      'title' : '쇼핑몰site',
      'logurl': '/users/logout',
      'loglabel': '로그아웃',
      'regurl': '/users/update',
      'reglabel':req.session.who
    }));
  }
  else {
    res.end(ejs.render(htmlstream, {
      'title' : '쇼핑몰site',
      'logurl': '/users/login',
      'loglabel': '로그인',
      'regurl': '/users/reg',
      'reglabel':'가입'
    }));
  }
};

const logging = (level, logmsg) => {
  if (level != 0) {
    console.log(level, logmsg)
    loglevel++;
  }
}

// ‘/’ get 메소드의 핸들러를 정의
router.get('/', GetMainUI);

// 외부로 뺍니다.
module.exports = router
