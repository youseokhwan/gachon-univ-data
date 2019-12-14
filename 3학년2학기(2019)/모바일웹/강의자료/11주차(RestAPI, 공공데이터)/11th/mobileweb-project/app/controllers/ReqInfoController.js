/* 경락정보조회 Controller(라우팅 함수 모듈 선언) */

// marketData.json 참조 */
const marketList = require('../../config/marketData');
// utility.js에서 getNameByCode 함수 참조
const {getNameByCode} = require('../../helper/utility');
// enviroment.js.에서 API_URL과 SERVICEKEY 참조
const {API_URL, SERVICEKEY} = require('../../config/enviroment');
// const API_URL = require('../../config/enviroment').API_URL
// const SERVICEKEY =  require('../../config/enviroment').SERVICEKEY
// 비동기 통신을 위한 Request.js 라이브러리 참조(request-promise 모듈)
const request = require('request-promise');
const pageTitle = "경락정보 조회";

console.log('call : /controllers/ReqInfoController.js');

// 라우팅 함수 설정(localhost:3000/reqInfo)
module.exports.index = async function (req, res) {
    //isAuthenticated():세션에 저장된 user 데이터가 있으면 true 없으면 false
    const isLogin = req.isAuthenticated();
    //reqInfo/form.hbs 뷰 템플릿 랜더링
    res.render("reqInfo/form", {marketList: marketList, pageTitle: pageTitle, 
                                 isUserLogedIn: isLogin});
};

/* 라우팅 함수 설정
   - localhost:3000/reqInfo에서 form을 통해 요청파라미터를 받아 처리
   - form에서 날짜와 과일을 선택한 후 "조회하기" 버튼을 클릭하면
    "/reqInfo/result" 요청 패스로 공공DB 서버에 요청하여, 그 결과 받아 처리 */
module.exports.result = async function (req, res) {

    /* Request.js 라이브러리의 request-promise 모듈을 이용하여 공공DB포털의 
       경락가격정보서비스 서버에 Get 요청(요청 파라이터는 qs 옵션에 설정) */
    const marketResult = await request.get({
        url: API_URL,
        timeout: 10000,
        json: true,//리턴받을 데이터를 자동으로 Json.Parse
        qs: {//요청 파라미터 설정
            'ServiceKey': SERVICEKEY,
            //날짜는 2019-08-29 형식으로 들어오기때문에 20190829로 변경
            'dates': req.query.date.split("-").join(''),
            'lcode': req.query.lcode,//대분류
            'mcode': req.query.mcode,//중분류
            '_type': "json",
        },
    }).then((result) => {
        /*데이터를 성공적으로 가져온경우 필요한 items 리스트만 가져옵니다.*/
        console.log(result);
        return result.response.body
    }).catch(e => {
        /* 에러처리*/
        console.error("request Error : " + e)
    });

    /* 조회결과 응답(reqInfo/result.hbs 뷰 템플릿 랜더링) */
    res.render("reqInfo/result", {
        fruit: getNameByCode(req.query.mcode),//과일명
        marketResult: marketResult,//경락가격정보(응답결과)
        query: req.query,//query 객체
        pageTitle: pageTitle,//페이지 타이틀("경락정보 조회")
        isUserLogedIn: req.isAuthenticated(),//로그인인증정보
    });
};

