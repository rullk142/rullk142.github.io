var opacity = 0;
// var volume = 0.5;

var song = document.getElementById("song");
song.volume = 0.0;

window.addEventListener("keydown", function(e) {
    console.log(e);
    song.volume = song.volume + 0.005;

    if (e.key != "Backspace" && opacity <= 1.0) {
    	opacity = opacity + 0.01;
    	document.body.style.background = "rgba(0,128,255, " + opacity + ")";
    	document.body.children.bgclouds.style.opacity = opacity + 0.06;
    	document.body.children.frontclouds.style.opacity = opacity + 0.06;
    	song.play();
    }
    // if (e.target.textLength >= 40) {
    // 	document.body.children.frontclouds.style.opacity = opacity + 0.5;
    // }
        console.log(song.volume)
});

//change keyup to keydown when finished testing eventListener

setInterval(function(){
	opacity = opacity - 0.07;
	song.volume = song.volume - 0.01;
	document.body.style.background = "rgba(0,128,255, " + opacity + ")"; 	
 	if ((document.body.children.bgclouds.style.opacity) >= 0.01) {
 		document.body.children.bgclouds.style.opacity = opacity - 0.01;
 	}
 	if ((document.body.children.frontclouds.style.opacity) >= 0.01) {
 		document.body.children.frontclouds.style.opacity = opacity - 0.01;
 	}
 	if (song.volume <= 0.001) {
    	song.volume = 0;
    }
 	console.log(song.volume);
} ,2000)


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators

// TO DO
// change colors to blue
// add border gradient?
// string inputs for certain words?