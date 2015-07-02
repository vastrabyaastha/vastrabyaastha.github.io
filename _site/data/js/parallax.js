var parallax = $("#home-page"),
    speed = 0.125,
    yOffset = null,
    prd_sections = $("#section-sub-1,#section-sub-2,#section-sub-3"),
    setHeight = winheight*0.5937031484257871,
    winheight = $(window).height();
$(window).scroll(function(){
    yOffset = window.pageYOffset;
    parallax.css("background-position-y",(yOffset * speed) + "px");
    if(yOffset>setHeight){
       prd_sections.css("opacity", (1-(1.35*(yOffset/winheight))));
    } else{
        prd_sections.css("opacity","1");
    }
});