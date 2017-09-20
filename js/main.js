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


$(document).ready(function() {
    $('#island1-info').hide();
    $('#island2-info').hide();
    $('#island3-info').hide();

    $('div#island-1').hover(function () {
        $('#island1-info').fadeIn();
    }, function () {
        $('#island1-info').fadeOut();
    });

    $('div#island-2').hover(function () {
        $('#island2-info').fadeIn();
    }, function () {
        $('#island2-info').fadeOut();
    });

    $('div#island-3').hover(function () {
        $('#island3-info').fadeIn();
    }, function () {
        $('#island3-info').fadeOut();
    });
});