$(document).ready(function(){

	$('.open-popup-link').magnificPopup({
	  type:'inline',
	  midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
	});

	// magnific popups

	$('.image-popup-vertical-fit').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}
		
	});

	// when hover product-box

	$(".product-box").hover(function(){
	  // $(this).children("div").css("bottom", "0px");
	  // }, function(){
	  // $(this).children("div").css("bottom", "-500px");
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


