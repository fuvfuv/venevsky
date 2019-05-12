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

   var catalogNavToggle = function(clickEl, curClass) {
      $(document).on('click', clickEl, function() {
         $(this)
            .parent()
            .toggleClass(curClass);
         $(this)
            .parent()
            .siblings()
            .removeClass(curClass);
      });
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
            open: function() {
               $('html').addClass('fixed');
            },
            close: function() {
               $('html').removeClass('fixed');
            },
         },
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
         $.each($('.catalog-subnav'), function(i, el) {
            new SimpleBar(el);
         });
      }
   };

   var fileUpload = function() {
      $('.file-upload input[type="file"]').change(function() {
         var fileName = $(this)
            .val()
            .replace(/.*\\/, '');
         $(this)
            .closest('.file-upload')
            .find('.file-upload__text')
            .html(fileName);
      });
   };

   var breadCrumbsNav = function() {
      $(document).on('click', '.breadcrumbs-nav__toggle, .breadcrumbs-nav__link', function(evt) {
         if ($(window).width() > 767) {
            evt.preventDefault();
         }
         $('.breadcrumbs-nav__toggle')
            .parent()
            .toggleClass('breadcrumbs__item--show-nav');
      });
   };

   var catalogMobileNav = function() {
      catalogNavToggle('.catalog-mobile-nav__label', 'catalog-mobile-nav__item--active');
      catalogNavToggle('.catalog-mobile-subnav__label', 'catalog-mobile-subnav__item--active');
   };

   var catalogNav = function() {
      if ($(window).width() < 767) {
         $(document).on('click', '.catalog-nav__item', function() {
            $(this).addClass('catalog-nav__item--active');
            $(this)
               .siblings()
               .removeClass('catalog-nav__item--active');
         });

         catalogNavToggle('.catalog-nav__label', 'catalog-nav__item--active');
         catalogNavToggle('.catalog-subnav__header', 'catalog-subnav__block--active');
      }
   };

   var counter = function() {
      var newNumber;
      $(document).on('click', '.counter__btn--minus', function() {
         var number = +$(this)
            .parent()
            .find('.counter__current-text')
            .text();
         if (number != 0) {
            newNumber = number - 1;
         } else {
            return false;
         }
         $(this)
            .parent()
            .find('.counter__current-text')
            .text(newNumber);
      });
      $(document).on('click', '.counter__btn--plus', function() {
         var number = +$(this)
            .parent()
            .find('.counter__current-text')
            .text();
         newNumber = number + 1;
         $(this)
            .parent()
            .find('.counter__current-text')
            .text(newNumber);
      });
   };

   var filterItem = function() {
      $(document).on('click', '.filter-item__header', function() {
         $(this)
            .parent()
            .toggleClass('filter-item--active');
      });
   };

   var filterSlider = function() {
      $('.filter-slider__line').each(function() {
         var slider = $(this)[0];
         var sliderFrom = $(this)
            .parent()
            .find('.filter-slider__value--from')[0];
         var sliderTo = $(this)
            .parent()
            .find('.filter-slider__value--to')[0];
         var inputs = [sliderFrom, sliderTo];
         var type = $(this).data('range-type');

         if (type === 'price') {
            noUiSlider.create(slider, {
               start: [2500, 5900],
               connect: true,
               range: {
                  min: 0,
                  max: 10000,
               },
               format: wNumb({
                  decimals: 0,
                  thousand: '',
               }),
            });
         } else if (type === 'mm') {
            noUiSlider.create(slider, {
               start: [0.5, 7],
               connect: true,
               range: {
                  min: 0,
                  max: 10,
               },
               format: wNumb({
                  decimals: 2,
               }),
            });
         }

         slider.noUiSlider.on('update', function (values, handle) {
            inputs[handle].value = values[handle];
         });

         inputs.forEach(function (input, handle) {
            input.addEventListener('change', function () {
               slider.noUiSlider.setHandle(handle, this.value);
            });
         });
      });
   };

   var tagsToggle = function () {
      $(document).on('click', '.tags__toggle', function () {
         var el = $(this).parent();
         if (el.hasClass('tags--active')) {
            el.removeClass('tags--active');
            $(this).text('Все запросы');
         }  else {
            el.addClass('tags--active');
            $(this).text('Скрыть');
         }
      });
   };

   var sortToggle = function () {
      $(document).on('click', '.sort-action__header, .sort-action__body', function () {
         var el = $(this).parent();

         if (el.hasClass('sort-action--active')) {
            el.removeClass('sort-action--active');
         } else {
            $('.sort-action').removeClass('sort-action--active');
            el.addClass('sort-action--active');
         }
      });
   };

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
            dots: true,
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
   catalogNav();
   fileUpload();
   breadCrumbsNav();
   catalogMobileNav();
   counter();
   filterItem();
   filterSlider();
   tagsToggle();
   sortToggle();
});
