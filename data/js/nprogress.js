$(document).ready(function(){
    var status=null;
    NProgress.configure({ showSpinner: false });
    NProgress.start();
    $(window).load(function(){
        NProgress.done();
    });
});
