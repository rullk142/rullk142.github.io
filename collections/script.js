var found = _.where(stickers);

console.log(found);

var holder = document.getElementById("holder");
var left = document.getElementById("left");
var right = document.getElementById("right");
//calls holder div from seeall.html

stickers.forEach(function(item) {
	console.log(item);
	var itembox = document.createElement("div");
		itembox.classList.add("sticker");

		holder.appendChild(itembox);

	var left = document.createElement("div");
		left.classList.add("left");
		itembox.appendChild(left);

	var right = document.createElement("div");
		right.classList.add("right");
		itembox.appendChild(right);

	var line = document.createElement("div");
		line.classList.add("line");
		holder.appendChild(line);

	var img = document.createElement("img");
		img.src = item.img;
		left.appendChild(img);

		var title = document.createElement("p");
			title.textContent = item.title;
			right.appendChild(title);
			title.style.fontFamily = "Helvetica Rounded Black";
			title.style.fontSize = "24px";
		var day = document.createElement("p");
			day.textContent = "Day " + item.daynumber;
			right.appendChild(day);
		var date = document.createElement("p");
			date.textContent = item.date + "/17";
			right.appendChild(date);
		var location = document.createElement("p");
			location.textContent = "Location: " + item.location;
			right.appendChild(location);
		var surface = document.createElement("p");
			surface.textContent = "Surface: " + item.surface;
			right.appendChild(surface);
		var tags = document.createElement("p");
			tags.textContent = "Tags: " + item.type + ", " + item.color;
			right.appendChild(tags);
	// adds all sticker info to holder div
});



	// var color = item.color;
	// console.log(color);
	// console.log(color.join(", "));


