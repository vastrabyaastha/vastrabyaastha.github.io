function collapseToggle(col){
    var opt = col.nextElementSibling.nextElementSibling;
            $(opt).animate({
                "padding-top":"toggle",
                "padding-bottom":"toggle",
                height: "toggle",
                opacity:"toggle"
            }, 2000, "linear");
}
