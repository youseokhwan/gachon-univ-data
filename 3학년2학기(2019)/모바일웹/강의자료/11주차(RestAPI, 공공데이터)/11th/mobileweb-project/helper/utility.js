/* 클라이언트에서 조회하고자 하는 과일을 선택하면 코드명으로 과일명을 찾아 반환하는 모듈 */
//마켓데이터를 가져옵니다(marketData.json)
const marketList = require('../config/marketData');
/* 코드명을 넣어 과일 이름을 반환합니다.*/
// 단축형으로 사용한다면
/* module.exports.getNameByCode = code => 
        marketList.filter(data => data.mcode == code)[0].name; */

console.log('call : /helper/utlity.js');

module.exports.getNameByCode = function(code){
    return marketList.filter(function(data){//과일 객체 별
        return data.mcode == code;
    })[0].name;
};




