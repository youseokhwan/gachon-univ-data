const crypto = require('crypto');

const password = 'abc$3#7';
const secretPw = crypto.createHash('sha512').update(password).digest('base64');
console.log('base64: ', secretPw);
const secretPw2 = crypto.createHash('sha512').update(password).digest('hex');
console.log('hex: ', secretPw2);
