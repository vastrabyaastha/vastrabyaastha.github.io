$('document').ready(function(){
    if($(window).width()>768){
        $("#section-1").hover(function(){
            $("#section-2,#section-3").addClass("hover-background-l");
            $("#section-1 .text-details").fadeIn();
            $("#section-sub-1").css("height","200px");
        },function(){
            $("#section-2,#section-3").removeClass("hover-background-l");
            $("#section-1 .text-details").fadeOut();
            $("#section-sub-1").css("height","59px");
        });
        $("#section-2").hover(function(){
            $("#section-1").addClass("hover-background-r");
            $("#section-3").addClass("hover-background-l");
            $("#section-2 .text-details").fadeIn();
            $("#section-sub-2").css("height","200px");
        },function(){
            $("#section-1").removeClass("hover-background-r");
            $("#section-3").removeClass("hover-background-l");
            $("#section-2 .text-details").fadeOut();
            $("#section-sub-2").css("height","59px");
        });
        $("#section-3").hover(function(){
            $("#section-2,#section-1").addClass("hover-background-r");
            $("#section-3 .text-details").fadeIn();
            $("#section-sub-3").css("height","200px");
        },function(){
            $("#section-2,#section-1").removeClass("hover-background-r");
            $("#section-3 .text-details").fadeOut();
            $("#section-sub-3").css("height","59px");
        });
    }
    /*if($(window).width()<=768){
        $("#section-1").hover(function(){
            $("#section-1").css("height","200px");
        },function(){
            $("#section-sub-1").css("height","102px");
            $("#section-1").css("height","102px");
        });
        $("#section-2").hover(function(){
            $("#section-2").css("height","200px");
        },function(){
            $("#section-sub-2").css("height","102px");
            $("#section-2").css("height","102px");
        });
        $("#section-3").hover(function(){
            $("#section-2,#section-1,#section-sub-2,#section-sub-1").css("height","93px");
            $("#section-3").css("height","211px");
            $("#section-sub-3").css("height","222px");
        },function(){
            $("#section-2,#section-1,#section-sub-2,#section-sub-1").css("height","102px");
            $("#section-sub-3").css("height","102px");
            $("#section-3").css("height","102px");
        });
    }*/
});
