$(document).ready(function(){
    $(".set > a").on("click", function(){
        if($(this).hasClass('active')){
            $(this).removeClass("active");
            $(this).siblings('.content').slideUp(200);
            $(".set > a i").removeClass("fa-minus").addClass("fa-plus");
        }else{
            $(".set > a i").removeClass("fa-minus").addClass("fa-plus");
            $(this).find("i").removeClass("fa-plus").addClass("fa-minus");
            $(".set > a").removeClass("active");
            $(this).addClass("active");
            $('.content').slideUp(200);
            $(this).siblings('.content').slideDown(200);
        }

    });

    var distance = $('nav').offset().top,
        heightTitle = $('nav').outerHeight(true);
    $window = $(window);

    $window.scroll(function() {
        if ( $window.scrollTop() >= distance ) {
            $('nav').addClass('stickly');
            $('html').css('margin-top', heightTitle)
        }
        else {
            $('nav').removeClass('stickly');
            $('html').css('margin-top', '0')
        }
    });


    $(".popup").magnificPopup();

    $(".menu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top-100}, 1500);
    });

});