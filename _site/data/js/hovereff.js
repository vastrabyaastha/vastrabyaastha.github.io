$('document').ready(function(){
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
});