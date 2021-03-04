$(function(){
    'use strict';
    var menuBg = $('.menu-bg');
    var backToTop = $('.back-to-top');

    // Top button js;
    $(window).on('scroll',function(){
        var scrolling = $(this).scrollTop();
        if(scrolling > 200){
            backToTop.fadeIn();
        }
        else{
            backToTop.fadeOut();

        }

        if(scrolling >= 600){
            menuBg.addClass('stiky');
        }
        else{
            menuBg.removeClass('stiky');
        }
    });
    backToTop.on('click',function(){
        $('html,body').animate({
            scrollTop: 0,
        },1500);
    });

    //animation scroll js;
    var html_body = $('html, body');
    $('menu-bg a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 0
                }, 1500);
                return false;
            }
        }
    });
});