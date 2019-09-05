$(document).ready(function() {
  // magnific popups in work section

  $(".open-popup-link").magnificPopup({
    type: "inline",
    midClick: true //
  });

  // magnific popups in education section

  $(".image-popup-vertical-fit").magnificPopup({
    type: "image",
    closeOnContentClick: true,
    mainClass: "mfp-img-mobile",
    image: {
      verticalFit: true
    }
  });

  // hamburger menu

  var mq = window.matchMedia("(max-width: 768px)");

  var processMq = function() {
    if (mq.matches) {
      $(".hamburger").click(function() {
        $(".nav-menu").css("display", "flex");
        $(this).css("display", "none");
        $(".title").css("display", "none");
      });
    } else {
      $(".title").removeAttr("style");
      $(".nav-menu").removeAttr("style");
    }

    if (mq.matches) {
      $(".close").click(function() {
        //$(".nav-menu").removeAttr("style");
        $(".hamburger").removeAttr("style");
        //$(".title").removeAttr("style");
      });
    } else {
    }
  };

  // step 1 - on load

  processMq();

  // on resize
  mq.addListener(function(mql) {
    processMq();
  });
});

// hover effect in work section

// const hideContent = document.querySelector(".hide-content");
// const productBox = document.querySelector(".product-box");
// let showText = false;

// productBox.addEventListener("mouseover", viewText);

// function viewText() {
//   if(!showText) {
//     hideContent.classList.add("show");
//     showText = true;
//   } else {
//     hideContent.classList.remove("show");
//     showText = false;
//   }
// }
