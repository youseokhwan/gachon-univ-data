function getData() {
	return new Promise(function (resolve, reject) {
		// 실패 처리의 결과값을 전달
		reject(new Error('Request is failed'));
	});
}

// reject()의 결과 값 Error를 err에 받음
getData().then().catch(function (err) {
	console.log('err-message => ', err); // Error: Request is failed
});
