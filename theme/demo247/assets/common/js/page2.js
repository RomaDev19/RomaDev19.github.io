$(document).ready(function () {
  $('#fullpage').fullpage({
    menu: '.nav-page',
    slidesNavigation: false,
    scrollingSpeed: 1000,
    autoScrolling: true,
    fitToSection: false,
    navigation: false,
    afterLoad: function(anchorLink, afterIndex) {
      $('.num-page').text(afterIndex);
      $('.total-page').text($('.section').length);
      if (afterIndex == 1) {

      };
      if (afterIndex == anchorLink.length - 1) {
        $('.scroll-down').addClass('reverse');
      }
      else{
        $('.scroll-down').removeClass('reverse');
      }


    },
    onLeave: function(index, nextIndex, direction) {
      // first animation
      if (index == 1 && direction == 'down') {

      };

    }
  });
});


$(window).resize(function() {
  $width = $(window).width();
  $height = $(window).height();
  if ($width > 991 && $height > 630) {
    $('#fullpage').fullpage.setResponsive(false);
  } else {
    $('#fullpage').fullpage.setResponsive(true);
  }
});

$(window).load(function () {
  $width = $(window).width();
  $height = $(window).height();
  if ($width > 991 && $height > 630) {
    $('#fullpage').fullpage.setResponsive(false);
  } else {
    $('#fullpage').fullpage.setResponsive(true);
  }

});

