/*
	callback 패턴으로 비동기 처리
	- 타이머를 이용해서 비동기로 현재시간을 넘겨주는 함수 선언
*/
function delay(sec, callback) {
	setTimeout(() => {
		// 현재 시간을 넘겨주는 callback 실행
		callback(new Date().toISOString());
	}, sec * 1000);
}

// delay() 호출
console.log('Start', new Date().toISOString());

// ==== 동시 출력 ====
// delay(실행옵션, 실행이 끝났을 때 결과값(result)을 받기 위한 콜백을 넘김)
delay(1, (result) => {
	// 비동기로 받은 result 출력
	console.log(1, result);
});

delay(1, (result) => {
	// 비동기로 받은 result 출력
	console.log(2, result);
});

delay(1, (result) => {
	// 비동기로 받은 result 출력
	console.log(3, result);
});

// ==== 1초 간격으로 순차 출력(callback) ====
delay(1, (result) => {
	console.log(1, result);
	
	delay(1, (result) => {
		console.log(2, result);
		
		delay(1, (result) => {
			console.log(3, result);
		});
	});
});