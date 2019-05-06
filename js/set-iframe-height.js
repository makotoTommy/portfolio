var width = $("iframe").width();
//  widthに対する高さの設定
//  この数字はQuickTimeのvideoに最適な数字
var height = width * 0.62500368 ;
$("iframe").css('height',height+'px');