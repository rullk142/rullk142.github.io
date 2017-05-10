var sortMode = "title";
var filterMode = "All";

var sortSelect = document.querySelector("#noun #sort");

sortSelect.addEventListener("change", function(e) {
		console.log(sortSelect.value);
	if (sortSelect.value == "Name") {
		sortMode = "title";
	} else if (sortSelect.value == "Day") {
		sortMode = "daynumber";
	} else if (sortSelect.value == "Date") {
		sortMode = "date";
	} else if (sortSelect.value == "Location") {
		sortMode = "location";
	} else if (sortSelect.value == "Surface")
		sortMode = "surface";
		console.log(sortMode);
	update();
	// console.log(sortSelect.value);
});

var filterSelect = document.getElementById("filter");

filterSelect.addEventListener("change", function(e) {
	filterMode = filterSelect.value;
	console.log(filterMode);
	update();
});

function update() {
	var types = _.uniq(_.flatten(_(stickers).pluck("type")));
		// console.log(types);

	console.log(sortMode, filterMode);
	
	if (filterMode == "All") {
		filtered = stickers;
	}

	else {
		filterMode = filterMode.toLowerCase();
		console.log("filtering by: " + filterMode);

		if (_(types).contains(filterMode)) {
			var filtered = _.filter(stickers, function(s) {
				return s.type.includes(filterMode);
			});
		}
		else {
			var filtered = _.filter(stickers, function(s) {
				return s.color.includes(filterMode);
			});	
		}
		
	}
	
	// console.log(filtered);

	var sorted = _.sortBy(filtered, sortMode);
	// console.log(sorted);

	var holder = document.getElementById("holder");
	holder.innerHTML = "";
	var left = document.getElementById("left");
	var right = document.getElementById("right");
	//calls holder div from seeall.html

	sorted.forEach(function(item) {
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
			var typeString = Array.prototype.join.call(item.type, ", ");
			var colorString = Array.prototype.join.call(item.color, ", ");
			// console.log(typeString);
			// console.log(colorString);
			tags.textContent = "Tags: " + typeString + ", " + colorString;
			right.appendChild(tags);
		// adds all sticker info to holder div
	});
}

window.addEventListener("load", function() {
	update();
})



	// var color = item.color;
	// console.log(color);
	// console.log(color.join(", "));


