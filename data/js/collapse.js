$(document).ready(function(){
    if($(window).width()<=480){
        //set outer elements <a> to nil
        var a1,a2,a3;
        //for freidae
        a1=$("#freidae-a-out").prop("href");
        $("#section-1").unwrap();
        //$("#section-h-1").changeElementType("button");

        $("#section-t-1").wrap("<a></a>");
        $("#section-t-1").parent().prop("href",a1);
        //for nukkad naatak
        a2=$("#nukkad-a-out").prop("href");
        $("#section-2").unwrap();
        $("#section-t-2").wrap("<a></a>");
        $("#section-t-2").parent().prop("href",a2);
        //for daku
        a3=$("#daku-a-out").prop("href");
        $("#section-3").unwrap();
        $("#section-t-3").wrap("<a></a>");
        $("#section-t-3").parent().prop("href",a3);
        //first element
        $("#section-sub-1").click(function(){
            $("#section-t-1").collapse('toggle');
            $("#section-t-2").collapse('hide');
            $("#section-t-3").collapse('hide');
        });
        //second element
        $("#section-sub-2").click(function(){
            $("#section-t-2").collapse('toggle');
            $("#section-t-1").collapse('hide');
            $("#section-t-3").collapse('hide');
        });
        //third element
        $("#section-sub-3").click(function(){
            $("#section-t-3").collapse('toggle');
            $("#section-t-1").collapse('hide');
            $("#section-t-2").collapse('hide');
        });
    };
});
