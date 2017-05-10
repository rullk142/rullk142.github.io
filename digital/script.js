// function Scrolldown() {
//      window.scroll(0,300); 
//      console.log("Scrolling?");
// }



$(document).ready(function () {
    // Handler for .ready() called.
    $('html, body').animate({
        scrollTop: $('#fadeOut').offset().top
    }, 35000);
    $('html, body').animate({
        scrollTop: $('html').prop("scrollHeight")
    }, 25000);
});

var target = $('#fading');
var targetHeight = target.outerHeight();

$(document).scroll(function(e){
	console.log(targetHeight);
	console.log(window);
    var scrollPercent = (targetHeight - window.scrollY) / targetHeight;
    if(scrollPercent >= 0.0){
        target.css('opacity', (1.2 - scrollPercent));
    }
    // if (window.scrollY <= 220000) {
    // 	target.css('opacity', ((1 + scrollPercent)*.3));
    // }
});

var target2 = $('#fadeOut');

var target2Height = (targetHeight - target2.outerHeight());

$(document).scroll(function(e){
    var scrollPercent = 1.21 + ((target2Height - window.scrollY) / target2Height);
    if(scrollPercent >= 0){
        target2.css('opacity', scrollPercent);
    }
});

$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() == $(document).height()) {
       target2.fadeTo(9000, 0.2, function() {
		});
   }
});

