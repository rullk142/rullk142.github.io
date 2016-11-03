$("body").css("background-color", "pink");

for (var dots = 0; dots < 100; dots++) {
    $(".wrapper").append("<div class='circle'></div>")
}

var counter = 1;
var cats = ["img/cat1.png", "img/cat2.jpeg", "img/cat3.jpeg"];
$("window").resize(function() {
    $(".circle").each(function() {
            console.log(counter);
        $(this).html(counter);
        $(this).css("opacity", (counter/100));
        $(this).css("height", (counter+100));
        $(this).css("width", (counter+100));
        $(this).css("font-size", (counter));
            $(this).css("line-height", ("100" + counter + "px"));
        $(this).css("transform", "rotate("+ (counter/100)*360 + "deg)");
    // var winWidth = $(window).width();
    // var winHeight = $(window).height();
    // var newTop = Math.floor(Math.random()*winHeight);
    // var newLeft = Math.floor(Math.random()*winWidth);
    
        $(this).css("top", Math.floor(Math.random()*$(window).height()));
        $(this).css("left", Math.floor(Math.random()*$(window).width()));
        counter++;
        //this code runs for each instance of circle
    });
}

//"this" approaching each circle individually before it moves on to the next
//math.floor is most common

$(".circle").click(function() {
    var newCat = cats[Math.floor(Math.random()*cats.length)]
    $("body").append('<img src="' + newCat + '"newCat++"')
})


// window resize occurs whenever window page changes

$(window).scroll(function()) {
    console.log($(window).scrollTop())
    $(this).css("opacity", (window/100));
}