/* 경락가격정보 스키마 선언 및 모델 정의 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

console.log('call : /models/MarketHistory.js');

/* MarketHistory 스키마 정의 */
const MarketHistory = new Schema({
    fruit: {type: String, required: true}, //경락정보 품종(과일종류)
    result:[{//응답결과
        marketname: {type: String, required: true},//도매시장
        coname: {type: String, required: true},//도매법인
        avgprice: {type: Number, required: true},//평균가
        sumamt: {type: Number, required: true},//거래량
        unitname: {type: String, required: true},//규격
    }],
    date: {type: String, required: true} //경락정보 날짜
}, {
    timestamp: true
});

//모델 생성
mongoose.model('MarketHistory', MarketHistory);
