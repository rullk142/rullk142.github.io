var opacity = 0;

window.addEventListener("keydown", function(e) {
    console.log(e);
    if (e.key != "Backspace") {
    	//var length = e.target.textLength/100;
    	opacity = opacity + 0.0025;
    	document.body.style.background = "rgba(100%, 21.2%, 38.6%, " + opacity + ")";
    	document.body.children.bgclouds.style.opacity = opacity + 0.05;
	} 
});

//change keyup to keydown when finished testing eventListener

setInterval(function(){
	opacity = opacity - 0.005;
		document.body.style.background = "rgba(100%, 21.2%, 38.6%, " + opacity + ")"; 	
 	if ((document.body.children.bgclouds.style.opacity) >= 0.0025) {
 		document.body.children.bgclouds.style.opacity = opacity - 0.003;
 	}
} ,1000)


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators

// TO DO
// change colors to blue
// add border gradient?
// string inputs for certain words?
// add music - Aurarian Dance - Nujabes