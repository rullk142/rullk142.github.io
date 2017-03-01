var names = [
"sam",
"aditi",
"someoneelse",
"third person"
];



console.log(make_array(30));
console.log(make_array(5));


function make_array(howmany) {
	var numbers = [];
	
	for (i = 0; i < howmany; i++) {
		numbers.push(random_round(0,100));
	}

	return(numbers);
}

function get_a_name(whichone) {
	var result = names[random_round(0, names.length)];
	// console.log(result);
	return [result, "hello"];
	console.log("why")
}

function random_round(min, max) {
	var range = max - min;
	var offset = min;
	return Math.floor(Math.random()*range + offset);
	
}







// function bogus(whichone) {
// 	var result = namese[whichone];
// 	console.log(result);

// 	// bogus function doesn't actually give you back anything, just logs to the console piece of info
// }	