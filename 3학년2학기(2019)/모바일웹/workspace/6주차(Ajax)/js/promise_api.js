$(document).ready(function() {
	$(".confirm").click(async function() {
		var city = $("#city").val();
		var appid = "66ca3f2962b424f151cd63a5a70b8ba9";
		var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&mode=json&units=metric&appid=" + appid;
		
		console.log(url);
		
		var response = await fetch(url);
		var data = await response.json();
		console.log(data);
		viewMapping(data);
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
		
		var icon = `<i class="wi wi-owm-${data.weather[0].id}"></i>`;
		$(".result-wrapper").html(icon);
	}
});