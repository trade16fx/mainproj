$(window).scroll(function() {
  scr_w = screen.width;
  if (scr_w > 991) {
    if ($(window).scrollTop() > 250) {
      $('.anchor__cont').addClass('fixed');
    } else {
      $('.anchor__cont').removeClass('fixed');
    }
  }
});