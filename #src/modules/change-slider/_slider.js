if ($('.change-slider').length){	
    var chgSwiper = undefined;
    allInitSwiper('.change-slider', chgSwiper ,767); 
  }  

  function allInitSwiper(objSlider,  varSwiper,  intWidth) {

    var screenWidth = $(window).outerWidth();
    var objNext = objSlider + '__arrow_next';
    var objPrev = objSlider + '__arrow_prev';
    var objPagination = objSlider + '__pagination';

    console.info(objNext);

    if ( (screenWidth <= (intWidth)) && (varSwiper == undefined)) {
      varSwiper = new Swiper(objSlider, {
        slidesPerView: 1,
        // loop: true,    
        // centeredSlides: true,
        autoHeight: true,
        spaceBetween: 15,
        pagination: {
          el: objPagination,
          clickable: true,
          // dynamicBullets: true,
          renderBullet: function (index, className) {
          	return '<span class="' + className + '"><span>' + (index + 1) + '</span></span>';
        	},
        },
        navigation: {
	       nextEl: objNext,
	       prevEl: objPrev,
	     },
      });
    } else if ((screenWidth > intWidth) && (varSwiper != undefined)) {
      varSwiper.destroy();
      varSwiper = undefined;
      $(objSlider + ' .swiper-wrapper').removeAttr('style');
      $(objSlider + ' .swiper-slide').removeAttr('style');
    }
  }
  

  $(window).resize(function() {
    if ($('.change-slider').length) allInitSwiper('.change-slider', chgSwiper,767);    
  });