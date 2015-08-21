function imgChange(div){
    var label="/about_us/",
        img=div.children[0],
        val=$(img).prop("src"),
        offset=val.indexOf(label)+label.length;
}
