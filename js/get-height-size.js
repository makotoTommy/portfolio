var width = $("body").width();
var height = $('header').height();
if(width <= 480){
    //画面高さ取得
    var windowHeight = $(window).height();
    windowHeight = windowHeight - height;
    // $("main").css('height',windowHeight+'px');
    $("main").css('height',windowHeight+'px');
}