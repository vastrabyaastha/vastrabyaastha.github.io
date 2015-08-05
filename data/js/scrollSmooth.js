$(document).ready(function(){
    $(".anchorLink").click(function(e) {
        e.preventDefault();

        anchorScroll( $(this), $($(this).attr("href")), 1000 );
    });
});

function anchorScroll(this_obj, that_obj, base_speed) {
    var this_offset = this_obj.offset(),
        that_offset = that_obj.offset(),
        offset_diff = Math.abs(that_offset.top - this_offset.top),
        speed       = (offset_diff * base_speed) / 1000;
    if(speed<base_speed)
        {
            speed=base_speed;
        }

    $("html,body").animate({
        scrollTop: that_offset.top
    }, speed);
}
