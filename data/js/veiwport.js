$(window).scroll(function(){
    withinviewport.defaults.top = -500;
    withinviewport.defaults.sides = 'top';
       $(".main-page").each(function(){
           var id=$(this).data("tag");
           $("#"+id).removeClass("focused");
       })
    $(".main-page").withinviewporttop().first().each(function(){
      var id=$(this).data("tag");
        $("#"+id).addClass("focused");
    });
});