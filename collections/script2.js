console.log("hello");

// var target = $(window);

var holder = document.getElementById("holder");
var bg = document.getElementById("bg");

var counter = 0;

$('#bg, #holder').click(function(e) {
	console.log(e);
	bg.innerHTML = "";
	item = stickers[counter % stickers.length];
		
		console.log(e.screenX);
		var positionX = e.screenX - 150;
		var positionY = e.screenY - 230;

		var sticker = document.createElement("div");
		sticker.classList.add("sticker");
		holder.appendChild(sticker);
		console.log(stickers);
		var png = document.createElement("img");
		png.src = item.png;
		sticker.style.cssText = "left: " + positionX + "px; top: " + positionY + "px;";
		sticker.appendChild(png);
		var image = $(sticker).children("img");
		console.log(image);

	counter += 1;
	console.log(counter);
	console.log(item);
});

// ---------------------------------------------------------


var page = document.getElementById("holder");

$("#clear").mouseup(function(e) {
	// var page = $(window).currentTarget.holder;
	// console.log(page);
	while (page.hasChildNodes()) {
		page.removeChild(page.firstChild);
	}
});

$("#undo").mouseup(function(e) {
	if (page.hasChildNodes()) {
    	page.removeChild(page.lastElementChild);
    	counter -= 1;
	}
})


