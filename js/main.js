var lastScrollLeft = 0;
$(window).scroll(function(event){
    var st = $(this).scrollLeft();
    if (st > lastScrollLeft) {
        if ($('#character').css("background-image") != 'url("img/walking.gif")') {
            $('#character').css("background-image", 'url("img/walking.gif")');
        }
        clearTimeout($.data(this, "scrollCheck"));
        $.data(this, "scrollCheck", setTimeout(function () {
            $('#character').css("background-image", 'url("img/standing.png")');
        }, 200));
    } else {
        if ($('#character').css("background-image") != 'url("../img/walking_back.gif")') {
            $('#character').css("background-image", 'url("img/walking_back.gif")');
        }
        clearTimeout($.data(this, "scrollCheck"));
        $.data(this, "scrollCheck", setTimeout(function () {
            $('#character').css("background-image", 'url("img/standing_back.png")');
        }, 100));
    }
    lastScrollLeft = st;
});

setTimeout(function island1() {
    $('#island-1').animate({
        'background-position-y': '42%'
    }, 2000, 'linear');
    $('#island-1').animate({
        'background-position-y': '40%'
    }, 2000, 'linear');
    setTimeout(island1, Math.floor((Math.random() * 1000) + 1));
}, Math.floor((Math.random() * 1000) + 1));

setTimeout(function island2() {
    $('#island-2').animate({
        'background-position-y': '48%'
    }, 2000, 'linear');
    $('#island-2').animate({
        'background-position-y': '50%'
    }, 2000, 'linear');
    setTimeout(island2, Math.floor((Math.random() * 1000) + 1));
}, Math.floor((Math.random() * 1000) + 1));

setTimeout(function island3() {
    $('#island-3').animate({
        'background-position-y': '22%'
    }, 2000, 'linear');
    $('#island-3').animate({
        'background-position-y': '20%'
    }, 2000, 'linear');
    setTimeout(island3, Math.floor((Math.random() * 1000) + 1));
}, Math.floor((Math.random() * 1000) + 1));