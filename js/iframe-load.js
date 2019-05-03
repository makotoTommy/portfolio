/**
 * スマホでの閲覧しているかどうかのチェック
 * 
 * @author 富谷誠
 * 
 * @date 2019/5/2
 */
var width = $("body").width();
if(width >= 980){
    var video = document.getElementsByClassName('video-wrap');
    $(video).append('<video id="bg-video" src="./mp4/bg-movie3.mp4" autoplay loop muted ></video>');
}