// Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [55.731110, 37.631092],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 17
        }),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'NiceEvent',
            balloonContent: 'г. Москва, ул. Валовая, д.14, стр.8'
        }, {

            iconColor: '#f2443c'
            // preset: 'islands#dotIcon'
            // // Опции.
            // // Необходимо указать данный тип макета.
            // iconLayout: 'default#image',
            // // Своё изображение иконки метки.
            // iconImageHref: 'images/baloon.png',
            // // Размеры метки.
            // iconImageSize: [70, 70],
            // // Смещение левого верхнего угла иконки относительно
            // // её "ножки" (точки привязки).
            // iconImageOffset: [-5, -38]
        }

        );

        myMap.behaviors.disable('scrollZoom');
        myMap.geoObjects.add(myPlacemark);
    }