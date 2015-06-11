var document;
var window;
var $;
var winheight=$(window).height();
var divHeight=(winheight-$("#background-img").height()-$("#top_nav_div").height())/3;
$(document).ready(function(){
    $('#home-page').css('max-height',winheight-17 + 'px');
    //for mobile site
    if($(window).width()<=768){
        $('#home-page').css('height',winheight-17 + 'px');
        $("#section-1,#section-2,#section-3,#section-sub-1,#section-sub-2,#section-sub-3").css("height",divHeight);
        $("#section-2").css("bottom",divHeight);
        $("#section-3").css("bottom","0");
    }
    $('#section-1,#section-2,#section-3,divider-div-1,divider-div-2').css('max-height',winheight-50 + 'px');
    $('#contact-page-div').css('height',winheight-61 + 'px');
    $('.cont-bottom-txt').css('bottom',-winheight+59+'px');
});
