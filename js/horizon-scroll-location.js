$(window).load(function() {
    var myTarget = $(".current");
    var myIndex = $(".scroll_lst .scroll_item").index(myTarget);
    
    //  表示画面がPCかTBかSPかチェック
    var width = $("body").width();
    // var display = 0;
    var scrollvalue = 0 ;
    if(width <= 480){
        // SP
        scrollvalue = myIndex * 180;

    }else if(width >= 481 && width <= 1023){
        // TB
        scrollvalue = myIndex * 190;
    }
    else if(width >= 1024){
        // PC
        switch( myIndex ){
            case 0:
            case 1:
            case 2:
                scrollvalue = 0;
                break;
            case 3:
                scrollvalue = 300;
                break;
            case 4:
                scrollvalue = 510;
                break;
            case 5:
                scrollvalue = 720;
                break;
            case 6:
                scrollvalue = 930;
                break;
            case 7:
                scrollvalue = 1140;
                break;
            case 8:
                scrollvalue = 1350;
                break;
            case 9:
            case 10:
            case 11:
                scrollvalue = 1600;
                break;
            default:
                break;
        }
    }

    $('.scroll_lst').scrollLeft(scrollvalue);
});