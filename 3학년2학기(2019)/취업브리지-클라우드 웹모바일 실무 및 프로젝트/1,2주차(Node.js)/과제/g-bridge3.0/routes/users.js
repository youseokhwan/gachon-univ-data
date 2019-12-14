const fs = require('fs');
const express = require('express');
const ejs = require('ejs');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const session = require('express-session');
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));

const db = mysql.createConnection({
  host: 'localhost',        // DB서버 IP주소
  port: 3306,               // DB서버 PORT주소
  user: 'gbdbuser',         // DB접속 아이디
  password: 'jobbr1dge',    // DB암호
  database: 'bridge'        //사용할 DB명
});
const methodOverride = require('method-override');


//  -----------------------------------  회원가입기능 -----------------------------------------
// 회원가입 입력 양식을 웹 브라우저로 출력합니다.
const PrintUserRegistrationForm = (req, res) => {
  let htmlstream = '';

  htmlstream = fs.readFileSync(__dirname + '/../views/header.ejs','utf8');
  htmlstream = htmlstream + fs.readFileSync(__dirname + '/../views/buyer_navbar.ejs','utf8');
  htmlstream = htmlstream + fs.readFileSync(__dirname + '/../views/user_regform.ejs','utf8');
  htmlstream = htmlstream + fs.readFileSync(__dirname + '/../views/footer.ejs','utf8');
  res.writeHead(200, {'Content-Type':'text/html; charset=utf8'});

  if (req.session.auth) {  // true :로그인된 상태,  false : 로그인안된 상태
    res.end(ejs.render(htmlstream, {
      'title' : '쇼핑몰site',
      'logurl': '/users/logout',
      'loglabel': '로그아웃',
      'regurl': '/users/update',
      'reglabel': req.session.who
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


// 회원가입 양식에서 입력된 회원정보를 신규등록(DB에 저장)합니다.
const HandleUserRegistration = (req, res) => {  // 회원가입
  let body = req.body;
  let htmlstream='';

  if (body.uid == '' || body.pw1 == '') {
    console.log("데이터 입력되지 않아 DB에 저장할 수 없습니다.");
    res.status(561).end(ejs.render(htmlstream, {
      'title': '알리미',
      'warn_title':'회원가입 오류',
      'warn_message':'아이디와 비밀번호는 반드시 입력해주세요.',
      'return_url':'/users/reg'
    }));
  }
  else {
    db.query('INSERT INTO u19_users (UID, PW, NAME, PHONE, ADDR, TYPE) VALUES (?, ?, ?, ?, ?, ?)',
    [body.uid, body.pw1, body.uname, body.phone, body.addr, body.type], (error, results, fields) => {
      if (error) {
        htmlstream = fs.readFileSync(__dirname + '/../views/alert.ejs','utf8');
        res.status(562).end(ejs.render(htmlstream, {
          'title': '알리미',
          'warn_title':'회원가입 오류',
          'warn_message':'이미 회원으로 등록되어 있습니다. 바로 로그인을 하시기 바랍니다.',
          'return_url':'/users/login'
        }));
      }
      else {
        console.log("회원가입에 성공하였으며, DB에 신규회원으로 등록하였습니다!");
      }
    });
  }
};


// ------------------------------------  로그인 기능 --------------------------------------
// 로그인 화면을 웹브라우저로 출력합니다.
const PrintLoginForm = (req, res) => {
  let htmlstream = '';

  htmlstream = fs.readFileSync(__dirname + '/../views/header.ejs','utf8');
  htmlstream = htmlstream + fs.readFileSync(__dirname + '/../views/buyer_navbar.ejs','utf8');
  htmlstream = htmlstream + fs.readFileSync(__dirname + '/../views/user_loginform.ejs','utf8');
  htmlstream = htmlstream + fs.readFileSync(__dirname + '/../views/footer.ejs','utf8');
  res.writeHead(200, {'Content-Type':'text/html; charset=utf8'});

  if (req.session.auth) {  // true :로그인된 상태,  false : 로그인안된 상태
    res.end(ejs.render(htmlstream, {
      'title' : '쇼핑몰site',
      'logurl': '/users/logout',
      'loglabel': '로그아웃',
      'regurl': '/users/update',
      'reglabel': req.session.who
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


// 로그인을 수행합니다. (사용자 인증 처리)
const HandleLogin = (req, res) => {
  let body = req.body;
  let userid, userpass, username;
  let sql_str;
  let htmlstream = '';

  console.log(body.uid);
  console.log(body.pass);

  if (body.uid == '' || body.pass == '') {
    console.log("아이디나 암호가 입력되지 않아서 로그인할 수 없습니다.");
    htmlstream = fs.readFileSync(__dirname + '/../views/alert.ejs','utf8');
    res.status(562).end(ejs.render(htmlstream, {
      'title': '알리미',
      'warn_title':'로그인 오류',
      'warn_message':'입력되지 않은 항목이 있습니다.',
      'return_url':'/users/login'
    }));
  }
  else {
    sql_str = "SELECT UID, PW, NAME, PHONE, ADDR, POINT, TYPE from u19_users where UID ='" + body.uid + "' and PW='" + body.pass + "';";
    console.log("SQL: " + sql_str);

    db.query(sql_str, (error, results, fields) => {
      if (error) {
        res.status(562).end("Login Fail as No id in DB!");
      }
      else {
        if (results.length <= 0) {  // select 조회결과가 없는 경우 (즉, 등록계정이 없는 경우)
          htmlstream = fs.readFileSync(__dirname + '/../views/alert.ejs','utf8');
          res.status(562).end(ejs.render(htmlstream, {
            'title': '알리미',
            'warn_title':'로그인 오류',
            'warn_message':'일치하는 아이디나 비밀번호가 없습니다.',
            'return_url':'/users/login'
          }));
        }
        else {  // select 조회결과가 있는 경우 (즉, 등록사용자인 경우)
          results.forEach((item, index) => {
            userid = item.UID;
            userpass = item.PW;
            username = item.NAME;
            userphone = item.PHONE;
            userpoint = item.POINT;
            useraddr = item.ADDR;
            usertype = item.TYPE;

            console.log("DB에서 로그인성공한 ID/암호:%s/%s", userid, userpass);

            if (body.uid == userid && body.pass == userpass) {
              req.session.auth = 99;      // 임의로 수(99)로 로그인성공했다는 것을 설정함
              req.session.who = username; // 인증된 사용자명 확보 (로그인후 이름출력용)
              req.session.uid = userid;
              req.session.phone = userphone;
              req.session.addr = useraddr;
              req.session.type = usertype;
              req.session.point = userpoint;

              if (body.uid == 'admin')    // 만약, 인증된 사용자가 관리자(admin)라면 이를 표시
                req.session.admin = true;
              res.redirect('/');
            }
          }); /* foreach */
        } // else
      }  // else
    });
  }
}


// ------------------------------  로그아웃 기능 --------------------------------------
const HandleLogout = (req, res) => {
  req.session.destroy();     // 세션을 제거하여 인증오작동 문제를 해결
  res.redirect('/');         // 로그아웃 후 메인 화면으로 재접속
}


// ------------------------------  정보수정 기능 --------------------------------------
const PrintUserUpdateForm = (req, res) => {
  let body = req.body;
  let htmlstream = '';
  let sql_str;

  htmlstream = fs.readFileSync(__dirname + '/../views/header.ejs','utf8');
  if(req.session.admin) { // 관리자 전용 navbar 출력
    htmlstream = htmlstream + fs.readFileSync(__dirname + '/../views/admin_navbar.ejs','utf8');
  }
  else if(req.session.type == '판매자') { // 판매자 전용 navbar 출력
    htmlstream = htmlstream + fs.readFileSync(__dirname + '/../views/seller_navbar.ejs','utf8');
  }
  else { // 구매자 전용 navbar 출력
    htmlstream = htmlstream + fs.readFileSync(__dirname + '/../views/buyer_navbar.ejs','utf8');
  }
  htmlstream = htmlstream + fs.readFileSync(__dirname + '/../views/user_updateform.ejs','utf8');
  htmlstream = htmlstream + fs.readFileSync(__dirname + '/../views/footer.ejs','utf8');

  if (req.session.auth) {  // true :로그인 상태,  false : 비로그인 상태
    sql_str = "SELECT * FROM u19_users WHERE NAME='" + req.query.name + "';";
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
            'return_url' : '/'
          }));
        }
        else {  // select 조회결과가 있는 경우
          results.forEach((item, index) => {
            console.log(sql_str);

            res.writeHead(200, {'Content-Type':'text/html; charset=utf8'});
            res.end(ejs.render(htmlstream, {
              'title' : '쇼핑몰site',
              'logurl' : '/users/logout',
              'loglabel' : '로그아웃',
              'regurl' : '/users/update',
              'reglabel' : item.NAME,
              'userid' : item.UID,
              'pw' : item.PW,
              'type' : item.TYPE,
              'point' : item.POINT,
              'phone' : item.PHONE,
              'addr' : item.ADDR
            })); /* foreach */
          })  // else
        }  // else
      }
    });
  }
  else {
    req.session.destroy();     // 세션을 제거하여 인증오작동 문제를 해결
    res.redirect('/');         // 로그아웃 후 메인화면으로 재접속
  }
}

// 회원정보 수정 양식에서 입력된 변경된 회원 정보를 DB에 저장합니다.
const HandleUserUpdate = (req, res) => {  // 회원가입
  let body = req.body;
  let sql_str;
  let htmlstream = '';

  if (body.pw1 == '') {
    console.log("비밀번호가 입력되지 않아 DB에 저장할 수 없습니다.");
    htmlstream = fs.readFileSync(__dirname + '/../views/alert.ejs','utf8');
    res.status(561).end(ejs.render(htmlstream, {
      'title': '알리미',
      'warn_title':'회원정보 수정 오류',
      'warn_message':'변경할 비밀번호 혹은 기존 비밀번호를 반드시 입력해주세요.',
      'return_url':'/users/update'
    }));
  }
  else {
    console.log(body.uid);

    sql_str = "UPDATE u19_users SET PW=?, NAME=?, PHONE=?, ADDR=? WHERE UID ='" + req.session.uid + "';";
    db.query(sql_str, [body.pw1, body.uname, body.phone, body.addr], (error, results, fields) => {
      if (error) {
        htmlstream = fs.readFileSync(__dirname + '/../views/alert.ejs','utf8');
        res.status(562).end(ejs.render(htmlstream, {
          'title': '알리미',
          'warn_title':'회원정보 수정 오류',
          'warn_message':'오류가 발생했습니다. 다시 시도해주세요.',
          'return_url':'/'
        }));
      }
      else {
        req.session.who = body.uname;
        req.session.phone = body.phone;
        req.session.addr = body.addr;

        console.log("session who/phone/addr : %s / %s / %s", req.session.who, req.session.phone, req.session.addr);
        console.log("입력된 정보가 성공적으로 DB에 수정되었습니다!");
      }
    });
  }
};


// REST API의 URI와 핸들러를 매핑합니다.
router.get('/', function(req, res) { res.send('respond with a resource 111'); });
router.get('/reg', PrintUserRegistrationForm);    // 회원가입 화면 출력
router.post('/reg', HandleUserRegistration);      // 회원가입 내용을 DB에 등록 처리
router.get('/login', PrintLoginForm);             // 로그인 화면 출력
router.post('/login', HandleLogin);               // 로그인 정보로 인증 처리
router.get('/logout', HandleLogout);              // 로그아웃 기능
router.get('/update', PrintUserUpdateForm);       // 정보수정 화면 출력
router.put('/update', HandleUserUpdate);          // 정보수정 폼에 입력된 정보를 DB에 저장

module.exports = router;
