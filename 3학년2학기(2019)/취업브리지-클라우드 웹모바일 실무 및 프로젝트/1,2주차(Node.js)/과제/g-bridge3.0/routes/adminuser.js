const fs = require('fs');
const express = require('express');
const ejs = require('ejs');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const session = require('express-session');
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));

const db = mysql.createConnection({
  host: 'localhost',      // DB서버 IP주소
  port: 3306,             // DB서버 PORT주소
  user: 'gbdbuser',       // DB접속 아이디
  password: 'jobbr1dge',  // DB암호
  database: 'bridge'      //사용할 DB명
});
const methodOverride = require('method-override');

//  -----------------------------------  회원리스트 기능 -----------------------------------------
// (관리자용) 등록된 회원리스트를 웹 브라우저로 출력합니다.
const PrintUsers = (req, res) => {
  let htmlstream = '';
  let htmlstream2 = '';
  let sql_str

  console.log("req.query.usertype : %s", req.query.usertype);

  if (req.session.auth && req.session.admin) {   // 관리자로 로그인된 경우에만 처리한다
    htmlstream = fs.readFileSync(__dirname + '/../views/header.ejs','utf8');                     // 헤더부분
    htmlstream = htmlstream + fs.readFileSync(__dirname + '/../views/admin_navbar.ejs','utf8');  // 관리자메뉴
    htmlstream = htmlstream + fs.readFileSync(__dirname + '/../views/admin_users.ejs','utf8');   // 유저 리스트
    htmlstream = htmlstream + fs.readFileSync(__dirname + '/../views/footer.ejs','utf8');        // Footer

    sql_str = "SELECT * FROM u19_users";
    switch(req.query.usertype) {
      case '1':
        sql_str += " WHERE TYPE='관리자';"; break;
      case '2':
        sql_str += " WHERE TYPE='판매자';"; break;
      case '3':
        sql_str += " WHERE TYPE='구매자';"; break;
      default:
        sql_str += ";";
    }

    console.log("sql_str: %s", sql_str);

    res.writeHead(200, {'Content-Type':'text/html; charset=utf8'});

    db.query(sql_str, (error, results, fields) => {  // 상품조회 SQL실행
      if (error) {
        res.status(562).end("AdminPrintUserlist: DB query is failed");
      }
      else if (results.length <= 0) {  // 조회된 상품이 없다면, 오류메시지 출력
        htmlstream2 = fs.readFileSync(__dirname + '/../views/alert.ejs','utf8');
        res.status(562).end(ejs.render(htmlstream2, {
          'title': '알리미',
          'warn_title':'상품조회 오류',
          'warn_message':'조회된 상품이 없습니다.',
          'return_url':'/'
        }));
      }
      else {  // 조회된 상품이 있다면, 상품리스트를 출력
        res.end(ejs.render(htmlstream, {
          'title' : '쇼핑몰site',
          'logurl': '/users/logout',
          'loglabel': '로그아웃',
          'regurl': '/users/update',
          'reglabel': req.session.who,
          prodata : results
        }));  // 조회된 상품정보
      } // else
    }); // db.query()
  }
  else {  // (관리자로 로그인하지 않고) 본 페이지를 참조하면 오류를 출력
    htmlstream = fs.readFileSync(__dirname + '/../views/alert.ejs','utf8');
    res.status(562).end(ejs.render(htmlstream, {
      'title': '알리미',
      'warn_title': '권한 없음',
      'warn_message': '관리자가 아니면 해당 기능을 사용할 수 없습니다.',
      'return_url': '/'
    }));
  }
};


//  -----------------------------------  회원정보 수정 폼 출력 기능 -----------------------------------------
// (관리자용) 등록된 회원정보 수정 폼을 출력합니다.
const PrintUserUpdateForm = (req, res) => {
  let htmlstream = '';
  let sql_str;

  if(req.session.auth && req.session.admin) { // 관리자로 로그인한 경우만 실행
    htmlstream = fs.readFileSync(__dirname + '/../views/header.ejs','utf8');                             // Header
    htmlstream = htmlstream + fs.readFileSync(__dirname + '/../views/admin_navbar.ejs','utf8');          // 관리자 메뉴
    htmlstream = htmlstream + fs.readFileSync(__dirname + '/../views/admin_userupdateform.ejs','utf8');  // 회원정보 수정 화면
    htmlstream = htmlstream + fs.readFileSync(__dirname + '/../views/footer.ejs','utf8');                // Footer

    sql_str = "SELECT * FROM u19_users WHERE UID='" + req.query.uid + "';";
    db.query(sql_str, (error, results, fields) => {
      if (error) {
        res.status(562).end("DB Error!");
      }
      else {
        if (results.length <= 0) {  // select 조회 결과가 없는 경우
          htmlstream = fs.readFileSync(__dirname + '/../views/alert.ejs','utf8');
          res.status(562).end(ejs.render(htmlstream, {
            'title': '알리미',
            'warn_title' : 'DB조회 오류',
            'warn_message' : '일치하는 회원이 없습니다.',
            'return_url' : '/adminuser/list'
          }));
        }
        else {  // select 조회결과가 있는 경우
          results.forEach((item, index) => {
            res.writeHead(200, {'Content-Type':'text/html; charset=utf8'});
            res.end(ejs.render(htmlstream, {
              'title' : '쇼핑몰site',
              'logurl' : '/users/logout',
              'loglabel' : '로그아웃',
              'regurl' : '/users/update',
              'reglabel' : req.session.who,
              'uid' : item.UID,
              'pw' : item.PW,
              'name' : item.NAME,
              'type' : item.TYPE,
              'point' : item.POINT,
              'phone' : item.PHONE,
              'addr' : item.ADDR
            }));
          }); /* foreach */
        }  // else
      }  // else
    });
  }
  else { // 관리자 로그인이 아닌 경우 오류 출력
    htmlstream = fs.readFileSync(__dirname + '/../views/alert.ejs','utf8');
    res.status(562).end(ejs.render(htmlstream, {
      'title': '알리미',
      'warn_title': '권한 없음',
      'warn_message': '관리자가 아니므로 이 기능을 사용할 수 없습니다.',
      'return_url': '/'
    }));
  }
}


// 회원정보 수정 폼에서 수정된 회원 정보를 DB에 반영합니다.
const HandleUserUpdate = (req, res) => {  // 회원정보 수정
  let body = req.body;
  let htmlstream = '';
  let sql_str;

  console.log('수정 화면에서 body.uid: %s', body.uid);

  if (req.session.auth && req.session.admin) { // 관리자일 경우에만 실행
    if (body.uid == '') {
      console.log("회원 아이디가 입력되지 않아 DB에 저장할 수 없습니다.");
      res.status(561).end('<meta charset="utf-8">상품번호가 입력되지 않아 등록할 수 없습니다');
    }
    else {
      sql_str = "UPDATE u19_users SET PW=?, NAME=?, PHONE=?, ADDR=?, TYPE=?, POINT=? WHERE UID='" + body.uid + "';";
      db.query(sql_str, [body.pw, body.name, body.phone, body.addr, body.type, body.point], (error, results, fields) => {
        if (error) {
          htmlstream = fs.readFileSync(__dirname + '/../views/alert.ejs','utf8');
          res.status(562).end(ejs.render(htmlstream, {
            'title': '알리미',
            'warn_title': 'DB 오류',
            'warn_message': 'DB 오류가 발생하였습니다. 원인을 파악하여 재시도 바랍니다',
            'return_url': '/'
          }));
        }
        else {
          console.log("%s 회원 정보 수정에 성공하였으며, DB에 반영되었습니다!", body.itemid);
          res.redirect('/adminuser/list');
        }
      });
    }
  }
  else { // 관리자가 아닌 경우 에러 출력
    htmlstream = fs.readFileSync(__dirname + '/../views/alert.ejs','utf8');
    res.status(562).end(ejs.render(htmlstream, {
      'title': '알리미',
      'warn_title': '권한 없음',
      'warn_message': '관리자가 아니므로 이 기능을 사용할 수 없습니다.',
      'return_url': '/'
    }));
  }
};


// 회원정보 수정 양식에서 삭제 버튼 클릭 시 DB에서 해당 회원을 삭제합니다.
const HandleUserDelete = (req, res) => {  // 회원 삭제
  let body = req.body;
  let htmlstream = '';
  let sql_str;

  console.log("삭제 화면에서 body.uid: %s", body.uid);

  if(req.session.auth && req.session.admin) {
    sql_str = "DELETE FROM u19_users WHERE UID='" + body.uid + "';";
    db.query(sql_str, (error, results, fields) => {
      if (error) {
        res.status(562).end("DB Error!");
      }
      else {
        if (results.length <= 0) {  // where 조회 결과가 없는 경우
          htmlstream = fs.readFileSync(__dirname + '/../views/alert.ejs','utf8');
          res.status(562).end(ejs.render(htmlstream, {
            'title': '알리미',
            'warn_title' : 'DB삭제 오류',
            'warn_message' : 'id가 일치하는 회원이 없습니다.',
            'return_url' : '/adminuser/list'
          }));
        }
        else {  // where 조회결과가 있는 경우
          console.log('%s 회원을 정상적으로 삭제했습니다.', body.uid);
          res.redirect('/adminuser/list');
        }  // else
      }  // else
    });
  }
  else { // 관리자로 로그인하지 않은 경우 오류 출력
    htmlstream = fs.readFileSync(__dirname + '/../views/alert.ejs','utf8');
    res.status(562).end(ejs.render(htmlstream, {
      'title': '알리미',
      'warn_title': '권한 없음',
      'warn_message': '관리자가 아니므로 이 기능을 사용할 수 없습니다.',
      'return_url': '/'
    }));
  }
};

router.get('/list', PrintUsers);                  // 등록된 회원 리스트 출력
router.get('/update', PrintUserUpdateForm);       // 유저 정보 수정 폼 출력(관리자)
router.put('/update', HandleUserUpdate);          // 수정된 정보 DB로 반영
router.delete('/deletion', HandleUserDelete);     // 회원 삭제

module.exports = router;
