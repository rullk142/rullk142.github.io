$("body").css("background-color","#000080");

for (var dots = 0; dots < 50; dots++) {
    $(".container2").append("<div class='starfive'></div>");
}

var counter = 1;
var pics = ["img/blm.png","img/disability.png","img/immigration.png","img/lgbt.png","img/muslims.png"];

// $(".triangle").each(function() {
//     console.log(counter);
//     // $(this).css("opacity",(counter/100));
//     // $(this).css("transform","translate(-50%, -50%) rotate("+ (counter/100)*360 + "deg)");
//     // var winWidth = $(window).width();
//     // var winHeight = $(window).height();
//     // var newTop = Math.floor(Math.random()*winHeight);
//     // var newLeft = Math.floor(Math.random()*winWidth);
//     $(this).css("top", newTop);
//     $(this).css("left", newLeft);
//     counter++;
//     //this code runs for each instance of triangle
// });

// var counter2 = 1;
// $(".triangle2").each(function() {
//     console.log(counter2);
//     // $(this).css("opacity",(counter2/100));
//     // $(this).css("transform","translate(0, -100%) rotate("+ (counter2/100)*360 + "deg)");
//     // var winWidth = $(window).width();
//     // var winHeight = $(window).height();
//     // var newTop = Math.floor(Math.random()*winHeight);
//     // var newLeft = Math.floor(Math.random()*winWidth);
//     // $(this).css("top", newTop);
//     // $(this).css("left", newLeft);
    
//     counter2++;
//     //this code runs for each instance of triangle2
// });

// var fist = false;

// $(".fist").click(function() {
//     if (fist == false) {
//         var newPic = pics[Math.floor(Math.random()*pics.length)];
//         $("body").append('<img src="' + newPic + '" class="pics">');
//         fist = true;
//         $(".triangle").each(function() {
//             console.log(counter);
//             // $(this).css("opacity",(counter/100));
//             // $(this).css("transform","translate(-50%, -50%) rotate("+ (counter/100)*360 + "deg)");
//             var winWidth = $(window).width();
//             var winHeight = $(window).height();
//             var newTop = Math.floor(Math.random()*winHeight);
//             var newLeft = Math.floor(Math.random()*winWidth);
//             $(this).css("top", newTop);
//             $(this).css("left", newLeft);
//             counter++;
//             //this code runs for each instance of triangle
//         });
//         var counter2 = 1;
//         $(".triangle2").each(function() {
//             console.log(counter2);
//             // $(this).css("opacity",(counter2/100));
//             // $(this).css("transform","translate(-50%, -50%) rotate("+ (counter2/100)*360 + "deg)");
//             var winWidth = $(window).width();
//             var winHeight = $(window).height();
//             var newTop = Math.floor(Math.random()*winHeight);
//             var newLeft = Math.floor(Math.random()*winWidth);
//             $(this).css("top", newTop);
//             $(this).css("left", newLeft);
//             counter2++;
//             //this code runs for each instance of triangle2
//         });
//     } else {
//         pics[Math.floor(Math.random()*pics.length)];
//         $("body").append('<img src="' + newPic + '" class="pics">');
//         $(".triangle").each(function() {
//             console.log(counter);
//             // $(this).css("opacity",(counter/100));
//             // $(this).css("transform","translate(-50%, -50%) rotate("+ (counter/100)*360 + "deg)");
//             var winWidth = $(window).width();
//             var winHeight = $(window).height();
//             var newTop = Math.floor(Math.random()*winHeight);
//             var newLeft = Math.floor(Math.random()*winWidth);
//             $(this).css("top", newTop);
//             $(this).css("left", newLeft);
//             counter++;
//             //this code runs for each instance of triangle
//     });
//     $(".triangle2").each(function() {
//         console.log(counter2);
//         // $(this).css("opacity",(counter2/100));
//         // $(this).css("transform","translate(-50%, -50%) rotate("+ (counter2/100)*360 + "deg)");
//         var winWidth = $(window).width();
//         var winHeight = $(window).height();
//         var newTop = Math.floor(Math.random()*winHeight);
//         var newLeft = Math.floor(Math.random()*winWidth);
//         $(this).css("top", newTop);
//         $(this).css("left", newLeft);
//         counter2++;
//         //this code runs for each instance of triangle2
//     });
//         fist = false;
//     }
// });

// $(window).resize(function() {
//     $(".triangle").each(function() {
//         var winWidth = $(window).width();
//         var winHeight = $(window).height();
//         var newTop = Math.floor(Math.random()*winHeight);
//         var newLeft = Math.floor(Math.random()*winWidth);
//         $(this).css("top", newTop);
//         $(this).css("left", newLeft);
//     });
// });

$(window).mousemove(function(e) {
    console.log(1/(100/(e.clientX/20)));
    // console.log(e.clientY);
    $(".starfire").css("opacity",1/(100/(e.clientX/20)));
})