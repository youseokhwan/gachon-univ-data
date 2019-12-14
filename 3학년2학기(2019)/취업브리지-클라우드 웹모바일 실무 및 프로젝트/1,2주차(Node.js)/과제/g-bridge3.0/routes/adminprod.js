const fs = require('fs');
const express = require('express');
const ejs = require('ejs');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const session = require('express-session');
const multer = require('multer');
const upload = multer({dest: __dirname + '/../public/images/uploads/products'});  // 업로드 디렉터리를 설정한다.
const router = express.Router();
const db = mysql.createConnection({
  host: 'localhost',      // DB서버 IP주소
  port: 3306,             // DB서버 Port주소
  user: 'gbdbuser',       // DB접속 아이디
  password: 'jobbr1dge',  // DB암호
  database: 'bridge'      //사용할 DB명
});
const methodOverride = require('method-override');

//  -----------------------------------  상품리스트 기능 -----------------------------------------
// (관리자용) 등록된 상품리스트를 웹 브라우저로 출력합니다.
const PrintProducts = (req, res) => {
  let htmlstream = '';
  let htmlstream2 = '';
  let sql_str

  console.log("req.query.prodtype : %s", req.query.prodtype);

  if (req.session.auth && req.session.admin) {   // 관리자로 로그인된 경우에만 처리한다
    htmlstream = fs.readFileSync(__dirname + '/../views/header.ejs','utf8');                     // 헤더부분
    htmlstream = htmlstream + fs.readFileSync(__dirname + '/../views/admin_navbar.ejs','utf8');  // 관리자 메뉴
    htmlstream = htmlstream + fs.readFileSync(__dirname + '/../views/admin_product.ejs','utf8'); // 괸리자 메인화면
    htmlstream = htmlstream + fs.readFileSync(__dirname + '/../views/footer.ejs','utf8');        // Footer

    sql_str = "SELECT * FROM u19_products";
    switch(req.query.prodtype) {
      case '1':
        sql_str += " WHERE CATEGORY='선풍기';"; break;
      case '2':
        sql_str += " WHERE CATEGORY='에어컨';"; break;
      case '3':
        sql_str += " WHERE CATEGORY='냉풍기';"; break;
      case '4':
        sql_str += " WHERE CATEGORY='미니선풍기';"; break;
      case '5':
        sql_str += " WHERE CATEGORY='냉장고';"; break;
      default:
        sql_str += ";";
    }

    console.log("sql_str: %s", sql_str);
    res.writeHead(200, {'Content-Type':'text/html; charset=utf8'});

    db.query(sql_str, (error, results, fields) => {  // 상품조회 SQL실행
      if (error) {
        res.status(562).end("AdminPrintProd: DB query is failed");
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
  else if (req.session.auth && req.session.type == '판매자') {  // 판매자일 경우 판매자 전용 list 화면으로 redirect
    res.redirect('/sellerprod/list?prodtype=0');
  }
  else {  // (관리자로 로그인하지 않고) 본 페이지를 참조하면 오류를 출력
    htmlstream = fs.readFileSync(__dirname + '/../views/alert.ejs','utf8');
    res.status(562).end(ejs.render(htmlstream, {
      'title': '알리미',
      'warn_title':'상품등록기능 오류',
      'warn_message':'관리자로 로그인되어 있지 않아서, 상품등록 기능을 사용할 수 없습니다.',
      'return_url':'/'
    }));
  }
};


//  -----------------------------------  상품등록기능 -----------------------------------------
// 상품등록 입력양식을 브라우져로 출력합니다.
const PrintProductRegistrationForm = (req, res) => {
  let htmlstream = '';

  if (req.session.auth && req.session.admin) { // 관리자 로그인
    htmlstream = fs.readFileSync(__dirname + '/../views/header.ejs','utf8');                       // Header
    htmlstream = htmlstream + fs.readFileSync(__dirname + '/../views/admin_navbar.ejs','utf8');    // 관리자 메뉴
    htmlstream = htmlstream + fs.readFileSync(__dirname + '/../views/product_regform.ejs','utf8'); // 상품등록 화면
    htmlstream = htmlstream + fs.readFileSync(__dirname + '/../views/footer.ejs','utf8');          // Footer

    res.writeHead(200, {'Content-Type':'text/html; charset=utf8'});
    res.end(ejs.render(htmlstream, {
      'title' : '쇼핑몰site',
      'logurl': '/users/logout',
      'loglabel': '로그아웃',
      'regurl': '/users/update',
      'reglabel': req.session.who
    }));
  }
  else if (req.session.auth && req.session.type == '판매자') { // 판매자 로그인
    htmlstream = fs.readFileSync(__dirname + '/../views/header.ejs','utf8');                       // Header
    htmlstream = htmlstream + fs.readFileSync(__dirname + '/../views/seller_navbar.ejs','utf8');   // 판매자 메뉴
    htmlstream = htmlstream + fs.readFileSync(__dirname + '/../views/product_regform.ejs','utf8'); // 상품등록 화면
    htmlstream = htmlstream + fs.readFileSync(__dirname + '/../views/footer.ejs','utf8');          // Footer

    res.writeHead(200, {'Content-Type':'text/html; charset=utf8'});
    res.end(ejs.render(htmlstream, {
      'title' : '쇼핑몰site',
      'logurl': '/users/logout',
      'loglabel': '로그아웃',
      'regurl': '/users/update',
      'reglabel': req.session.who
    }));
  }
  else {
    htmlstream = fs.readFileSync(__dirname + '/../views/alert.ejs','utf8');
    res.status(562).end(ejs.render(htmlstream, {
      'title': '알리미',
      'warn_title':'상품등록기능 오류',
      'warn_message':'관리자 혹은 판매자로 로그인되어 있지 않아서, 상품등록 기능을 사용할 수 없습니다.',
      'return_url':'/'
    }));
  }
};


// 상품등록 양식에서 입력된 상품정보를 신규로 등록(DB에 저장)합니다.
const HandleProductRegistration = (req, res) => {  // 상품등록
  let body = req.body;
  let htmlstream = '';
  let prodimage = '/images/uploads/products/'; // 상품이미지 저장 디렉터리
  let picfile = req.file;
  let result = {
    originalName : picfile.originalname,
    size : picfile.size
  };

  if (req.session.auth && (req.session.admin || req.session.type == '판매자')) {   // 관리자 혹은 판매자일 경우
    if (body.itemid == '') {
      console.log("상품번호가 입력되지 않아 DB에 저장할 수 없습니다.");
      res.status(561).end('<meta charset="utf-8">상품번호가 입력되지 않아 등록할 수 없습니다');
    }
    else {
      prodimage = prodimage + picfile.filename;
      db.query('INSERT INTO u19_products (ITEMID, CATEGORY, PNAME, MAKER, MODEL, AMOUNT, EVENT, DCRATE, PRICE, PICTURE, SELLERID) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [body.itemid, body.category, body.pname, body.maker, body.modelnum,
      body.amount, body.event, body.dcrate, body.price, prodimage, req.session.uid], (error, results, fields) => {
        if (error) {
          htmlstream = fs.readFileSync(__dirname + '/../views/alert.ejs','utf8');
          res.status(562).end(ejs.render(htmlstream, {
            'title': '알리미',
            'warn_title':'상품등록 오류',
            'warn_message':'DB 오류가 발생하였습니다. 원인을 파악하여 재시도 바랍니다',
            'return_url':'/'
          }));
        }
        else {
          console.log("상품등록에 성공하였으며, DB에 신규상품으로 등록하였습니다.!");
        }
      });
    }
  }
  else {
    htmlstream = fs.readFileSync(__dirname + '/../views/alert.ejs','utf8');
    res.status(562).end(ejs.render(htmlstream, {
      'title': '알리미',
      'warn_title':'상품등록기능 오류',
      'warn_message':'관리자 혹은 판매자로 로그인되어 있지 않아서 상품등록 기능을 사용할 수 없습니다.',
      'return_url':'/'
    }));
  }
};


//  -----------------------------------  상품정보 수정 기능 -----------------------------------------
// 상품정보 수정 양식을 웹 브라우저로 출력합니다.
const PrintProductUpdateForm = (req, res) => {
  let htmlstream = '';
  let sql_str;

  if(!req.session.auth || req.session.type == '구매자') { // 로그인이 안돼있거나 구매자인 경우 오류 발생
    htmlstream = fs.readFileSync(__dirname + '/../views/alert.ejs','utf8');
    res.status(562).end(ejs.render(htmlstream, {
      'title': '알리미',
      'warn_title':'상품정보 수정 기능 오류',
      'warn_message':'관리자 혹은 판매자로 로그인되어 있지 않아서, 상품정보 수정 기능을 사용할 수 없습니다.',
      'return_url':'/'
    }));
  }
  else {
    htmlstream = fs.readFileSync(__dirname + '/../views/header.ejs','utf8');                           // Header
    if(req.session.admin) {
      htmlstream = htmlstream + fs.readFileSync(__dirname + '/../views/admin_navbar.ejs','utf8');      // 관리자 메뉴
    }
    else {
      htmlstream = htmlstream + fs.readFileSync(__dirname + '/../views/seller_navbar.ejs','utf8');     // 판매자 메뉴
    }
    htmlstream = htmlstream + fs.readFileSync(__dirname + '/../views/product_updateform.ejs','utf8');  // 상품수정 화면
    htmlstream = htmlstream + fs.readFileSync(__dirname + '/../views/footer.ejs','utf8');              // Footer

    sql_str = "SELECT * FROM u19_products WHERE ITEMID='" + req.query.pid + "';";
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
            'warn_message' : '일치하는 제품이 없습니다.',
            'return_url' : '/adminprod/list'
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
              'itemid' : item.ITEMID,
              'pname' : item.PNAME,
              'category' : item.CATEGORY,
              'model' : item.MODEL,
              'event' : item.EVENT,
              'price' : item.PRICE,
              'maker' : item.MAKER,
              'amount' : item.AMOUNT,
              'dcrate' : item.DCRATE
            }));
          }); /* foreach */
        }  // else
      }  // else
    });
  }
}


// 상품정보 수정 양식에서 수정된 상품 정보를 DB에 반영합니다.
const HandleProductUpdate = (req, res) => {  // 상품정보 수정
  let body = req.body;
  let htmlstream = '';
  let sql_str;

  console.log('수정 화면에서 body.itemid: %s', body.itemid);

  if (req.session.auth && (req.session.admin || req.session.type == '판매자')) {
    if (body.itemid == '') {
      console.log("상품번호가 입력되지 않아 DB에 저장할 수 없습니다.");
      res.status(561).end('<meta charset="utf-8">상품번호가 입력되지 않아 등록할 수 없습니다');
    }
    else {
      sql_str = "UPDATE u19_products SET CATEGORY=?, PNAME=?, MAKER=?, MODEL=?, AMOUNT=?, EVENT=?, DCRATE=?, PRICE=? WHERE ITEMID='" + body.itemid + "';";
      db.query(sql_str, [body.category, body.pname, body.maker, body.modelnum, body.amount, body.event, body.dcrate, body.price],
      (error, results, fields) => {
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
          console.log("%s 상품정보 수정에 성공하였으며, DB에 반영되었습니다!", body.itemid);
          if(req.session.type == '판매자') {
            res.redirect('/sellerprod/list');
          }
          else {
            res.redirect('/adminprod/list');
          }
        }
      });
    }
  }
  else {
    htmlstream = fs.readFileSync(__dirname + '/../views/alert.ejs','utf8');
    res.status(562).end(ejs.render(htmlstream, {
      'title': '알리미',
      'warn_title': '상품수정 기능 오류',
      'warn_message': '관리자 혹은 판매자로 로그인되어 있지 않아서 상품수정 기능을 사용할 수 없습니다.',
      'return_url': '/'
    }));
  }
};


// 상품정보 수정 양식에서 삭제 버튼 클릭 시 DB에서 해당 상품을 삭제합니다.
const HandleProductDelete = (req, res) => {  // 상품정보 삭제
  let body = req.body;
  let htmlstream = '';
  let sql_str;

  console.log("삭제 화면에서 body.itemid: %s", body.itemid);

  if(!req.session.auth || req.session.type == '구매자') { // 로그인이 안돼있거나 구매자인 경우 오류 발생
    htmlstream = fs.readFileSync(__dirname + '/../views/alert.ejs','utf8');
    res.status(562).end(ejs.render(htmlstream, {
      'title': '알리미',
      'warn_title': '상품삭제 기능 오류',
      'warn_message': '관리자 혹은 판매자로 로그인되어 있지 않아서, 삭제 기능을 사용할 수 없습니다.',
      'return_url': '/'
    }));
  }
  else {
    sql_str = "DELETE FROM u19_products WHERE ITEMID='" + body.itemid + "';";
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
            'warn_message' : 'id가 일치하는 제품이 없습니다.',
            'return_url' : '/adminprod/list'
          }));
        }
        else {  // where 조회결과가 있는 경우
          console.log('%s 상품을 정상적으로 삭제했습니다.', body.itemid);
          if(req.session.type == '판매자') {
            res.redirect('/sellerprod/list');
          }
          else {
            res.redirect('/adminprod/list');
          }
        }  // else
      }  // else
    });
  }
};


// REST API의 URI와 핸들러를 매핑합니다.
router.get('/list', PrintProducts);                                      // 상품리스트를 화면에 출력
router.get('/reg', PrintProductRegistrationForm);                        // 상품등록 화면을 출력
router.post('/reg', upload.single('photo'), HandleProductRegistration);  // 상품등록 내용을 DB에 저장
router.get('/update', PrintProductUpdateForm);                           // 상품수정 화면을 출력
router.put('/update', HandleProductUpdate);                              // 상품정보를 수정한 내용을 DB에 반영
router.delete('/deletion', HandleProductDelete);                         // 상품을 삭제한 내용을 DB에 반영

module.exports = router;
