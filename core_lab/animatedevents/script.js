/*
	// console.log(thething);

	thething.addEventListener("click", toggle_state);
	thething.addEventListener("mouseenter", addhover);
	thething.addEventListener("mouseleave", removehover);

} 


function toggle_state(theevent) {
	if (this.classList.contains("active")) {
		this.classList.remove("active");
	}
	else this.classList.add("active");
}

function addhover(e) {
	this.classList.add("hovered");
}

function removehover(e) {
	this.classList.remove("hovered");
}
*/

ball.addEventListener("click", function(e) {
	console.log(e);
	if (document.body.children.lift.children.ball.style.left = "0px") {
		document.body.children.lift.children.ball.style.left = "175px";
		document.body.children.lift.children.ball.style.color = "pink";
		document.body.children.lift.children.button.style.width = "25px";
		document.body.children.lift.children.button.style.height = "25px";
		document.body.children.lift.children.button.style.lineHeight = "25px";
		document.body.children.lift.children.button.style.color = "white";
	} 
});

button.addEventListener("mousedown", function(e) {
	document.body.children.lift.children.button.style.backgroundColor = "yellow";
});

button.addEventListener("mouseup", function(e) {
	console.log(e);
	document.body.children.lift.children.button.style.backgroundColor = "orange";
	document.body.children.lift.style.top = "100px";
	document.body.children.lift.children.ball.textContent = "3";
	document.body.children.lift.children.ball.style.color = "white";
	if (document.body.children.lift.style.top == "100px") {
		document.body.children.lift.children.button.style.color = "orange";
	}
});

ball.addEventListener("click", function (e) {
	if (document.body.children.lift.style.top == "100px") {
		document.body.children.lift.children.ball.style.left = "350px";
		document.body.children.lift.children.button.style.color = "orange";
	}
});









