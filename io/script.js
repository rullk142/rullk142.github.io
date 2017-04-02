var opacity = 0;
// var volume = 0.5;

var song = document.getElementById("song");
song.volume = 0.0;

window.addEventListener("keydown", function(e) {
    console.log(e);
    if (song.volume <= 0.65) {
        song.volume = song.volume + 0.005;
    } 
    if (e.key != "Backspace" && opacity < 1.0) {
    	opacity = opacity + 0.01;
    	document.body.style.background = "rgba(0,128,255, " + opacity + ")";
    	document.body.children.bgclouds.style.opacity = opacity + 0.06;
    	document.body.children.frontclouds.style.opacity = opacity + 0.06;
    	song.play();
    }
        console.log(song.volume)
});

//change keyup to keydown when finished testing eventListener

setInterval(function(){
	opacity = opacity - 0.02;
    
    // if the current volume - 0.02 < 0
    //     set the volume to 0
    // otherwise

    //song.volume = Math.max(0, song.volume - 0.02);

    if (song.volume - 0.02 < 0) {
        song.volume = 0;
    } else {
        song.volume = song.volume - 0.015;
    }
	
    document.body.style.background = "rgba(0,128,255, " + opacity + ")"; 	
 	
    if ((document.body.children.bgclouds.style.opacity) - opacity - 0.1 < 0) {
    	document.body.children.bgclouds.style.opacity = 0;
    } else {
    	document.body.children.bgclouds.style.opacity = opacity - 0.01;
    }

 	// if ((document.body.children.bgclouds.style.opacity) >= 0.01) {
 	// 	document.body.children.bgclouds.style.opacity = opacity - 0.01;
 	// }
 	if ((document.body.children.frontclouds.style.opacity) >= 0.01) {
 		document.body.children.frontclouds.style.opacity = opacity - 0.01;
 	}
        if ((document.body.children.bgclouds.style.opacity) <= 0.1) {
            document.body.children.bgclouds.style.opacity = 0;
        }
        if ((document.body.children.frontclouds.style.opacity) <= 0.1) {
            document.body.children.frontclouds.style.opacity = 0;
        }
        // if (document.body.style.background <= "rgba(0,128,255, " + 0.1 + ")") {
        //     document.body.style.background == "rgba(0,128,255, 0)";
        // }
    console.log("The opacity of clouds is: " + document.body.children.frontclouds.style.opacity);
    console.log("The volume is: " + song.volume);
} ,2000)



// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators

// TO DO
// How to make volume not go over half
// Negative number issue