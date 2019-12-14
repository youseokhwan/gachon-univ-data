function getData() {
	return new Promise(function (resolve, reject) {
		var data = 'Request is suceed';
		// resolve()로 응답 결과값을 넘겨주면, 그 값이 then에서 넘김 함수에 전달됨
		resolve(data);
	});
}

/*
	resolve()의 결과값 data를 resolvedData로 받음
	- 정상으로 응답이 오면 then에서 넘긴 함수에서 결과값을 받아 처리
*/
getData().then(function (resolvedData) {
	console.log(resolvedData); // Request is suceed
});
