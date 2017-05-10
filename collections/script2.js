console.log("hello");

// var target = $(window);

var holder = document.getElementById("holder");

$(window).click(function(e) {
	stickers.forEach(function(item) {
		console.log(e);
		console.log(e.screenX);
		var positionX = e.screenX;
		var positionY = e.screenY;
		var sticker = document.createElement("div");
		holder.appendChild(sticker);

		var png = document.createElement("img");
		png.src = item.png;
		sticker.appendChild(png);
	});
});

var page = $(window);

$("#sticker").click(function(page) {
	// var page = $(window).currentTarget.holder;
	console.log(page);
	// removeChild(children);
});
