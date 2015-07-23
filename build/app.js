$(document).ready(function(){

  $('#fullpage').fullpage({
    anchors:['Home', 'Reading', 'Watching', 'Doing', 'Info'],
    menu: '#nav',
    scrollingSpeed: 1000,
    verticalCentered: false
  });

  $.fn.fullpage.setAllowScrolling(false);

  // var link = $('ul a');

  // link.on('click', function(){
  //   link.removeClass('active');
  //   $(this).addClass('active');
  // })
  
  // $('#reading').on('click', function(){
  //   $('#read').toggleClass('hidden');
  // })
  // $('#watching').on('click', function(){
  //   console.log('yo');
  // })
  // $('#doing').on('click', function(){
  //   console.log('sup');
  // })

});