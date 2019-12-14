/* eslint-disable */

//module.exports = route;
/* p3.js 모듈을 사용할 파일에서 전달한 'app'을 받아서 사용하기 위해서는
   함수의 매개변수로 'app'을 받을 수 있도록 프로그램을 수정하여
   app을 프로그램 내에서 사용하면 된다.
*/
module.exports = function(app) {
    
    //express 모듈 추가
    var express = require('express')
    //라우터 객체 생성
    var route = express.Router();

    route.get('/r1', function(req, res) {
        res.send('Routing /p1/r1');
    });
    
    route.get('/r2', function(req, res) {
        res.send('Routing /p1/r2');
    });
    
    //전달받은 app을 사용하여 'p3/r1' 요청을 처리하는 라우팅 설정
    app.get('/p3/r1', function(req, res) {
        res.send('Routing /p3/r1');
    });
    
    return route;
    
};