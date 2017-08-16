$(function(){
    $("#page-wrap").wrapInner("<table cellspacing='30'><tr>");
    $(".post").wrap("<td></td>");
    $(".post").width(Math.max(document.documentElement.clientWidth, window.innerWidth || 0)-100);
    $("body").mousewheel(function(event, delta) {
        this.scrollLeft -= (delta * 30);
        event.preventDefault();
    });
});

$(function(){
    $(window).scroll(function(){
        if ($('#character').attr("src") != "img/walking.gif") {
            $('#character').attr("src", "img/walking.gif");
        }
        clearTimeout( $.data( this, "scrollCheck" ) );
        $.data( this, "scrollCheck", setTimeout(function() {
            $('#character').attr("src", "img/standing.gif");
        }, 50) );
    });
});