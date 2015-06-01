winheight=$(window).height()-17;
$(document).ready(function(){
    $('#home-page').css('max-height',winheight + 'px');
    $('#section-1,#section-2,#section-3').css('max-height',winheight-50 + 'px');
});