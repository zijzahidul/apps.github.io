$(function () {


    // Menu fixed

    var navoff = $('header').offset().top;

    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > navoff) {
            $('header').addClass('menu_fix');
        } else {
            $('header').removeClass('menu_fix');
        }

    });

    // Scroll To Top  
    $(".bto").click(function () {
        $("html,body").animate({
            scrollTop: 0,
        }, 2000);
    });

    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > 130) {
            $(".bto").fadeIn();
        } else {
            $(".bto").fadeOut();
        }
    });





});