var document,
    window,
    $,
    winheight=$(window).height(),
    divider = $('#divider-div-1,#divider-div-2'),
    divHeight=(winheight-$("#background-img").height()-$("#top_nav_div").height())/3,
    contactDiv =  $('#contact-page-div'),
    homeDiv = $('#home-page'),
    sections = $("#section-1,#section-2,#section-3"),
    sectionSub = $("#section-sub-1,#section-sub-2,#section-sub-3"),
    sec1 = $("#section-1"),
    sec2 = $("#section-2"),
    sec3 = $("#section-3");
function setVars(){
    homeDiv.css('height',winheight-17 + 'px');//set the height of homepage
    divider.css('height',winheight-50 + 'px');//set the height of divider
    contactDiv.css('height',winheight-61 + 'px');//set the height of contact page
    sec1.css("bottom","0");//setting the sections at bottom
    sec2.css("bottom","0");
    sec3.css("bottom","0");
    sections.css("height",winheight*0.459);
    /*mobile page responsiveness*/
    if($(window).width()<=480){
        homeDiv.css('height',winheight-17 + 'px');//set the height of homediv
        sections.css("height",divHeight);//set the height of all sections
        sectionSub.css("height",divHeight);//set the height of all sections
        sec1.css("bottom",(2*divHeight)+1);//set the position of all divs from ground
        sec2.css("bottom",divHeight);
        sec3.css("bottom","0");
    }
}
$(document).ready(setVars());
    $(window).resize(function(){
        winheight = $(window).height();
        divHeight =(winheight-$("#background-img").height()-$("#top_nav_div").height())/3;
        //$('div').css("border","5px solid red");
        setVars();
    });

        
