$(function(){
    var height = $('header').height();
    $('#nav_toggle').click(function(){
        $("header").toggleClass('open');
        $("nav.nav").slideToggle(500);
        
        // var height = $('header').height();
        $("nav.nav").css('top',height+'px');
    });

    $('.header-nav__close-button').click(function(){
        $("header").toggleClass('open');
        $("nav.nav").slideToggle(500);
        
        // var height = $('header').height();
        $("nav.nav").css('top',height+'px');
    });
    
});