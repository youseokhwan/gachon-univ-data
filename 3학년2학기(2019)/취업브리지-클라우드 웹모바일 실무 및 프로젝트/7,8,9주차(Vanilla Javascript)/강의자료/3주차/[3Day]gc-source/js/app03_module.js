import log2, {getCurrentHour,MyLogger} from "./myLogger.js"

// 77.selector
// document.querySelector정리
// 객체를 하나 가져올때 사용 
// document.querySelectorAll
// 객체를 여러개 가져올 때 사용
const root = document.querySelector("#root");
root.innerHTML = `<p>Hello World!</p>`;
log2("my first log data");
// log2(getTime());
// log2(getCurrentHour());
// log2(`getTime is ${getTime()}`);
log2(`current hour is ${getCurrentHour()}`);
const logger = new MyLogger();
log2(`lectures of CodingSchool are ${logger.getLecture()}`);

