var document,
    $,
    window,
    winheight=$(window).height(),
    contactDiv =  $('#contact-page-div'),
    homeDiv = $('#home-page'),
    sections = $("#section-1,#section-2,#section-3"),
    sectionSub = $("#section-sub-1,#section-sub-2,#section-sub-3"),
    sec1 = $("#section-1"),
    sec2 = $("#section-2"),
    sec3 = $("#section-3"),
    links=$("#links"),
    linksTop=($('#image-text').position().top)+$('#image-text').outerHeight(true)+30,
    linksHeight=winheight-linksTop,
    divHeight=linksHeight/3;
function resp_d(){
    homeDiv.css('height',winheight-17 + 'px');//set the height of homepage
    contactDiv.css('height',winheight-61 + 'px');//set the height of contact page
    sec1.css("bottom","0");//setting the sections at bottom
    sec2.css("bottom","0");
    sec3.css("bottom","0");
    sections.css("height",winheight*0.459);
}
/*mobile page responsiveness*/
function resp_m(){
    if($(window).width()<=480){//check for mobile
        homeDiv.css('height',winheight-17 + 'px');//set the height of homediv
        console.log(linksTop+"-"+linksHeight);
        links.css("height",(linksHeight)+"px");
        sections.css("height",divHeight+"px");//set the height of all sections
        sectionSub.css("height",divHeight+"px");//set the height of all sub-sections
    }
}

$(document).ready(function(){
    resp_d();
    resp_m();
});
/*for windows resize*/
$(window).resize(function(){
        winheight = $(window).height();
        divHeight =(winheight-$("#background-img").height()-$("#top_nav_div").height())/3;
        //$('div').css("border","5px solid red");
        resp_d();
    });


