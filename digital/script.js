function ScrollToBottom() {
	$('#fading').animate({scrollTop: $('#fading').get(0).scrollHeight}, 1000);
};

var target = $('#fading');
var targetHeight = target.outerHeight();

$(document).scroll(function(e){
	console.log(targetHeight);
	console.log(window);
    var scrollPercent = (targetHeight - window.scrollY) / targetHeight;
    if(scrollPercent >= 0.0){
    	// var newTarget = target.not($('#page'));
    	console.log(target.not($('#page')));
        target.css('opacity', (1.2 - scrollPercent));
    }
    ScrollToBottom();
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
    if(window.scrollY == 247977) {
		target2.fadeTo(9000, 0.2, function() {
		});
    }
});

