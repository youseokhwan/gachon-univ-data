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
  host: 'localhost',        // DB서버 IP주소
  port: 3306,               // DB서버 Port주소
  user: 'gbdbuser',         // DB접속 아이디
  password: 'jobbr1dge',    // DB암호
  database: 'bridge'        //사용할 DB명
});
const methodOverride = require('method-override');


//  -----------------------------------  상품리스트 기능 -----------------------------------------
// (판매자용) 등록된 상품리스트를 웹 브라우저로 출력합니다.
const PrintMyProducts = (req, res) => {
  let htmlstream = '';
  let htmlstream2 = '';
  let sql_str;

  console.log("req.query.prodtype : %s", req.query.prodtype);

  if (req.session.auth && req.session.type == '판매자') {   // 판매자로 로그인된 경우에만 처리한다
    htmlstream = fs.readFileSync(__dirname + '/../views/header.ejs','utf8');                      // 헤더부분
    htmlstream = htmlstream + fs.readFileSync(__dirname + '/../views/seller_navbar.ejs','utf8');  // 판매자메뉴
    htmlstream = htmlstream + fs.readFileSync(__dirname + '/../views/seller_product.ejs','utf8'); // 판매자 제품리스트
    htmlstream = htmlstream + fs.readFileSync(__dirname + '/../views/footer.ejs','utf8');         // Footer

    sql_str = "SELECT * FROM u19_products WHERE SELLERID='" + req.session.uid + "'";
    switch(req.query.prodtype) {
      case '1':
        sql_str += " AND CATEGORY='선풍기';"; break;
      case '2':
        sql_str += " AND CATEGORY='에어컨';"; break;
      case '3':
        sql_str += " AND CATEGORY='냉풍기';"; break;
      case '4':
        sql_str += " AND CATEGORY='미니선풍기';"; break;
      case '5':
        sql_str += " AND CATEGORY='냉장고';"; break;
      default:
        sql_str += ";";
    }

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
  else {  // (판매자로 로그인하지 않고) 본 페이지를 참조하면 오류를 출력
    htmlstream = fs.readFileSync(__dirname + '/../views/alert.ejs','utf8');
    res.status(562).end(ejs.render(htmlstream, {
      'title': '알리미',
      'warn_title':'상품등록기능 오류',
      'warn_message':'판매자로 로그인되어 있지 않아서, 해당 기능을 사용할 수 없습니다.',
      'return_url':'/'
    }));
  }
};


// 상품 등록 및 수정 기능은 adminprod.js에서 구현한 내용과 같아서 adminprod.js를 참조하도록 구현하였습니다.


// REST API의 URI와 핸들러를 매핑합니다.
router.get('/list', PrintMyProducts);      // 상품리스트를 화면에 출력

module.exports = router;
