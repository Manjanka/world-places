$(".main-columns").hover(function() {
    $(this).children("h2, p").fadeIn(800);
    }, function(){
    $(this).children("h2, p").hide("fast");
});

new WOW().init();



