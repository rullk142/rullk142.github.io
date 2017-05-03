// $("#seeall").mouseover(function() {
//         console.log("congrats, you entered it")
// });

var found = _.where(stickers);

console.log(found);

var holder = document.getElementById("holder");
//calls holder div from seeall.html
var left = document.getElementById("left");
var right = document.getElementById("right");

stickers.forEach(function(item) {
	console.log(item);
	// for (var i = found.length - 1; i >= 0; i--) {
	// 	var title = found[i].title;
	// 	var date = found[i].date;

		var itembox = document.createElement("div");
			itembox.classList.add("profile");
			holder.appendChild(itembox);

			var pic = document.createElement("div");
				pic.classList.add("pic");
				left.appendTo(pic);

				var img = document.createElement("img");
				img.src = item.img;
				left.appendChild(img);
			
			var deets = document.createElement("div");
				deets.classList.add("deets");
				right.appendChild(deets);
				var title = document.createElement("h2");
					title.textContent = item.title;
					deets.appendChild(title);
				var date = document.createElement("h3");
					date.textContent = item.date + "/17";
					deets.appendChild(date);
				var day = document.createElement("p");
					day.textContent = "Day " + item.daynumber;
					deets.appendChild(day);
				var location = document.createElement("p");
					location.textContent = "Location: " + item.location;
					deets.appendChild(location);
				var surface = document.createElement("p");
					surface.textContent = "Surface: " + item.surface;
					deets.appendChild(surface);
				var tags = document.createElement("p");
					// var color = item.color;
					// 	color.join(", ");
					// var type = item.type;
						// type.join(", ");
					tags.textContent = "Tags: " + item.type + ", " + item.color;
					deets.appendChild(tags);
			//adds all sticker info to holder div
		// }

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

