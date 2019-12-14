$(document).ready(function() {
	$(".confirm").click(function() {
		var city = $("#city").val();
		var appid = "66ca3f2962b424f151cd63a5a70b8ba9";
		var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&mode=json&units=metric&appid=" + appid;
		
		console.log(url);
		
		$.ajax({
			url: url,
			dataType: "jsonp",
			type: "GET",
			success: function (data) {
				console.log(data);
				viewMapping(data);
			},
			error: function (error) {
				alert("Error!");
			},
			complete: function() {
				alert("Complete!");
			}
		});
	});
	
	function viewMapping(data) {
		var sunrise = new Date(data.sys.sunrise * 1000);
		var sunset = new Date(data.sys.sunset * 1000);
		var weather = "";
			
		data.weather.forEach(function (element) {
			weather += element.main + " ";
		});
		
		var content = "<b>Country:</b> " + data.name + ", " + data.sys.country + "<br>"
					+ "<b>Current Temperature:</b> " + data.main.temp + "℃" + "<br>"
					+ "<b>Current Humidity:</b> " + data.main.humidity + "%" + "<br>"
					+ "<b>Current Wind Speed:</b> " + data.wind.speed + "m/s" + "<br>"
					+ "<b>Weather Conditions:</b> " + weather + "<br>"
					+ "<b>Clouds:</b> " + data.clouds.all + "%" + "<br>"
					+ "<b>Sunrise:</b> " + sunrise + "<br>"
					+ "<b>Sunset:</b> " + sunset;
		
		$("#weather-info").html(content);
//		$("#result-image").attr('src', "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png");
		
		var icon = `<i class="wi wi-owm-${data.weather[0].id}"></i>`;
		$(".result-wrapper").html(icon);
	}
});