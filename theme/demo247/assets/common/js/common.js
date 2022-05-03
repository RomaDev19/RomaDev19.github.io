$(document).ready(function () {
  //menu
  function menu(btn, btnClose, link, nav) {
    $(btn).click(function() {
      $(this).toggleClass("on");
      $(nav).toggleClass('slide');
    });

    $(btnClose).click(function() {
      $(btn).removeClass("on");
      $(nav).removeClass('slide');
    });

    $(link).click(function() {
      $(btn).removeClass('on');
      $(nav).removeClass('slide');
    });

    $(window).click(function() {
      $(btn).removeClass("on");
      $(nav).removeClass('slide');
    });
    $(btn).click(function(event){
      event.stopPropagation();
    });
  }

  menu('.mobile-btn', '.close-btn', '.cabinet-menu a', '.cabinet-menu');
  menu('.hamburger', '.close-btn', '.main-menu-nav a', '.main-menu-nav');

  //lang
  //select-lang
  $('.selected-lang').click(function () {
    $(this).siblings('.lang-list').toggle();
    $(this).toggleClass('active');
  });
  $(window).click(function () {
    $('.lang-list').fadeOut('fast');
    $('.selected-lang').removeClass('active');
  });
  $('.selected-lang').click(function (event) {
    event.stopPropagation();
  });
  $('.lang-list li').click(function () {
    var icon = $(this).find('a').html();
    $('.lang-list li').removeClass('active');
    $(this).addClass('active');
    $('.selected-lang span').remove();
    $(icon).clone().appendTo('.selected-lang');
    $('.lang-list').fadeOut('fast');
    $('.selected-lang').removeClass('active');
  });

  //accordion
  (function ($) {
    $('.accordion > li:eq(0) .accordion-title').addClass('active').next().slideDown().parent().addClass('active');
    $('.accordion .accordion-title').click(function (j) {
      var dropDown = $(this).closest('li').find('.question-block');
      $(this).closest('.accordion').find('.question-block').not(dropDown).slideUp();
      if ($(this).hasClass('active')) {
        $(this).removeClass('active').parent().removeClass('active');
      } else {
        $(this).closest('.accordion').find('.accordion-title.active').removeClass('active').parent().removeClass('active');
        $(this).addClass('active').parent().addClass('active');
      }
      dropDown.stop(false, true).slideToggle();
      j.preventDefault();
    });
  })(jQuery);

  //placeholder
  $('input,textarea').focus(function () {
    $(this).data('placeholder', $(this).attr('placeholder'));
    $(this).attr('placeholder', '');
  });
  $('input,textarea').blur(function () {
    $(this).attr('placeholder', $(this).data('placeholder'));
  });

  //focus input
  $('.js-focus').focus(function() {
    $(this).parent().addClass('focused');
  });

  $('.js-focus').blur(function() {
    $(this).parent().removeClass('focused');
  });

  $('.input--icon').focus(function() {
    $(this).parent().addClass('label--focus');
  });

  $('.input--icon').blur(function () {
    $(this).parent().removeClass('label--focus');
  });

  //tabs
  $('ul.tabs__caption').on('click', 'li:not(.active)', function () {
    $(this).addClass('active').siblings().removeClass('active').closest('div.tabs').find('div.tabs__content').slideUp().eq($(this).index()).slideDown();
  });

  //table-responsive
  $(function () {
    $('table.responsive').ngResponsiveTables();
  });

  setTimeout(function() {
    $('select').styler();
  }, 100);

  //circle-progress
  var c1 = $('.progress-percent-around');

  function circlePlan() {
    c1.circleProgress({
      //value: 0.9,//progress value
      size: 150,
      lineCap: 'butt',
      thickness: 5,
      startAngle: Math.PI / 4 * 2,
      emptyFill: "rgba(0, 0, 0, 0)",
      //fill: "#10BA92"
    });
    $('.plan-percent__value').each(function () {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
        countNum: countTo
      }, {
        duration: 1000,
        easing: 'swing',
        step: function step() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function complete() {
          $this.text(this.countNum);
        }

      });
    });
  }

  setTimeout(circlePlan, 1500);

  //clipboard
  var clip1 = new Clipboard('.promo-unit__button .btn');

  function bannerLink(id) {
    id.on('success', function (e) {
      swal({
        title: "Link copied",
        text: "You can paste text that has been copied by pressing Ctrl + V. The text that was copied last will be pasted.",
        type: "success",
        showCancelButton: false,
        confirmButtonClass: "btn-success",
        confirmButtonText: "OK!",
        closeOnConfirm: false,
        closeOnCancel: false
      });
    });
  }

  bannerLink(clip1);

  var affil1 = new Clipboard('#affiliater1');

  function affiliatelink(id) {
    id.on('success', function (e) {
      swal({
        title: "Your referral link copied!",
        text: "You can paste text that has been copied by pressing Ctrl + V. The text that was copied last will be pasted.",
        type: "success",
        showCancelButton: false,
        confirmButtonClass: "btn-success",
        confirmButtonText: "OK!",
        closeOnConfirm: false,
        closeOnCancel: false
      });
    });
  }

  affiliatelink(affil1);

  //scroll
  $(".section-article").mCustomScrollbar({
    mouseWheel:{ preventDefault: true }
  });

   $(".accordion-faq").mCustomScrollbar({
    mouseWheel:{ preventDefault: true }
  });

   $(".plan-list-wrap").mCustomScrollbar({
    mouseWheel:{ preventDefault: true }
  });


});



