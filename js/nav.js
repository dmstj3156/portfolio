$(function(){
    $('header  nav > ul > li').hover(
        function(){
            $(this).find('.depth2').stop().fadeIn();
        },
        function(){
            $(this).find('.depth2').stop().fadeOut();
        }
    );


});
$(function(){
    $('#toggle').click(function(){
      $('nav').toggleClass('show');
    })
   
  })