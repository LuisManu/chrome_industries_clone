
$('.mobile-menu').click(function(){
    $('.mobile-site-nav, menu').toggleClass('mobile-nav-visible', 750);
});
$('.mobile-search').click(function(){
    if ($('#mobile-menu-search').is(':hidden')) {
        $('#mobile-menu-search').addClass('mobile-site-nav mobile-nav-visible');
    } else {
        $('#mobile-menu-search').removeClass('mobile-site-nav mobile-nav-visible');
    }
});
$('.mobile-account').click(function(){
    if ($('#mobile-menu-account').is(':hidden')) {
        $('#mobile-menu-account').addClass('mobile-site-nav mobile-nav-visible');
    } else {
        $('#mobile-menu-account').removeClass('mobile-site-nav mobile-nav-visible');
    }
});
$('.mobile-cart').click(function(){
    if ($('#mobile-menu-cart').is(':hidden')) {
        $('#mobile-menu-cart').addClass('mobile-site-nav mobile-nav-visible');
    } else {
        $('#mobile-menu-cart').removeClass('mobile-site-nav mobile-nav-visible');
    }
});