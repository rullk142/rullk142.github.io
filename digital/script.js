var target = $('#fading');
var targetHeight = target.outerHeight();

$(document).scroll(function(e){
	console.log(targetHeight);
	console.log(window);
    var scrollPercent = (targetHeight - window.scrollY) / targetHeight;
    if(scrollPercent >= 0.0){
    	// var newTarget = target.not($('#page'));
    	console.log(target.not($('#page')));
        target.css('opacity', (1 - scrollPercent));
    }
    // if (window.scrollY <= 220000) {
    // 	target.css('opacity', ((1 + scrollPercent)*.3));
    // }
});