$(function(){
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-rab');//tab-1

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$('#'+tab_id).addClass('current');
	});
});