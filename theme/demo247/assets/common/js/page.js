$(document).ready(function () {
  $('#fullpage').fullpage({
    anchors: ['screen-1', 'screen-2', 'screen-3', 'screen-4', 'screen-5', 'screen-6'],
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
        $('.section-bg-text').addClass('animated fadeInRight');
        $('.title-main-wrap').addClass('animated fadeInLeft');
        $('.subtitle-main').addClass('animated fadeInLeft');
        $('.statistic-list-unit').addClass('animated fadeInUp');
      };
      if (afterIndex == 2) {
        $('.section-2 .section-title-wrap').addClass('animated fadeInRight');
        $('.section-2 .section-subtitle').addClass('animated fadeInUp');
        $('.section-2 .section-article p').addClass('animated fadeInUp');
      };
      if (afterIndex == 3) {
        $('.section-3 .section-title-wrap').addClass('animated fadeInDown');
        $('.form-calculator-top .item').addClass('animated fadeInUp');
        $('.form-calculator__title').addClass('animated fadeInUp');
        $('.result-item').addClass('animated fadeInUp');
      };
      if (afterIndex == 4) {
        $('.section-4 .section-title-wrap').addClass('animated fadeInRight');
        $('.section-4 .section-article p').addClass('animated fadeInUp');
        $('.percent-ref-list li').addClass('animated fadeInUp');
        $('.levels-list-item').addClass('animated fadeInUp');
      };
      if (afterIndex == 5) {
        $('.section-5 .section-title-wrap').addClass('animated fadeInRight');
        $('.section-5 .section-article p').addClass('animated fadeInUp');
        $('.faq-tabs .tabs-nav-item').addClass('animated fadeInRight');
      };
      if (afterIndex == 28) {
        $('.section-6 .section-title-wrap').addClass('animated fadeInRight');
        $('.section-6 .section-article p').addClass('animated fadeInUp');
      };
      if (afterIndex == 6) {
        $('.section-7 .section-title-wrap').addClass('animated fadeInRight');
        $('.section-7 .section-article p').addClass('animated fadeInUp');
        $('.contacts-support-item').addClass('animated fadeInRight');
        $('.payment-logo-list li').addClass('animated fadeInDown');
        $('.form-contacts__label').addClass('animated fadeInUp');
        $('.social-buttons li').addClass('animated fadeInRight');
        $('.form-contacts__button').addClass('animated fadeInUp');
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
      if (index == 1 && (direction == 'down' || direction == 'up')) {
        $('.section-bg-text').removeClass('animated fadeInRight');
        $('.title-main-wrap').removeClass('animated fadeInLeft');
        $('.subtitle-main').removeClass('animated fadeInLeft');
        $('.statistic-list-unit').removeClass('animated fadeInUp');
      };
      if (index == 2 && (direction == 'down' || direction == 'up')) {
        $('.section-2 .section-title-wrap').removeClass('animated fadeInRight');
        $('.section-2 .section-subtitle').removeClass('animated fadeInUp');
        $('.section-2 .section-article p').removeClass('animated fadeInUp');
      };
      if (index == 3 && (direction == 'down' || direction == 'up')) {
        $('.section-3 .section-title-wrap').removeClass('animated fadeInDown');
        $('.form-calculator-top .item').removeClass('animated fadeInUp');
        $('.form-calculator__title').removeClass('animated fadeInUp');
        $('.result-item').removeClass('animated fadeInUp');
      };
      if (index == 4 && (direction == 'down' || direction == 'up')) {
        $('.section-4 .section-title-wrap').removeClass('animated fadeInRight');
        $('.section-4 .section-article p').removeClass('animated fadeInUp');
        $('.percent-ref-list li').removeClass('animated fadeInUp');
        $('.levels-list-item').removeClass('animated fadeInUp');
      };
      if (index == 5 && (direction == 'down' || direction == 'up')) {
        $('.section-5 .section-title-wrap').removeClass('animated fadeInRight');
        $('.section-5 .section-article p').removeClass('animated fadeInUp');
        $('.faq-tabs .tabs-nav-item').removeClass('animated fadeInRight');
      };
      if (index == 28 && (direction == 'down' || direction == 'up')) {
        $('.section-6 .section-title-wrap').removeClass('animated fadeInRight');
        $('.section-6 .section-article p').removeClass('animated fadeInUp');
      };
      if (index == 6 && (direction == 'down' || direction == 'up')) {
        $('.section-7 .section-title-wrap').removeClass('animated fadeInRight');
        $('.section-7 .section-article p').removeClass('animated fadeInUp');
        $('.contacts-support-item').removeClass('animated fadeInRight');
        $('.payment-logo-list li').removeClass('animated fadeInDown');
        $('.form-contacts__label').removeClass('animated fadeInUp');
        $('.social-buttons li').removeClass('animated fadeInRight');
        $('.form-contacts__button').removeClass('animated fadeInUp');
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
    $(".plan-list-wrap").mCustomScrollbar("destroy");
    $(".accordion-faq").mCustomScrollbar("destroy");
    $(".section-article").mCustomScrollbar("destroy");
  }
});

$(window).load(function () {
  $width = $(window).width();
  $height = $(window).height();
  if ($width > 991 && $height > 630) {
    $('#fullpage').fullpage.setResponsive(false);
  } else {
    $('#fullpage').fullpage.setResponsive(true);
    $(".plan-list-wrap").mCustomScrollbar("destroy");
    $(".accordion-faq").mCustomScrollbar("destroy");
    $(".section-article").mCustomScrollbar("destroy");
  }

});

