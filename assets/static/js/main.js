$(document).ready(function() {
   var sandwich = function() {
      $(document).on('click', '.catalog-nav__header', function() {
         var sandwich = $(this).find('.sandwich');
         var catalog = $(this).parent();
         if ($(window).width() < 768) {
            if ($('.mobile-nav__wrapper').hasClass('mobile-nav__wrapper--active')) {
               $('.mobile-nav__wrapper').removeClass('mobile-nav__wrapper--active');
               $('.sandwich').removeClass('sandwich--active');
               catalog.toggleClass('catalog-nav--active');
            } else {
               catalog.toggleClass('catalog-nav--active');
               $('body').toggleClass('fixed');
            }
         } else {
            sandwich.toggleClass('sandwich--active');
            catalog.toggleClass('catalog-nav--active');
         }
      });

      if ($(window).width() < 768) {
         $(document).on('click', '.sandwich', function() {
            if ($('.catalog-nav').hasClass('catalog-nav--active')) {
               $('.catalog-nav').removeClass('catalog-nav--active');
               $(this).toggleClass('catalog-nav--active');
               $('.mobile-nav__wrapper').toggleClass('mobile-nav__wrapper--active');
            } else {
               $(this).toggleClass('catalog-nav--active');
               $('.mobile-nav__wrapper').toggleClass('mobile-nav__wrapper--active');
               $('body').toggleClass('fixed');
            }
         });
      }
   };

   var popularCategoriesSlider = function() {
      if ($(window).width() < 768) {
         $('.js-categories-prev').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
         });
      }
   };

   var locationChoose = function() {
      $(document).on('click', '.location-question__btn', function() {
         var answer = $(this).data('location');
         $(this)
            .closest('.location-question')
            .hide();
         if (answer === 'no') {
            $(this)
               .closest('.location__body')
               .addClass('is-location-choose');
         }
      });

      $(document).on('click', '.location-choose__item, .location-choose__close', function() {
         $(this)
            .closest('.location__body')
            .removeClass('is-location-choose');
      });

      $(document).on('click', '.location__header', function() {
         $(this)
            .siblings('.location__body')
            .addClass('is-location-choose');
      });
   };

   var popupLink = function() {
      $('.js-popup-link').magnificPopup({
         showCloseBtn: false,
         callbacks: {
            open: function () {
               $('html').addClass('fixed');
            },
            close: function () {
               $('html').removeClass('fixed');
            }
         }
      });

      $(document).on('click', '.popup__close', function() {
         $.magnificPopup.close();
      });
   };

   var formValidation = function() {
      $('form').each(function() {
         $(this).on('submit', function() {
            $(this).validate({
               rules: {
                  name: 'required',
                  phone: 'required',
                  // email: 'required',
                  password: 'required',
                  // comment: 'required',
               },
               messages: {
                  name: 'Введите корректное имя',
                  phone: 'Введите корректный номер',
                  // email: 'Введите корректный email',
                  password: 'Введите корректный пароль',
                  // comment: 'Заполните поле',
               },
               errorPlacement: function(error, element) {
                  element.attr('placeholder', error[0].outerText);
               },
            });
            if ($(this).valid()) {
               var wrap = $(this)[0].closest('.hide-on-success');
               if (wrap) {
                  $(wrap)
                     .siblings('.show-on-success')
                     .show();
                  $(wrap).hide();
               }
            }
            return false;
         });
      });
   };

   var reviewLine = function() {
      $(document).on('click', '.review-line__number', function() {
         var left = $(this)
            .parent()
            .position().left;
         $(this)
            .parent()
            .siblings()
            .removeClass('review-line__item--active');
         $(this)
            .parent()
            .addClass('review-line__item--active');
         $('.review-line').css('width', left - 1);
      });
   };

   var contactsPopup = function() {
      $(document).on('click', '.contacts-popup__toogle', function() {
         console.log('sd');
         $(this)
            .parent()
            .addClass('contacts-popup--active');
      });
      $(document).on('click', '.contacts-popup__close', function() {
         $(this)
            .closest('.contacts-popup')
            .removeClass('contacts-popup--active');
      });
   };

   var simpleBar = function() {
      if ($(window).width() > 768) {
         $.each($('.catalog-subnav'), function (i, el) {
            new SimpleBar(el);
         });
      }
   }

   var catalogNavHover = function () {
      if ($(window).width() < 767) {
         $(document).on('click', '.catalog-nav__item', function () {
            $(this).addClass('catalog-nav__item--active');
            $(this).siblings().removeClass('catalog-nav__item--active');
         });

         $(document).on('click', '.catalog-subnav__header', function () {
            $('.catalog-subnav__block').removeClass('catalog-subnav__block--active');
            $(this).closest('.catalog-subnav__block').addClass('catalog-subnav__block--active');
         });
      }
   }

   var fileUpload = function () {
      $('.file-upload input[type="file"]').change(function () {
         var fileName = $(this).val().replace(/.*\\/, "");
         $(this).closest('.file-upload').find('.file-upload__text').html(fileName);
      });
   }

   // slick-slider
   var productPrevSlider = function() {
      var slideCount = $('.product-slider__count');
      var prodSlider = $('.js-product-slider');

      prodSlider.on('init afterChange', function(event, slick, currentSlide, nextSlide) {
         var i = (currentSlide ? currentSlide : 0) + 1;
         slideCount.text('Страница ' + i + ' из ' + slick.slideCount);
      });

      prodSlider.slick({
         slidesToShow: 4,
         slidesToScroll: 1,
         prevArrow: '.products-prev-slider__nav-prev',
         nextArrow: '.products-prev-slider__nav-next',
         infinite: true,
         adaptiveHeight: true,
         arrows: true,
         responsive: [
            {
               breakpoint: 1239,
               settings: {
                  slidesToShow: 3,
                  arrows: true,
                  dots: true,
               },
            },
            {
               breakpoint: 768,
               settings: {
                  slidesToShow: 1,
                  dots: true,
               },
            },
         ],
      });
   };

   var popularCategoriesSlider = function() {
      var sliderElement = $('.js-categories-prev');

      if ($(window).width() < 768 && !sliderElement.hasClass('slick-initialized')) {
         sliderElement.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            infinite: false,
            arrows: false,
            dots: true
         });
      } else if ($(window).width() > 768 && sliderElement.hasClass('slick-initialized')) {
         sliderElement.slick('unslick');
      }
   };

   $(window).on('resize', function() {
      popularCategoriesSlider();
      simpleBar();
   });

   svg4everybody();
   sandwich();
   popularCategoriesSlider();
   productPrevSlider();
   locationChoose();
   popupLink();
   formValidation();
   reviewLine();
   contactsPopup();
   simpleBar();
   catalogNavHover();
   fileUpload();
});
