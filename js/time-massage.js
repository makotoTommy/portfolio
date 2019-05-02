
var msg = document.getElementById('msg');
var nowTime = new Date();
var hour = nowTime.getHours();
if(hour >= 6 && hour <= 10){
    msg.insertAdjacentHTML('afterbegin','おはようございます！');
}
else if(hour >= 11 && hour <= 17){
    msg.insertAdjacentHTML('afterbegin','こんにちは！');
}
// 時間帯3
else if(hour >= 18 && hour <= 23){
    msg.insertAdjacentHTML('afterbegin','こんばんは！');
}
// 時間帯4
else if(hour >= 0 && hour <= 2){
    msg.insertAdjacentHTML('afterbegin','こんばんは！遅くまで起きているんですね！');
}
else{
    msg.insertAdjacentHTML('afterbegin','こんな時間に起きて何をしているんですか？');
}
