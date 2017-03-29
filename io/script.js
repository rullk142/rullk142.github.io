var opacity = 0;

window.addEventListener("keydown", function(e) {
    console.log(e);
    if (e.key != "Backspace") {
    	//var length = e.target.textLength/100;
    	opacity = opacity + 0.01;
    	document.body.style.background = "rgba(100%, 21.2%, 38.6%, " + opacity + ")";
    	document.body.children.bgclouds.style.opacity = opacity + 0.2;
	} 
// increase opacity of background color when keys are pressed
// increase opacity of clouds when keys are pressed
});

//Is there an event listener for time? After a certain amount of time a user does
//	not interact, background opacity returns to 0 and clouds disappear?

setInterval(function(){
	opacity = opacity - 0.01;
 	document.body.style.background = "rgba(100%, 21.2%, 38.6%, " + opacity + ")";
 	document.body.children.bgclouds.style.opacity = opacity - 0.01;
 	if (document.body.children.bgclouds.style.opacity == 0) {
 		clearInterval();
 	}
} ,1000)

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators