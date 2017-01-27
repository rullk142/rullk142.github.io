$("body").css("background-color","white");

for (var dots = 0; dots < 100; dots++) {
    $(".wrapper").append("<div class='triangle'></div>");
}

for (var dots2 = 0; dots2 < 100; dots2++) {
    $(".wrapper").append("<div class='triangle2'></div>");
}

var counter = 1;
var pics = ["img/blm.png","img/disability.png","img/immigration.png","img/lgbt.png","img/muslims.png"];

$(".triangle").each(function() {
    console.log(counter);
    $(this).css("opacity",(counter/100));
    $(this).css("transform","translate(-50%, -50%) rotate("+ (counter/100)*360 + "deg)");
    var winWidth = $(window).width();
    var winHeight = $(window).height();
    var newTop = Math.floor(Math.random()*winHeight);
    var newLeft = Math.floor(Math.random()*winWidth);
    $(this).css("top", newTop);
    $(this).css("left", newLeft);
    counter++;
    
    //this code runs for each instance of triangle
    
});

var counter2 = 1;

$(".triangle2").each(function() {
    console.log(counter2);
    $(this).css("opacity",(counter2/100));
    $(this).css("transform","translate(-50%, -50%) rotate("+ (counter2/100)*360 + "deg)");
    var winWidth = $(window).width();
    var winHeight = $(window).height();
    var newTop = Math.floor(Math.random()*winHeight);
    var newLeft = Math.floor(Math.random()*winWidth);
    $(this).css("top", newTop);
    $(this).css("left", newLeft);
    counter2++;
    
    //this code runs for each instance of triangle2
    
});

var fist = false;

$(".fist").click(function() {
    if (fist == false) {
        var newPic = pics[Math.floor(Math.random()*pics.length)];
        $("body").append('<img src="' + newPic + '" class="pics">');
        fist = true
        $(".triangle").each(function() {
    console.log(counter);
    $(this).css("opacity",(counter/100));
    $(this).css("transform","translate(-50%, -50%) rotate("+ (counter/100)*360 + "deg)");
    var winWidth = $(window).width();
    var winHeight = $(window).height();
    var newTop = Math.floor(Math.random()*winHeight);
    var newLeft = Math.floor(Math.random()*winWidth);
    $(this).css("top", newTop);
    $(this).css("left", newLeft);
    counter++;
    
    //this code runs for each instance of triangle
    
});

var counter2 = 1;

$(".triangle2").each(function() {
    console.log(counter2);
    $(this).css("opacity",(counter2/100));
    $(this).css("transform","translate(-50%, -50%) rotate("+ (counter2/100)*360 + "deg)");
    var winWidth = $(window).width();
    var winHeight = $(window).height();
    var newTop = Math.floor(Math.random()*winHeight);
    var newLeft = Math.floor(Math.random()*winWidth);
    $(this).css("top", newTop);
    $(this).css("left", newLeft);
    counter2++;
    
    //this code runs for each instance of triangle2
    
});
    } else {
        var newPic = pics[Math.floor(Math.random()*pics.length)];
        $("body").append('<img src="' + newPic + '" class="pics">');
        $(".triangle").each(function() {
    console.log(counter);
    $(this).css("opacity",(counter/100));
    $(this).css("transform","translate(-50%, -50%) rotate("+ (counter/100)*360 + "deg)");
    var winWidth = $(window).width();
    var winHeight = $(window).height();
    var newTop = Math.floor(Math.random()*winHeight);
    var newLeft = Math.floor(Math.random()*winWidth);
    $(this).css("top", newTop);
    $(this).css("left", newLeft);
    counter++;
    
    //this code runs for each instance of triangle
    
});

var counter2 = 1;

$(".triangle2").each(function() {
    console.log(counter2);
    $(this).css("opacity",(counter2/100));
    $(this).css("transform","translate(-50%, -50%) rotate("+ (counter2/100)*360 + "deg)");
    var winWidth = $(window).width();
    var winHeight = $(window).height();
    var newTop = Math.floor(Math.random()*winHeight);
    var newLeft = Math.floor(Math.random()*winWidth);
    $(this).css("top", newTop);
    $(this).css("left", newLeft);
    counter2++;
    
    //this code runs for each instance of triangle2
    
});
        fist = false
    }
});

$(window).resize(function() {
    $(".triangle").each(function() {
        var winWidth = $(window).width();
        var winHeight = $(window).height();
        var newTop = Math.floor(Math.random()*winHeight);
        var newLeft = Math.floor(Math.random()*winWidth);
        $(this).css("top", newTop);
        $(this).css("left", newLeft);
    });
});