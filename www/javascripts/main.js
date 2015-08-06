////////////////////////////////////////////////////
//////////////// LIVE TEXT DEMO

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



////////////////////////////////////////////////////
//////////////// FLOW TYPE FOR LIVE TEXT DEMO 

$(document).on('click', '[data-editable]', function(e) {
  var $caption = $(e.currentTarget);
  if (!$caption.attr('contenteditable')) {
    $caption.attr('contenteditable', '');
    $caption.focus();
  }
});

$(document).on('blur', '[data-editable]', function(e) {
  var $caption = $(e.currentTarget);
  $caption.removeAttr('contenteditable');
});

$('figure').flowtype( {
  minimum: 640
});


////////////////////////////////////////////////////
//////////////// FIXED STICKY HEADER FOR CMS DEMO

$('.fixedsticky').fixedsticky();




////////////////////////////////////////////////////
//////////////// SLIDE TO PUBLISH BUTTON DEMO

// Helper function
var update_handle_track_pos = function(slider, ui_handle_pos) {
  var handle_track_xoffset = -((ui_handle_pos/100) * slider.clientWidth);
  $(slider).find(".handle-track").css("left", handle_track_xoffset);
  var slider_range_inverse_width = (100 - ui_handle_pos) + "%";
  $(slider).find(".slider-range-inverse").css("width", slider_range_inverse_width);
}

// Init slider
$("#js-slider").slider({
  range: "min",
  max: 100,
  value: 50,
  create: function(event, ui) {
    var slider = $(event.target)

    // Append the slider with an inverse range
    slider.prepend('<div class="slider-range-inverse"></div>');
     
    // Set initial dimensions
    slider.find(".handle-track").css("width", event.target.clientWidth);
    
    // Set initial position for tracks
    update_handle_track_pos(event.target, $(this).slider("value"));
  },  
  slide: function(event, ui) {
    // Update position of tracks
    update_handle_track_pos(event.target, ui.value)
  }
});
