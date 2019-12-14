const path = require('path');

const filePath = __filename;

console.log('path.sep: ', path.sep);
console.log('path.delimiter: ', path.delimiter);
console.log('----------------------------');
console.log('path.dirname(): ', path.dirname(filePath));
console.log('path.extname(): ', path.extname(filePath));
console.log('path.basename(): ', path.basename(filePath));
console.log('path.basename(): ', path.basename(filePath, path.extname(filePath)));

const filePathObject = path.parse(filePath);
console.log('path.parse() ', filePathObject);

console.log('path.format(): ', path.format({
	dir: filePathObject.dir,
	name: filePathObject.name,
	ext: filePathObject.ext
}));
