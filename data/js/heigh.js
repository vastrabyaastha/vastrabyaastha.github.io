winheight=$(window).height();
$(document).ready(function(){
    $('#home-page').css('max-height',winheight-17 + 'px');
    $('#section-1,#section-2,#section-3,divider-div-1,divider-div-2').css('max-height',winheight-50 + 'px');
    $('#contact-page-div').css('height',winheight-61 + 'px');
    $('.cont-bottom-txt').css('bottom',-winheight+59+'px');
});