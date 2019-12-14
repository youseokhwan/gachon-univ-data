function delay(sec, callback) {
	setTimeout(() => {
		// 현재시간을 넘겨주는 callback 실행
		callback(new Date().toISOString());
	}, sec*1000);
}

// delay() 호출
console.log('Start', new Date().toISOString());

// ==== callback 패턴 ====
delay(1, (result) => {
	// 비동기로 받은 result 출력
	console.log('>callback', result);
});

// ==== promise 패턴 ====
// 타이머를 이용해서 비동기로 현재 시간을 넘겨주는 함수(promise 패턴)
function delayP(sec) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(new Date().toISOString());
		}, sec*1000);
	});
}

/*
	delayP((실행옵션).then((실행이 끝났을 때 결과값(result)을 받기 위한 콜백))
	- resolve() 메서드에서 넘긴 값이 then의 콜백에서 result로 받아 처리
*/
delayP(1).then((result) => {
	console.log('>promise', result);
});