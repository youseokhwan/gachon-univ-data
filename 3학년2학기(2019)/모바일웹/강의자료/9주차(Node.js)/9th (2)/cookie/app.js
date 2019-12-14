/* cookie & session 처리 */

/* 필요 모듈 참조 */
const express = require('express')
const exphbs = require('express-handlebars')
const cookieParser = require('cookie-parser')
const sessionParser = require('express-session')

/* 익스프레스 객체 생성 */
const app = express()
const port = 3000;








/* 익스프레스 서버 시작 */
app.listen(port, () => {
	console.log('Sever running on port : %s', port);
});
