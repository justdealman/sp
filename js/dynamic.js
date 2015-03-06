$(document).ready(function() {
	$('.modal').append('<span class="close"></span?>');
	$('.modal h5 span em').bind('click', function() {
		$(this).parents('h5').find('input[type="file"]').trigger('click');
	});
	$('.header .buttons button').bind('click', function() {
		var modalTop = $(document).scrollTop()+($(window).height()-$('.modal[data-modal="'+$(this).attr('class')+'"]').outerHeight())/2+50;
		if ( modalTop < 50 ) {
			modalTop = 50;
		}
		if ( modalTop > $('.wrapper').height()-$('.modal[data-modal="'+$(this).attr('class')+'"]').outerHeight()-50 ) {
			modalTop = $('.wrapper').height()-$('.modal[data-modal="'+$(this).attr('class')+'"]').outerHeight()-50;
		}
		$('.fade').stop(true,true).fadeIn(500);
		$('.modal[data-modal="'+$(this).attr('class')+'"]').css({
			'margin-top': modalTop+'px'
		}).stop(true,true).addClass('bounceIn').removeClass('fadeOut').fadeIn(500);
		return false;
	});
	$('.modal .close, .fade').bind('click', function() {
		$('.modal').stop(true,true).addClass('fadeOut').removeClass('bounceIn').fadeOut(500);
		$('.fade').fadeOut(500);
		return false;
	});
	$('.grid li:nth-child(3n), .catalog li:nth-child(3n)').css({
		'margin-right': '-3px'
	});
});