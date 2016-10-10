$(window).scroll(function() {
    $('.animated').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+700) {
        $(this).addClass('fadeInLeft anim');
      }
    });
  });

