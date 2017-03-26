window.addEventListener("keydown", function(e) {
    console.log(e);
    
    var length = e.target.textLength/100;
    document.body.style.background = "rgba(100%, 1.2%, 24.3%, " + length + ")";
// increase opacity of background color when keys are pressed
// increase opacity of clouds when keys are pressed
});