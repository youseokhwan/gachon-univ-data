const url = require('url');

const {URL} = url;
const urlStr = 'https://www.google.com/search?q=nodejs&oq=nodejs&aqs=chrome..69i57j69i59j0j69i60l3.1995j0j9&sourceid=chrome&ie=UTF-8';
const myURL = new URL(urlStr);
console.log('new URL(): ', myURL);
console.log('url.format(): ', url.format(myURL));

console.log('--------------------------');

const parsedUrl = url.parse(urlStr);
console.log('url.parse(): ', parsedUrl);
console.log('url.format(): ', url.format(parsedUrl));
