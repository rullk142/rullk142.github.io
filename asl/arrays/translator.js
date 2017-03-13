var textfield = document.querySelector("#enteredText");
var submitbutton = document.querySelector("#textSubmit");

submitbutton.addEventListener("click", report);

function report(e) {
    var word = textfield.value;

    var four_letters = [];

    for (var counter = 0; counter < 4; counter++) {
    	console.log(counter);
    	four_letters.push(word.charAt(counter));

        console.log(four_letters);
    }

    for (var i = 0; i < 4; i++) {
    	var filename = "asl_" + four_letters[i] + ".gif";
    	console.log(filename);
    }

//query selector for each one
//element source


    // four_letters.push(word.charAt(0));
    // four_letters.push(word.charAt(1));
    // four_letters.push(word.charAt(2));
    // four_letters.push(word.charAt(3));


    console.log(word); 
    console.log(word.charAt(0));
}


// function report(e) {
//     e.preventDefault();
//     var word = String(textfield.value);
//     console.log(word); 
// }



/*
get input
figure out what letters are
each letter, find corresponding picture
change each image into corresponding letter
output
*/  





// console.log(make_array(26));