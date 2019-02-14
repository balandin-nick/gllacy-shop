var myMap;
ymaps.ready(initMap);


var feedbackFormLink = document.querySelector("#get-feedback-form");
feedbackFormLink.addEventListener("click", ShowFeedbackForm);

var feedback = document.querySelector(".feedback-wrapper");

var feedbackClose = feedback.querySelector(".feedback-close");
feedbackClose.addEventListener("click", CloseFeedbackForm);

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        if (feedback.classList.contains("feedback-wrapper-show")) {
            feedback.classList.remove("feedback-wrapper-show");
        }
    }
});



function initMap () {
    myMap = new ymaps.Map(
        'map', {
            center: [59.93863075783236, 30.323054499999976],
            zoom: 16
        }, {
            searchControlProvider: 'yandex#search'
        }
    );
    var myPlacemark = new ymaps.Placemark(
        myMap.getCenter(), {
            hintContent: 'Магазин «Глейси»',
            balloonContent: 'Магазин «Глейси»'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/map-marker.png',
            // Размеры метки.
            iconImageSize: [218, 142],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-40, -145]
        }
    );

    myMap.geoObjects.add(myPlacemark);
}



function ShowFeedbackForm(event) {
    event.preventDefault();

    feedback.classList.add("feedback-wrapper-show");

    var username = feedback.querySelector("[name=feedback-username]");
    username.focus();
}



function CloseFeedbackForm(event) {
    event.preventDefault();

    feedback.classList.remove("feedback-wrapper-show");
}