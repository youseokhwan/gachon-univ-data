/* 경락정보조회및저장 Controller 
   - 라우팅 함수 모듈 선언 */

const marketList = require('../../config/marketData');
const {SERVICEKEY, API_URL} = require('../../config/enviroment');
const {getNameByCode} = require('../../helper/utility');
const mongoose = require("mongoose");
//DB(MarketHistory 컬렉션) 모델 가져오기
const MarketHistory = mongoose.model('MarketHistory');

// 비동기 통신을 위한 Request.js 라이브러리 참조(request-promise 모듈)
const request = require('request-promise');
const pageTitle = "경락정보 조회 및 저장"; //고정 상수 타이틀값

console.log('call : /controllers/ReqSaveInfoController.js');

/* 라우팅 함수 설정(localhost:3000/reqSaveInfo)
   - DB에 저장된 경락정보를 리스트로 표시하기 위한 index 모듈 */
module.exports.index = async function (req, res) {
    //DB(MarketHistory 컬렉션)의 데이터를 조회(전체)
    const marketHistories = await MarketHistory.find();
    
    //reqSaveInfo/form.hbs 뷰 템플릿 랜더링
    res.render("reqSaveInfo/form", {
        marketList: marketList,//marketData.json
        pageTitle: pageTitle,//페이지타이틀("경락정보 조회 및 저장")
        marketHistories: marketHistories,//MarketHistory 컬렉션
        isUserLogedIn:req.isAuthenticated()//로그인 인증정보
    });
};

/* show 상세보기 라우팅 함수 설정 */
// http://localhost/reqSaveInfo/show?id={Object_ID}
module.exports.show = async function (req, res) {
    //DB(MarketHistory 컬렉션)의 데이터를 조회(id값에 맞는 1개조회)
    const marketHistory = await MarketHistory.findOne({_id: req.query.id});
    
    //reqSaveInfo/result.hbs 뷰 템플릿 랜더링
    res.render("reqSaveInfo/result", {
        pageTitle: pageTitle,
        marketHistory: marketHistory,
        isUserLogedIn:req.isAuthenticated()
    });
};

// DELETE 라우팅 함수 설정 - http://localhost/reqSaveInfo/delete
module.exports.deleteResult = async function (req, res) {
    //DB(MarketHistory 컬렉션)에서 데이터 삭제(id)
    MarketHistory.findOneAndRemove(req.body.id, (err) => {
        if (err) res.status(500).send();
        else res.status(200).send()
    });
};

/* 라우팅 함수 설정
   - localhost:3000/reqSaveInfo에서 form을 통해 요청파라미터를 받아 처리
   - form에서 날짜와 저장개수, 과일을 선택한 후 "조회및저장하기" 버튼을 클릭하면
    "/reqSaveInfo/result" 요청 패스로 공공DB 서버에 요청하여, 그 결과 받아 처리 */
module.exports.createResult = async function (req, res) {

    /* Request.js 라이브러리의 request-promise 모듈을 이용하여 공공DB포털의 
       경락가격정보서비스 서버에 Get 요청(요청 파라이터는 qs 옵션에 설정)
       - 서버에서 응답한 경락가격정보를 DB에 저장 */
    const marketResult = await request.get({
        url: API_URL,
        timeout: 10000,
        json: true,
        qs: {
            'ServiceKey': SERVICEKEY,
            'dates': req.body.date.split("-").join(''), 
            'lcode': req.body.lcode,//
            'mcode': req.body.mcode,
            'numOfRows': req.body.count,
            '_type': "json",
        },
    }).then((result) => {
        /*데이터를 성공적으로 가져온경우 필요한 item 리스트만 가져옵니다.*/
        return result.response.body
    }).catch(e => {
        /* 에러처리*/
        console.error("request Error : " + e);
        res.status(500).send();
    });

    /* 0보다 많을경우 데이터베이스에 저장 */
    if (marketResult.totalCount > 0) {
        new MarketHistory({
            fruit: getNameByCode(req.body.mcode),//과일명
            date: req.body.date,//저장일자
            result: marketResult.items.item,//조회된경락정보
        }).save((err) => {
            if (err) res.status(500).send(); //실패시 500리턴
            else res.status(200).send() // 성공시 200리턴
        })
    } else {
        /* 검색된 결과가 0개인경우*/
        res.status(204).send("데이터가 없습니다.");
    }
};

