console.log("it's printing");

$("#seeall").mouseover(function() {
        console.log("congrats, you entered it")
});


var found = _.where(stickers, {surface: "My Fridge"});

console.log(found);

for (var i = found.length - 1; i >= 0; i--) {
	var newsticker = document.createElement("img");
	newsticker.src = found[i].img;

	var first = document.getElementById("1");
	first.appendChild(newsticker);
}

