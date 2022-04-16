(function ($) {
	"use strict";
	
	/*----------------------------
	Responsive menu Active
	------------------------------ */
	$(".mainmenu ul#primary-menu").slicknav({
		allowParentLinks: true,
		prependTo: '.responsive-menu'
	});
	
	/*----------------------------
    START - Menubar scroll animation
    ------------------------------ */
	jQuery(window).on('scroll', function() {
		if ($(this).scrollTop() > 480) {
			$('.menubar').addClass("sticky");
		} else {
			$('.menubar').removeClass("sticky");
		}
	});
	
	/*-------------------------
	START - search bar toggle
	--------------------------*/
	$(".toggle-pade").on('click', function() {
		$(".navbar-form").toggle( "slow" );
		return false;
	});
	$(".menubar-icon").on('click', function() {
		$(".offcanvas-menu").addClass( "active" );
		return false;
	});
	$(".offcanvasmenu-close").on('click', function() {
		$(".offcanvas-menu").removeClass( "active" );
		$(".offcanvas-menu li").removeClass( "showul" );
	});
	$(".offcanvas-menu li").on('click', function() {
		$(this).toggleClass( "showul" );
	});
	
	/*----------------------------
    START - Slider activation
    ------------------------------ */
	$('.hero-area-slider').owlCarousel({
		items:1,
		loop:true,
		autoplay: true,
		autoplayTimeout:4000,
		dots: false,
		nav: true,
		navText: ["<i class='icofont icofont-curved-left'></i>", "<i class='icofont icofont-curved-right'></i>"],
	});
	$('.our-testimonial-slide').owlCarousel({
		dots:true,
		loop:true,
		autoplay: true,
		autoplayTimeout:4000,
		margin: 30,
		items:1,
		nav: false,
	});
	$('.partner-slider').owlCarousel({
		dots:false,
		loop:true,
		autoplay: true,
		autoplayTimeout:4000,
		margin: 30,
		items:1,
		nav: false,
		responsive:{
			420:{
				items:2,
			},
			768:{
				items:3,
			},
			992:{
				items:4,
			}
		}
	});
	$('.testimonial-slide').owlCarousel({
		dots:false,
		loop:true,
		autoplay: false,
		autoplayTimeout:4000,
		margin:0,
		items:1,
		nav: true,
		navText: ["<i class='icofont icofont-curved-left'></i>", "<i class='icofont icofont-curved-right'></i>"],
		responsive:{
			768:{
				items:2,
				margin: 20
			},
			992:{
				items:3,
				margin: 20
			}
		}
	});
	$('.testimonial-slider').owlCarousel({
		dots:false,
		loop:true,
		autoplay: true,
		autoplayTimeout:4000,
		margin:0,
		items:1,
		nav: true,
		navText: ["<i class='icofont icofont-curved-left'></i>", "<i class='icofont icofont-curved-right'></i>"],
		responsive:{
			768:{
				items:2,
				margin: 20
			}
		}
	});
	
	/*----------------------------
	START - videos popup
	------------------------------ */
	$('.popup-youtube').magnificPopup({type:'iframe'});
	//iframe scripts
	$.extend(true, $.magnificPopup.defaults, {  
		iframe: {
			patterns: {
				//youtube videos
				youtube: {
					index: 'youtube.com/', 
					id: 'v=', 
					src: 'https://www.youtube.com/embed/%id%?autoplay=1' 
				}
			}
		}
	});
	
	/*----------------------------
    START - Counterup
    ------------------------------ */
	$('.counter').counterUp({
		delay: 20,
		time: 500
	});
	
	/*----------------------------
    START - Scroll to Top
    ------------------------------ */
	$(window).on('scroll', function() {
		if ($(this).scrollTop() > 600) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	$('.scrollToTop').on('click', function () {
		$('html, body').animate({scrollTop : 0},2000);
		return false;
	});
	
	/*----------------------------
    START - Isotope
    ------------------------------ */
    jQuery(".portfolio-item").isotope();
    $(".portfolio-menu li").on("click", function(){
      $(".portfolio-menu li").removeClass("active");
      $(this).addClass("active");
      var selector = $(this).attr('data-filter');
      $(".portfolio-item").isotope({
        filter: selector
      })
    });
	
	/*----------------------------
    START - Preloader
    ------------------------------ */
	jQuery(window).load(function(){
		jQuery("#preloader").fadeOut(500);
	});

}(jQuery));