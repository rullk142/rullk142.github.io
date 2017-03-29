<<<<<<< HEAD

var alphabet = "abcdefghijklmnopqrstuvwxyz";
var letter_array = [];

for (i = 0; i<26; i++) {
	letter_array.push(alphabet[i]);
}

letter_array.forEach(make_a_div);

function make_a_div(el, ix) {
	var newdiv = document.createElement("div");
	newdiv.classList.add("letter", "dim");

	var image = document.createElement("img");

	image.src = "images/asl_" + el + ".gif";


	newdiv.id = el;

	newdiv.appendChild(image);
	document.querySelector(".saranwrap").appendChild(newdiv);

	// console.log(image.src);
=======
var alphabet = "abcdefghijklmnopqrstuvwxyz"; // a string full of letters
var letter_array = []; // make an empty array to store the letters

for(i = 0; i < alphabet.length; i++) {
	// for every letter in the string...
	letter_array.push(alphabet[i]); // ...add that letter to the array
}



// once that array's set up, you can use the cleaner "forEach" syntax to iterate through the array, calling a function with each element as an argument:
letter_array.forEach(make_a_div);


// then you have to define that "make_a_div" function:
function make_a_div(element, index) {
	// element = the individual list item (gets passed in automatically by forEach)
	// index = numerical index of this element in the array (ditto ^)

	var newdiv = document.createElement("div"); // make an empty div tag
	newdiv.classList.add("letter"); // add the class "letter" to it

	var image = document.createElement("img"); // make an empty img tag
	image.src = "images/asl_" + element + ".gif"; // set the source dynamically

	newdiv.id = element; // set the id of this div to match the letter

	newdiv.appendChild(image); // stick the image in the div
	document.querySelector(".saranwrap").appendChild(newdiv); // add the div to the wrapper on the page
>>>>>>> origin/master
}



<<<<<<< HEAD
=======
// ok, now we need some interaction...
// this is the event listener from last class:
>>>>>>> origin/master
var textfield = document.querySelector("#enteredText");
var submitbutton = document.querySelector("#textSubmit");
submitbutton.addEventListener("click", do_stuff);
textfield.addEventListener("keydown", keyboard);

var letterboxes = document.querySelectorAll(".letter");

letterboxes.forEach(function(element, index) {
		// element.addEventListener("mousemove", log_x_and_y);
		element.addEventListener("mouseenter", undim);
		element.addEventListener("mouseleave", redim);
		element.addEventListener("click", figure_out_letter);
});

function figure_out_letter(event) {
	var source = event.target.src;
	var search = source.match(/asl_(.)/);
		//. = any character
	the_wanted_letter = search[1];

	console.log(event.target.parentElement.classList.add(the_wanted_letter));

	document.querySelector(".output p.clickedletters").textContent += the_wanted_letter;

	console.log(the_wanted_letter);
}

function undim(event) {
	var whichone = event.target;

	whichone.classList.remove("dim");
}

function redim(event) {
	var whichone = event.target;

	whichone.classList.add("dim");
}

function log_x_and_y(event) {
	var x = event.offsetX;
	var y = event.offsetY;

	document.querySelector(".output p.x").textContent = x;
	document.querySelector(".output p.x").setAttribute("style", "left:" + x + "px");

	document.querySelector(".output p.y").textContent = y;
	document.querySelector(".output p.y").setAttribute("style", "top:" + y + "px");
}

// for (var i = 0; i < letterboxes.length; i++) {
// 	console.log(letterboxes[i]);
// }

// var the_four_letters = [];

function keyboard(the_event) {
	console.log(the_event.key);

	var input_string = textfield.value;

	for (var i = 0; i < input_string.length; i++) {
		var found = document.querySelector("#" + input_string[i]);
		found.classList.remove("dim");
	}

	// var image_array = document.querySelectorAll(".letter img");

	// the_four_letters.push(the_event.key);

	// for (var i = 0; i < 4; i++) {
	// 	var the_file_i_want = "asl_" + the_four_letters[i] + ".gif";

	// 	console.log(image_array[i].classList);

	// 	if (typeof the_four_lettters[i] == "undefined") {
	// 		image_array[i].classList.add("hidden");
	// 	}

	// 	image_array[i].src = "images/" + the_file_i_want;
	// 	// console.log(the_file_i_want);
	// }
}

// how would you add a listener to each of the "letter" divs?




function do_stuff() {
	var input_string = textfield.value;
	console.log("text field: " + input_string);

	// just so you remember how to get text from a form input
}