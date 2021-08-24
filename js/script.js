$(document).ready(function () {
    let currentFloor = 2,
        btnUp = $(".btn__up"),
        btnDown = $('.btn__down'),
        floorPath = $('.main__home path'),
        modal = $('.modal'),
        modalClose = $('.modal__close'),
        btnShow = $('.btn__show'),
        currentApart = $('.floor__path'),
        currentApartLink = $('.apart__link');

        //функция при наведении мышкой на этаж
        floorPath.on("mouseover", function() {
        floorPath.removeClass('current-floor');                       //удаляем активный этаж
        currentFloor = $(this).attr("data-floor");                      //получаем значение текущего этажа
        $(".main__floorNumb").text(currentFloor);                      //записываем значение этажа в счетчик
    });

    //отслеживаем клик по кнопке
    btnUp.on("click", function() {
        if (currentFloor < 18) {   //проверяем значение этажа
            currentFloor++;       // прибавляем этаж
            usCurrentFloor = currentFloor.toLocaleString('en-us', {minimumIntegerDigits: 2, useGrouping: false});    //форматируем значение этажа, чтобы было 02 а не 2
            $(".main__floorNumb").text(usCurrentFloor);           //записываем значение этажа в счетчик

            floorPath.removeClass('current-floor');             // удаляем активный класс у этажей
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");     //подсвечиваем активный этаж
        }
    });

    btnDown.on('click', function() {
        if (currentFloor > 2) {
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString('en-us', {minimumIntegerDigits: 2, useGrouping: false});
            $(".main__floorNumb").text(usCurrentFloor);

            floorPath.removeClass('current-floor');
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
        }
    });

    // modal
    function toggleActive() {
        modal.toggleClass('modal__active');
    }

    floorPath.on('click', toggleActive);
    modalClose.on('click', toggleActive);
    btnShow.on('click', toggleActive);

    //выделение ссылки при наведении на схему квартиры на этаже
    function toggleSlide(item) { 
        $(item).each(function(i) {
            $(this).on('mouseover', function() {
                $(currentApart).removeClass('floor__active');
                $(currentApartLink).removeClass('link__active');
                $(currentApartLink).eq(i).toggleClass('link__active');
                
            });
        });
    }
    // выделение схемы квартиры на этаже при наведении на сслыку
    function toggleBlue(item) {
        $(item).each(function(i) {
            $(this).on('mouseover', function() {
                $(currentApartLink).removeClass('link__active');
                $(currentApart).removeClass('floor__active');
                $(currentApart).eq(i).toggleClass('floor__active');
                   
            });
           });
        
    }
    toggleSlide(currentApart);
    toggleBlue(currentApartLink);

    //форма заказа
    function orderActive () {
        $('.overlay, .order').fadeIn('slow');
    }
    function orderNone () {
        $('.overlay, .order, .thanks').fadeOut('slow');
    }
    currentApart.on('click', orderActive);
    currentApartLink.on('click', orderActive);
    $('.order__close').on('click', orderNone);
    $('.order__btn').on('click', function() {
        $('.order').fadeOut('slow');
        $('.thanks').fadeIn('slow');
    });

// menu 
let hamburger = $('.hamburger'),
    menu = $('.menu'),
    menuItem = $('.menu__item');

    function closeMenu() {
        hamburger.toggleClass('hamburger_active');
        menu.toggleClass('menu_active');
    }

    hamburger.on('click', closeMenu);
    menuItem.on('click', closeMenu);

});

