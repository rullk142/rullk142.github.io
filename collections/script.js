// $("#seeall").mouseover(function() {
//         console.log("congrats, you entered it")
// });

var found = _.where(stickers);

console.log(found);

var holder = document.getElementById("holder");
var left = document.getElementById("left");
var right = document.getElementById("right");
//calls holder div from seeall.html

stickers.forEach(function(item) {
	console.log(item);
	for (var i = stickers.length - 1; i <= 21; i++) {
		console.log(stickers[i]);

		var itembox = document.createElement("div");
			itembox.classList.add("sticker");
			holder.appendChild(itembox);

		var sticker = document.querySelector(".sticker");

		var left = document.createElement("div");
			left.classList.add("left");
			sticker.appendChild(left);

		var right = document.createElement("div");
			right.classList.add("right");
			sticker.appendChild(right);
	// }

	// stickers.forEach(function() {
		var img = document.createElement("img");
			img.src = item.img;
			left.appendChild(img);

			var title = document.createElement("h2");
				title.textContent = item.title;
				right.appendChild(title);
			var date = document.createElement("h3");
				date.textContent = item.date + "/17";
				right.appendChild(date);
			var day = document.createElement("p");
				day.textContent = "Day " + item.daynumber;
				right.appendChild(day);
			var location = document.createElement("p");
				location.textContent = "Location: " + item.location;
				right.appendChild(location);
			var surface = document.createElement("p");
				surface.textContent = "Surface: " + item.surface;
				right.appendChild(surface);
			var tags = document.createElement("p");
				tags.textContent = "Tags: " + item.type + ", " + item.color;
				right.appendChild(tags);
		}
		// adds all sticker info to holder div
	// });
});



	// var color = item.color;
	// console.log(color);
	// console.log(color.join(", "));



	// 	var title = document.createElement("h4");
	// 		title.textContent = found[i].title; 
	// 		itembox.appendChild(title);
	// 	var date = document.createElement("h5");
	// 		itembox.textContent = found[i].date;
	// 		itembox.appendChild(date);

