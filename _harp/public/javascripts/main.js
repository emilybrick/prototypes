/// JS For Live Text, Input & Textarea
/// -----------------------------
/// leave notes here
/// -----------------------------

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




/// Flowtype JS for Live Text Over Image (in CMS)
/// -----------------------------
/// leave notes here
/// -----------------------------

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



/// Fixed Sticky Header for CMS
/// -----------------------------
/// leave notes here
/// -----------------------------

$('.fixedsticky').fixedsticky();




/// Slide to Publish Demo JS
/// -----------------------------
/// leave notes here
/// -----------------------------


var sliderCompleteText = "Published";

var $slider = $('.publish-slider');
var $sliderText = $slider.find('.publish-slider__text');
var $sliderHandle = $slider.find('.publish-slider__handle');
var $sliderGrow = $slider.find('.publish-slider__grow');

new Dragdealer($slider.get(0), {
  steps: 1,
  handleClass: 'publish-slider__handle',
  animationCallback: function(x, y) {
    if (!this.disabled) {
      // x scales from 0 -> 1 as you slide
      // subtractng by 1 reverses the number
      // so the text gets more transparent as you slide
      $sliderText.css('opacity', 1 - x);
      $sliderGrow.css('width', x * 100 + "%");

    }
  },
  callback: function(x, y) {

    // only publish if > 95% of the way to the end
    if (x > 0.95) {

      $sliderHandle.hide();
      $sliderGrow.hide();
      $sliderText.text(sliderCompleteText);
      $slider.addClass('publish-slider--published');
      $sliderText.css('opacity', 1);
      this.disable();

    } else if (x > 0) {

      // Animate back to 0 if you let go any time before 95%
      this.setStep(0);

    }
  }
});










