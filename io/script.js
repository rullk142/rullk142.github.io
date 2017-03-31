var opacity = 0;
// var volume = 0.5;

var song = document.getElementById("song");
song.volume = 0.0;

window.addEventListener("keydown", function(e) {
    console.log(e);
	console.log(e.target.textLength);
    song.volume = song.volume + 0.01;

    if (e.key != "Backspace") {
    	opacity = opacity + 0.005;
    	document.body.style.background = "rgba(100%, 21.2%, 38.6%, " + opacity + ")";
    	document.body.children.bgclouds.style.opacity = opacity + 0.0025;
    	document.body.children.frontclouds.style.opacity = opacity + 0.05;
    	song.play();
    }
    if (e.target.textLength >= 40) {
    	document.body.children.frontclouds.style.opacity = opacity + 0.5;
    }
});

//change keyup to keydown when finished testing eventListener

setInterval(function(){
	opacity = opacity - 0.005;
	song.volume = song.volume - 0.02;
	document.body.style.background = "rgba(100%, 21.2%, 38.6%, " + opacity + ")"; 	
 	if ((document.body.children.bgclouds.style.opacity) >= 0.005) {
 		document.body.children.bgclouds.style.opacity = opacity - 0.005;
 	}
 	if ((document.body.children.frontclouds.style.opacity) >= 0.005) {
 		document.body.children.frontclouds.style.opacity = opacity - 0.005;
 	}
} ,1000)


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators

// TO DO
// change colors to blue
// add border gradient?
// string inputs for certain words?