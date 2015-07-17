$( document ).ready(function() {
    $('.glyphicon-remove').click(function(){
            $('#banner').addClass('hidden-xs hidden-sm hidden-md hidden-lg');
    });
    
    $("#navbar").waypoint(function() {
        $("#navbar").addClass("navbar-fixed-top");
    }, { offset: "-20px" });
    $("#logo").waypoint(function() {
        $("#navbar").removeClass("navbar-fixed-top");
    }, { offset: "-20px" });
    
    $('#company-info').click(function(){
        if ($('#company-info-content').is(':hidden')) {
            $('#company-info-content').removeClass('hidden-xs hidden-sm');
        } else {
            $('#company-info-content').addClass('hidden-xs hidden-sm');
        }
    });
    $('#product-categories').click(function(){
        if ($('#product-categories-content').is(':hidden')) {
            $('#product-categories-content').removeClass('hidden-xs hidden-sm');
        } else {
            $('#product-categories-content').addClass('hidden-xs hidden-sm');
        }
    });
    $('#contact-us').click(function(){
        if ($('#contact-us-content').is(':hidden')) {
            $('#contact-us-content').removeClass('hidden-xs hidden-sm');
        } else {
            $('#contact-us-content').addClass('hidden-xs hidden-sm');
        }
    });
    $('#stores').click(function(){
        if ($('#stores-content').is(':hidden')) {
            $('#stores-content').removeClass('hidden-xs hidden-sm');
        } else {
            $('#stores-content').addClass('hidden-xs hidden-sm');
        }
    });
    $('#more-info').click(function(){
        if ($('#more-info-content').is(':hidden')) {
            $('#more-info-content').removeClass('hidden-xs hidden-sm');
        } else {
            $('#more-info-content').addClass('hidden-xs hidden-sm');
        }
    });
    $('#follow-chrome').click(function(){
        if ($('#follow-chrome-content').is(':hidden')) {
            $('#follow-chrome-content').removeClass('hidden-xs hidden-sm');
        } else {
            $('#follow-chrome-content').addClass('hidden-xs hidden-sm');
        }
    });
    
    $(".glyphicon-arrow-up").click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });
});