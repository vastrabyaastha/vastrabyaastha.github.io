var document;
var window;
var $;
var winheight=$(window).height();
var divHeight=(winheight-$("#background-img").height()-$("#top_nav_div").height())/3;
$(document).ready(function(){
    $('#home-page').css('max-height',winheight-17 + 'px');
    //for mobile site
    $('#divider-div-1,#divider-div-2').css('height',winheight-50 + 'px');
    $('#contact-page-div').css('height',winheight-61 + 'px');
    if($(window).width()<=480){
        $('#home-page').css('height',winheight-17 + 'px');
        $("#section-1,#section-2,#section-3,#section-sub-1,#section-sub-2,#section-sub-3").css("height",divHeight);
        $("#section-1").css("bottom",(2*divHeight)+1);
        $("#section-2").css("bottom",divHeight);
        $("#section-3").css("bottom","0");
    }
    $(window).resize(function(){
        var winheightr = $(window).height();
        var divHeightr =(winheightr-$("#background-img").height()-$("#top_nav_div").height())/3;
        //$('div').css("border","5px solid red");
        $('#home-page').css('max-height', winheightr-17 + 'px');
        //for mobile site
        $('#divider-div-1,#divider-div-2').css('height',winheightr-50 + 'px');
        $('#contact-page-div').css('height',(winheightr-61) + 'px');
        if($(window).width()<=480){
            $('#home-page').css('height',winheight-17 + 'px');
            $("#section-1,#section-2,#section-3,#section-sub-1,#section-sub-2,#section-sub-3").css("height",divHeightr);
            $("#section-1").css("bottom",(2*divHeightr)+1);
            $("#section-2").css("bottom",divHeightr);
            $("#section-3").css("bottom","0");
        }
    });
});
