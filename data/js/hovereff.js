$('document').ready(function(){
    $("#section-1").hover(function(){
        $("#section-2,#section-3").css("background-color","rgba(255,255,255,0.55)");
        $("#section-1 .text-details").fadeIn();
        $("#section-sub-1").css("height","200px");
    },function(){
        $("#section-2,#section-3").css("background-color","rgba(0,0,0,0)");
        $("#section-1 .text-details").fadeOut();
        $("#section-sub-1").css("height","59px");
    });
    $("#section-2").hover(function(){
        $("#section-1,#section-3").css("background-color","rgba(255,255,255,0.55)");
        $("#section-2 .text-details").fadeIn();
        $("#section-sub-2").css("height","200px");
    },function(){
        $("#section-1,#section-3").css("background-color","rgba(0,0,0,0)");
        $("#section-2 .text-details").fadeOut();
        $("#section-sub-2").css("height","59px");
    });
    $("#section-3").hover(function(){
        $("#section-2,#section-1").css("background-color","rgba(255,255,255,0.55)");
        $("#section-3 .text-details").fadeIn();
        $("#section-sub-3").css("height","200px");
        $('.courtesy-div').css("bottom","34%")
    },function(){
        $("#section-2,#section-1").css("background-color","rgba(0,0,0,0)");
        $("#section-3 .text-details").fadeOut();
        $("#section-sub-3").css("height","59px");
        $('.courtesy-div').css("bottom","10%")
    });
});