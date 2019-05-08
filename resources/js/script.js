$(document).ready(function(){

	// $('.image-popup-vertical-fit').magnificPopup({
	// 	type: 'image',
	// 	closeOnContentClick: true,
	// 	mainClass: 'mfp-img-mobile',
	// 	image: {
	// 		verticalFit: true
	// 	}
		
	// });


	// hamburger menu

	var mq = window.matchMedia("(max-width: 799px)");

  var processMq = function(){
      if (mq.matches) {
      	$(".hamburger").click(function(){
					$(".nav-menu").css("display", "flex");
				});
  	
      } 
      else{

      }

      if(mq.matches) {
      	$(".close").click(function(){
         	$(".nav-menu").removeAttr("style");
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


