$(document).ready(function(){

	// magnific popups

	$('.image-popup-vertical-fit').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}
		
	});

	// hamburger menu

	var mq = window.matchMedia("(max-width: 768px)");

  var processMq = function(){
      if (mq.matches) {
      	$(".hamburger").click(function(){
					$(".nav-menu").css("display", "flex");
					$(this).css("display", "none");
					$(".title").css("display", "none");
				});
  	
      } 
      else{

      }

      if(mq.matches) {
      	$(".close").click(function(){
         	$(".nav-menu").removeAttr("style");
         	$(".hamburger").removeAttr("style");
         	$(".title").removeAttr("style");
         	
          console.log("click work");
        });
      }
  };

  // step 1 - on load
  
  processMq();

   // on resize
  mq.addListener(function(mql){
      processMq();
  });

});


