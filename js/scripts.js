$(document).ready(function(){
	$('button').on('click', function(){
		console.log('You clicked the button');
		var zip = $('input').val();
		console.log(zip);
	});
	$('input:text').click(function(){
		$(this).val('');
	});
});