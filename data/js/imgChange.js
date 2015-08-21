function imgChangeColor(div){
    var img=div.children[0],
        link=$(img).prop("src"),
        name=$(img).data("name");
    link=link.replace(name,name+"-o");
    $(img).prop("src",link);
}
function imgChangeSketch(div){
    var img=div.children[0],
        link=$(img).prop("src"),
        name=$(img).data("name");
    link=link.replace(name+"-o",name);
    $(img).prop("src",link);
}
