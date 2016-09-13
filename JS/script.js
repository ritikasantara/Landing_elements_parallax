$(window).scroll(function(){

  var Scroll = $(this).scrollTop();



  if(Scroll > $('.thumbnails-image').offset().top - ($(window).height() / 1.2)) {

    $('.thumbnails-image figure').each(function(i){

      setTimeout(function(){
        $('.thumbnails-image figure').eq(i).addClass('landing');
      }, 150 * (i+1));
    });

  }

});


