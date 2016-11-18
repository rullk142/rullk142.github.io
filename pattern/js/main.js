console.log("Hello")

$("body").css("background-color","white")

var hasClicked = false;

$("body").click(function() {
    $("body").css("background-color","black")
    hasClicked = true;
    console.log("clicked")
})

for (var i = 0; i < 1000; i++) {
    // i is just a variable name
    console.log(i);
    $("body").append("<div class='go'></div>");
}

var counter = 0;

$(".go").each(function() {
    console.log(counter);
    console.log("found a div with class go");
    $(this).css("border-radius",counter/2 + "%");
    counter++;
});

$(window).mousemove(function(e) {
    console.log(e.clientX);
    console.log(e.clientY);
    $(".go").css("border-radius",e.clientX/20+"%");
})

$(".go").click(function() {
    console.log("you clicked it...");
    $(this).css("background-color","pink");
    $(this).html("Hello");
})

// your code should be as least repetitive as you can
// each = targeting every instance of target and is running the function
// this = refers to that particular instance that is being operated on as you move through the loop
    // EACH is running the loop
    // THIS refers to specific part of loop
    
// “When you deprive people of their right to live in dignity,
// to hope for a better future, to have control over their lives,
// when you deprive them of that choice, then you expect them
// to fight for these rights.” – Queen Rania Al Abdullah of Jordan