$(function() {
	$('.img-list img').click(function() {
		// 선택한 이미지의 src 속성값 가져오기
		var srcPath = $(this).attr('src');
		
		// 선택한 이미지의 속성으로 current-img의 src 속성 변경
		$('.current-img').attr('src', srcPath);
		console.log(srcPath);
	});
});

//$(function() {
//	$('.img-list img').click(function() {
//		// 선택한 이미지의 src 속성값 가져오기
//		var srcPath = $(this).prop('src');
//		
//		// 선택한 이미지의 속성으로 current-img의 src 속성 변경
//		console.log(srcPath);
//	});
//});