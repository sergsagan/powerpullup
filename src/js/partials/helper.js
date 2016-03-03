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
        event.preventDefault();

        var id  = $(this).attr('href'),

            top = $(id).offset().top;

        $('body,html').animate({scrollTop: top-100}, 1500);
    });

    $('.portfolio-item-slider1').on('init', function (event, slick, currentSlide) {
        var nrCurrentSlide = slick.currentSlide + 1,
            totalSlidesPerPage = nrCurrentSlide + 3;
        $('.controls').html(nrCurrentSlide + " - " + totalSlidesPerPage + " of " + slick.slideCount);
    });

    $('.portfolio-thumb-slider1').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.portfolio-item-slider1',
        dots: false,
        arrows: true,
        focusOnSelect: true,
        infinite: false
    });

    $('.portfolio-item-slider1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.portfolio-thumb-slider1',
        infinite: false
    });

    $('.portfolio-item-slider2').on('init', function (event, slick, currentSlide) {
        var nrCurrentSlide = slick.currentSlide + 1,
            totalSlidesPerPage = nrCurrentSlide + 3;
        $('.controls').html(nrCurrentSlide + " - " + totalSlidesPerPage + " of " + slick.slideCount);
    });

    $('.portfolio-thumb-slider2').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.portfolio-item-slider2',
        dots: false,
        arrows: true,
        focusOnSelect: true,
        infinite: false
    });

    $('.portfolio-item-slider2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.portfolio-thumb-slider2',
        infinite: false
    });

});