function collapseToggle(col){
    var opt = col.nextElementSibling.nextElementSibling;
            $(opt).animate({
                padding: "toggle",
                height: "toggle",
                opacity:"toggle"
            }, 1000, "linear");
}
