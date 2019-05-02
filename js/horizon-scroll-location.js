$(window).load(function() {
    var myTarget = $(".current");
    var myIndex = $(".scroll_lst .scroll_item").index(myTarget);
    var scrollvalue = 0 ;
    switch( myIndex ){
        case 0:
        case 1:
        case 2:
            scrollvalue = 0;
            break;
        case 3:
            scrollvalue = 190;
            break;
        case 4:
            scrollvalue = 400;
            break;
        case 5:
            scrollvalue = 620;
            break;
        case 6:
            scrollvalue = 840;
            break;
        case 7:
            scrollvalue = 1060;
            break;
        case 8:
            scrollvalue = 1280;
            break;
        case 9:
        case 10:
        case 11:
            scrollvalue = 1500;
            break;
        default:
            break;
    }
    $('.scroll_lst').scrollLeft(scrollvalue);
});