function delayP(sec) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(new Date().toISOString());
		}, sec*1000);
	});
}

async function myAsync() {
	const time = await delayP(3);
	return time;
}

myAsync().then((result) => {
	console.log(result);
});
