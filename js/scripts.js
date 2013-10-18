$(document).ready(function(){
	
	//Button Clicked
	$('button').on('click', function(){
		console.log('You clicked the button');
		var zip = $('input').val();
		console.log(zip);

		$.simpleWeather({
		zipcode: zip,
		success: function(weather){
			html = '<h1>' + weather.temp + '</h1>';
			html += '<h2>' + weather.city + '</h2>';
			html += '<img src="' + weather.tomorrow.image + '">';
			console.log(weather.temp);

			$('#weather').html(html);
		}
	});

	
	});

	//Get Weather

	

	//Reset Text Field
	$('input:text').click(function(){
		$(this).val('');
	});
});