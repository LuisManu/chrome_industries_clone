$(document).ready(function() {

	/* ==== Carousel ==== */
	$("#owl").owlCarousel({
		slideSpeed: 300,
		paginationSpeed: 400,
		singleItem: true,
		autoPlay: true
	});
 

	/* ==== For mobile nav btns and dropdowns ==== */
	$('.mobile-link').click(function() {
		var selector = '#' + $(this).attr('id').split('-')[0] + '-dropdown';
		$(selector).siblings().slideUp();
		$(selector).slideToggle();
	});


	/* ==== Makes #desktop-nav-links fixed to top ==== */
	$("#desktop-nav-links").waypoint(function() {
		$("#desktop-nav-links").addClass('fixed-nav-links');
	}, { offset: "-20px" });
	$("#desktop").waypoint(function() {
		$('#desktop-nav-links').removeClass('fixed-nav-links');
	}, { offset: "-20px" });


	/* ==== Footer btn show/hide footer-content ==== */
	var foo = function() {
		$(this).next('.footer-content').slideToggle();
	}
	var bar = function() {
		if ($(window).width() < 961) {
			$('.block-title').bind('click', foo);
			$('.footer-content').hide();
		} else {
			$('.block-title').unbind('click', foo);
			$('.footer-content').show();
		}
	}


	$(window).resize(function() {
		bar();
	});


	bar();
});