$(document).ready(function () {
   svg4everybody();

   var sandwich = function () {
      $(document).on('click', '.catalog-nav__header', function () {
            var sandwich = $(this).find('.sandwich');
            var catalog = $(this).parent();
            sandwich.toggleClass('sandwich--active');
            catalog.toggleClass('catalog-nav--active');
         });

         if ($(window).width() < 768) {
            $(document).on('click', '.sandwich', function () {
               $(this).toggleClass('sandwich--active');
               $('body').toggleClass('fixed');
               $('.mobile-nav__wrapper').toggleClass('mobile-nav__wrapper--active');
            });
         }
   };

   var popularCategoriesSlider = function () {
      if ($(window).width() < 768) {
         $('.js-categories-prev').slick({
            slidesToShow: 2,
            slidesToScroll: 1
         })
      }
   };

   // slick-slider
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
        responsive: [
         {
           breakpoint: 1239,
           settings: {
            slidesToShow: 3,
            arrow: false,
            dots: true
           }
         },
         {
           breakpoint: 600,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 2
           }
         },
         {
           breakpoint: 480,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1
           }
         }
       ]
      });
   };

   var locationChoose = function () {
      $(document).on('click', '.location-question__btn', function () {
        var answer = $(this).data('location');
        $(this).closest('.location-question').hide();
        if (answer === 'no') {
          $(this).closest('.location__body').addClass('is-location-choose');
        }
      });

      $(document).on('click', '.location-choose__item, .location-choose__close', function () {
         $(this).closest('.location__body').removeClass('is-location-choose');
      });

      $(document).on('click', '.location__header', function () {
         $(this).siblings('.location__body').addClass('is-location-choose');
      });
   }

   var popupLink = function () {
      $('.js-popup-link').magnificPopup({
         showCloseBtn: false
      });

      $(document).on('click', '.popup__close', function () {
         $.magnificPopup.close();
      });
   }

   var formValidation = function () {
      $('form').each(function () {
         $(this).on('submit', function () {
            $(this).validate({
               rules: {
                  name: 'required',
                  phone: 'required',
                  // email: 'required',
                  password: 'required',
                  comment: 'required'
               },
               messages: {
                  name: 'Введите корректное имя',
                  phone: 'Введите корректный номер',
                  // email: 'Введите корректный email',
                  password: 'Введите корректный пароль',
                  comment: 'Заполните поле'
               },
               errorPlacement: function (error, element) {
                  element.attr('placeholder', error[0].outerText);
               }
            });
            if ($(this).valid()) {
               var wrap = $(this)[0].closest('.hide-on-success');
               if (wrap) {
                  $(wrap).siblings('.show-on-success').show();
                  $(wrap).hide();
               }
            }
            return false;
         });
      });
   }

   var reviewLine = function () {
      $(document).on('click', '.review-line__number', function () {
         var left = $(this).parent().position().left;
         $(this).parent().siblings().removeClass('review-line__item--active');
         $(this).parent().addClass('review-line__item--active')
         $('.review-line').css('width', left - 1);
      });
   };

   var contactsPopup = function () {
      $(document).on('click', '.contacts-popup__toogle', function () {
         console.log('sd');
         $(this).parent().addClass('contacts-popup--active');
      });
      $(document).on('click', '.contacts-popup__close', function () {
         $(this).closest('.contacts-popup').removeClass('contacts-popup--active');
      });
   }

   sandwich();
   popularCategoriesSlider();
   productPrevSlider();
   locationChoose();
   popupLink();
   formValidation();
   reviewLine();
   contactsPopup();
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

if ($('div').is('.contacts-popup__map')) {
   ymaps.ready(function () {
      var myMapOffice = new ymaps.Map('popup-contacts-office', {
              center: [55.754578, 37.694953],
              zoom: 14
          }, {
              searchControlProvider: 'yandex#search'
          }),
          myPlacemark1 = new ymaps.Placemark(myMapOffice.getCenter(), {
              hintContent: 'Собственный значок метки',
              balloonContent: 'Это красивая метка'
          }, {
              iconLayout: 'default#image',
              iconImageHref: 'images/general/map-pin.svg',
              iconImageSize: [56, 69],
              iconImageOffset: [-5, -38]
          });

      myMapOffice.geoObjects.add(myPlacemark1);
      myMapOffice.behaviors.disable('scrollZoom');
      myMapOffice.controls.remove('trafficControl').remove('searchControl').remove('typeSelector').remove('geolocationControl').remove('fullscreenControl').remove('rulerControl');

      var myMapStock = new ymaps.Map('popup-contacts-stock', {
               center: [55.566373, 37.55856],
               zoom: 14
            }, {
               searchControlProvider: 'yandex#search'
            }),
            myPlacemark2 = new ymaps.Placemark(myMapStock.getCenter(), {
               hintContent: 'Собственный значок метки',
               balloonContent: 'Это красивая метка'
            }, {
               iconLayout: 'default#image',
               iconImageHref: 'images/general/map-pin.svg',
               iconImageSize: [56, 69],
               iconImageOffset: [-5, -38]
            });

      myMapStock.geoObjects.add(myPlacemark2);
      myMapStock.behaviors.disable('scrollZoom');
      myMapStock.controls.remove('trafficControl').remove('searchControl').remove('typeSelector').remove('geolocationControl').remove('fullscreenControl').remove('rulerControl');
  });
}
