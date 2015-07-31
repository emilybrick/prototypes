$(document).on('click', 'a[href="#"]', function(e){
  e.preventDefault();
});

$(".submenu").parent().prepend('<i class="entypo-down-open-big sf"></i>');


// $("#vert-nav .topmenu a").click( function() {
//   var $t = $(this);
//   var $menu = $t.next(".submenu");
//   $menu.slideToggle('slow');
//   $menu.parent().toggleClass('openmenu');
// });


$("input,textarea").focus( function() {
  $(this).prev("label").addClass('focused');
});
 $("input,textarea").blur( function() {
  $(this).prev("label").removeClass('focused');
});




  function simpleSlideshow() {
    var slideshow = $('#slideshow');
    var links = $('a.thumb');
    var slides = $('.slide');

    // on load, show the first slide
    slideshow.find('.current').show();

    // on click, switch the slide
    links.on('click', function(event) {
      $('.active-link').removeClass('active-link');
      $(this).addClass('active-link');
      event.preventDefault();
      var self = $(this);
      var newslide = slideshow.find('#'+self.data('slide'));
      var current = slideshow.find('.current');
      current.removeClass('current').fadeOut('slow');
      newslide.addClass('current').fadeIn('slow');
    });
  };

  $(document).ready(function() {
    simpleSlideshow();
  });




  $('.colophonLink').click(function(){
    $('.lightbox').show();

  return false;

  });

  $('.citeClose').click(function(){
    $('.lightbox').hide();

  return false;

  });

var $face = $('.facefull');
var $overlaytoggle = $('[data-toggle-overlay]');

$overlaytoggle.on('mouseover', function(){
  $face.addClass('active');
});

$overlaytoggle.on('mouseout', function(){
  $face.removeClass('active');
});


