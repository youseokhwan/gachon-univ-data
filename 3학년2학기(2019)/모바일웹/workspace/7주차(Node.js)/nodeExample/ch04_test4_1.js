const EventEmitter = require('events');
const myEvent = new EventEmitter();

const request = (id) => {
	console.log(id + '님의 글이 정상 등록 되었습니다.');
};

myEvent.on('posting', () => {
	request('id107');
});

myEvent.emit('posting');
