$(document).ready(function() {
   ymaps.ready(function() {
      var myMapOffice = new ymaps.Map(
            'popup-contacts-office',
            {
               center: [55.754578, 37.694953],
               zoom: 14,
            },
            {
               searchControlProvider: 'yandex#search',
            }
         ),
         myPlacemark1 = new ymaps.Placemark(
            myMapOffice.getCenter(),
            {
               hintContent: 'Собственный значок метки',
               balloonContent: 'Это красивая метка',
            },
            {
               iconLayout: 'default#image',
               iconImageHref: 'images/general/map-pin.svg',
               iconImageSize: [56, 69],
               iconImageOffset: [-5, -38],
            }
         );

      myMapOffice.geoObjects.add(myPlacemark1);
      myMapOffice.behaviors.disable('scrollZoom');
      myMapOffice.controls
         .remove('trafficControl')
         .remove('searchControl')
         .remove('typeSelector')
         .remove('geolocationControl')
         .remove('fullscreenControl')
         .remove('rulerControl');

      var myMapStock = new ymaps.Map(
            'popup-contacts-stock',
            {
               center: [55.566373, 37.55856],
               zoom: 14,
            },
            {
               searchControlProvider: 'yandex#search',
            }
         ),
         myPlacemark2 = new ymaps.Placemark(
            myMapStock.getCenter(),
            {
               hintContent: 'Собственный значок метки',
               balloonContent: 'Это красивая метка',
            },
            {
               iconLayout: 'default#image',
               iconImageHref: 'images/general/map-pin.svg',
               iconImageSize: [56, 69],
               iconImageOffset: [-5, -38],
            }
         );

      myMapStock.geoObjects.add(myPlacemark2);
      myMapStock.behaviors.disable('scrollZoom');
      myMapStock.controls
         .remove('trafficControl')
         .remove('searchControl')
         .remove('typeSelector')
         .remove('geolocationControl')
         .remove('fullscreenControl')
         .remove('rulerControl');
   });

   if ($('div').is('.contacts-places')) {
      ymaps.ready(function() {
         var myMapOffice = new ymaps.Map(
               'contact-map-office',
               {
                  center: [55.754578, 37.694953],
                  zoom: 14,
               },
               {
                  searchControlProvider: 'yandex#search',
               }
            ),
            myPlacemark1 = new ymaps.Placemark(
               myMapOffice.getCenter(),
               {
                  hintContent: 'Собственный значок метки',
                  balloonContent: 'Это красивая метка',
               },
               {
                  iconLayout: 'default#image',
                  iconImageHref: 'images/general/map-pin.svg',
                  iconImageSize: [36, 46],
                  iconImageOffset: [-5, -38],
               }
            );

         myMapOffice.geoObjects.add(myPlacemark1);
         myMapOffice.behaviors.disable('scrollZoom');
         myMapOffice.controls
            .remove('trafficControl')
            .remove('searchControl')
            .remove('typeSelector')
            .remove('geolocationControl')
            .remove('fullscreenControl')
            .remove('rulerControl');

         var myMapStock = new ymaps.Map(
               'contact-map-stock',
               {
                  center: [55.566373, 37.55856],
                  zoom: 14,
               },
               {
                  searchControlProvider: 'yandex#search',
               }
            ),
            myPlacemark2 = new ymaps.Placemark(
               myMapStock.getCenter(),
               {
                  hintContent: 'Собственный значок метки',
                  balloonContent: 'Это красивая метка',
               },
               {
                  iconLayout: 'default#image',
                  iconImageHref: 'images/general/map-pin.svg',
                  iconImageSize: [36, 46],
                  iconImageOffset: [-5, -38],
               }
            );

         myMapStock.geoObjects.add(myPlacemark2);
         myMapStock.behaviors.disable('scrollZoom');
         myMapStock.controls
            .remove('trafficControl')
            .remove('searchControl')
            .remove('typeSelector')
            .remove('geolocationControl')
            .remove('fullscreenControl')
            .remove('rulerControl');
      });
   }
});
