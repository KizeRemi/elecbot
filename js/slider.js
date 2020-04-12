$(document).ready(function() {
  $('.slider__container').slick({
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: '60px',
    variableWidth: true,
    prevArrow: '<i class="fas fa-angle-left left-arrow-slide"></i>',
    nextArrow: '<i class="fas fa-angle-right right-arrow-slide"></i>',
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          centerMode: true,
          arrows: false,
        }
      }
    ]
  });

  $('.slider__steps__container').slick({
    slidesToScroll: 1,
    arrows: false,
    variableWidth: true,
  });

  const quickNav = $('.quick__nav');
  const choosenBtn = $('.choosen__btn__container');
  const num = $('.temoin_container').offset().top;
  $(window).scroll(function () {
    if ($(this).scrollTop() + $(this).height() > num) {
      choosenBtn.addClass("hidden");
      quickNav.addClass("hidden");
    } else {
      choosenBtn.removeClass("hidden");
      quickNav.removeClass("hidden");
    }
  });
});
