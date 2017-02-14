console.log("it's printing")


$("#start").click(function() {
        console.log("congrats, you clicked it")
        $("#begin").show();
        $("#yesthat").delay('slow').fadeIn();
        // document.getElementById("yesthat").style.transtionDelay = "5s"
        $("#gasp").delay('slow').fadeIn();
        $("#lost").delay('slow').fadeIn();
        // $("#gasp").show();
        // $("#lost").show();
});

