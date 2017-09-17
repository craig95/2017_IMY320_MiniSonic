var lastScrollLeft = 0;
$(window).scroll(function(event){
    var st = $(this).scrollLeft();
    if (st > lastScrollLeft) {
        console.log($('#character').css("background-image"));
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
