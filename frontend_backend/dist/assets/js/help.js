$(document).ready(function() {
  
  $(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the 
      //nav bar to stick.  
      var img = document.getElementById('mainimage');
      var hi = img.clientHeight;
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > hi) {
      $('#my-navbar').addClass('fixed');
    }
    if ($(window).scrollTop() < hi) {
      $('#my-navbar').removeClass('fixed');
    }
  });
});