$(document).ready(function(){
	//for main menu
	$(".menu-trigger").click(function(){
		$(".menubar").slideToggle('slow', function(){
			$(this).toggleClass("nav-expanded").css('display', '');
		});
	});

	// for project menu
	$(".project-trigger").click(function(){
		$(".work-navbar").slideToggle('slow', function(){
			$(this).toggleClass("project-nav-expanded").css('display', '');
		});
	});

	// for isotope
	//activate isotope in container
	$(".project-items").isotope({
		itemSelector: '.single-item',
		layoutMode: 'fitRows',
	});

	//add isotop click function
	$('.work-navbar li').click(function(){
		$(".work-navbar li>a").removeClass("active");
		$(this).addClass("active");

		var selector = $(this).attr('data-filter');
		$('.project-items').isotope({
			filter: selector,
			animationOptions: {
				duration: 750,
				easing: 'linear',
				queue: false,
			}
		});	
		return false;
	});

});

