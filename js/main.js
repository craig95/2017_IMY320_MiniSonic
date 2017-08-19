$(function(){
    $("#page-wrap").wrapInner("<table cellspacing='30'><tr>");
    $(".post").wrap("<td></td>");
    $(".post").width(Math.max(document.documentElement.clientWidth, window.innerWidth || 0)-100);
    $("body").mousewheel(function(event, delta) {
        this.scrollLeft -= (delta * 30);
        event.preventDefault();
    });
});

var lastScrollLeft = 0;
$(function(){
    $(window).scroll(function(event){
        var st = $(this).scrollLeft();
        console.log(st);
        console.log(lastScrollLeft);
        if (st > lastScrollLeft) {
            if ($('#character').attr("src") != "img/walking.gif") {
                $('#character').attr("src", "img/walking.gif");
            }
            clearTimeout( $.data( this, "scrollCheck" ) );
            $.data( this, "scrollCheck", setTimeout(function() {
                $('#character').attr("src", "img/standing.gif");
            }, 200) );
        } else {
            if ($('#character').attr("src") != "img/walking_back.gif") {
                $('#character').attr("src", "img/walking_back.gif");
            }
            clearTimeout( $.data( this, "scrollCheck" ) );
            $.data( this, "scrollCheck", setTimeout(function() {
                $('#character').attr("src", "img/standing_back.gif");
            }, 200) );
        }
        lastScrollLeft = st;
    });
});