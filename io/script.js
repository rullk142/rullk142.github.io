window.addEventListener("keydown", function(e) {
    console.log(e);
    
    var length = e.target.textLength/100;
    document.body.style.background = "rgba(100%, 21.2%, 38.6%, " + length + ")";
// increase opacity of background color when keys are pressed
// increase opacity of clouds when keys are pressed
});

//Is there an event listener for time? After a certain amount of time a user does
//	not interact, background opacity returns to 0 and clouds disappear?