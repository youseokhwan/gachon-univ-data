var os = require('os');

console.log('hostname : ' + os.hostname());
console.log('memory : ' + os.freemem());
console.log('home-dir : ' + os.homedir());
console.log('os-ver : ' + os.release());
