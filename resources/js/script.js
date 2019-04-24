$(document).ready(function(){

// education/course section - toggle certifications
	// $(".toggle-btn").click(function(){
	// 	$(".img-holder", this).toggleClass("open", 5000);
	// 	$(".arrow-right", this).toggleClass("change-icon");
	// 	$(this).siblings(".toggle-btn").slideToggle();
	// });

// open magnific popup
	//   $(".open-popup-link").magnificPopup({
	//     type:'inline'
	// });
	$('.image-popup-vertical-fit').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}
		
	});



});


