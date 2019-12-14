var calc2 = require('./calc2');

var add = calc2.add(50, 50);
console.log('모듈로 분리 후 - calc2.add : ' + add);

var sub = calc2.sub(100, 50);
console.log('모듈로 분리 후 - calc2.sub : ' + sub);
