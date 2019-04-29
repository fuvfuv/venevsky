$(document).ready(function () {
  svg4everybody();

  var sandwich = function () {
    $(document).on('click', '.sandwich',
      function () {
        $(this).toggleClass('sandwich--active');
      });
  };

  var popularCategoriesSlider = function () {
    if ($(window).width() < 768) {
      $('.js-categories-prev').slick({
        slidesToShow: 2,
        slidesToScroll: 1
      })
    }
  };

  var productPrevSlider = function () {
    var slideCount = $('.product-slider__count');
    var prodSlider = $('.js-product-slider');

    prodSlider.on('init afterChange', function (event, slick, currentSlide, nextSlide) {
      var i = (currentSlide ? currentSlide : 0) + 1;
      slideCount.text('Страница ' + i + ' из ' + (slick.slideCount - 3));
    });

    prodSlider.slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: '.slider-nav--prev',
      nextArrow: '.slider-nav--next',
      infinite: false,
    });
  };

  sandwich();
  popularCategoriesSlider();
  productPrevSlider();
});

var popularCategoriesSlider = function () {
  var sliderElement = $('.js-categories-prev');

  if ($(window).width() < 768 && !(sliderElement.hasClass('slick-initialized'))) {
    sliderElement.slick({
      slidesToShow: 2,
      slidesToScroll: 1
    });
  } else if ($(window).width() > 768 && sliderElement.hasClass('slick-initialized')) {
    sliderElement.slick('unslick');
  }
};

$(window).on('resize', function () {
  popularCategoriesSlider();
});