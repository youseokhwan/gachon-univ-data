//// javascript
//window.onload = function() {
//	var var1 = document.querySelector("#value-1");
//	var var2 = document.querySelector("#value-2");
//	var btnAdd = document.querySelector("#btn-add");
//	var result = document.querySelector("#result");
//	
//	btnAdd.onclick = function() {
//		let x = parseInt(var1.value);
//		let y = parseInt(var2.value);
//		
//		result.value = (x + y);
//	}
//}

// jQuery
$(function() {
	var $val1 = $("#value-1");
	var $val2 = $("#value-2");
	var $btnAdd = $("#btn-add");
	var $result = $("#result");
	
	$btnAdd.click(() => {
		let x = parseInt($val1.val());
		let y = parseInt($val2.val());
		
		$result.val(x + y);
	});
});