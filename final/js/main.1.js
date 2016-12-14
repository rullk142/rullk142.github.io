console.log("this should be working");

var pics = ["../css/img/thumbnail.jpg"];

$(".screen").each(function() {
        var newPic = pics[Math.floor(Math.random()*pics.length)];
        $("boxOne").append('<img src="' + newPic + '" class="pics">');
});