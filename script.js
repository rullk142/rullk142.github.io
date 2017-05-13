console.log("its printing!");

//image ids
var doge = document.getElementById("doge");
var neww = document.getElementById("new");
var cloud = document.getElementById("cloud");
var film = document.getElementById("film");
var media = document.getElementById("media");
var sina = document.getElementById("sina");
var stick = document.getElementById("stick");
var ui = document.getElementById("ui");
var wdis = document.getElementById("wdis");
var what = document.getElementById("what");
var wild = document.getElementById("wild");
var wire = document.getElementById("wire");

//link ids
	// var text = document.getElementById("text");
	// var ux = document.getElementById("ux");
	// var io = document.getElementById("io");
	// var frame = document.getElementById("frame");
	// var collect = document.getElementById("collect");
	// var one = document.getElementById("one");
	// var two = document.getElementById("two");
	// var three = document.getElementById("three");
	// var four = document.getElementById("four");
	// var see = document.getElementById("see");
	// var home = document.getElementById("home");
	// var things = document.getElementById("things");

$("#doge, #text").on({
	"mouseover" : function() {
		doge.src = "thumb/color/doge.jpg";
		$("#text p").css({"color": "white"});
	},
	"mouseout" : function() {
		doge.src = "thumb/bw/doge.jpg";
		$("#text p").css("color", "gray");
	}
});

$("#new, #ux").on({
	"mouseover" : function() {
		neww.src = "thumb/color/new.jpg";
		$("#ux p").css({"color": "white"});
	},
	"mouseout" : function() {
		neww.src = "thumb/bw/new.jpg";
		$("#ux p").css({"color": "gray"});
	}
});

$("#cloud, #io").on({
	"mouseover" : function() {
		cloud.src = "thumb/color/cloud.jpg";
		$("#io p").css({"color": "white"});
	},
	"mouseout" : function() {
		cloud.src = "thumb/bw/cloud.jpg";
		$("#io p").css({"color": "gray"});
	}
});

$("#film, #home").on({
	"mouseover" : function() {
		film.src = "thumb/color/film.jpg";
		$("#home p").css({"color": "white"});
	},
	"mouseout" : function() {
		film.src = "thumb/bw/film.jpg";
		$("#home p").css({"color": "gray"});
	}
});

$("#media, #four").on({
	"mouseover" : function() {
		media.src = "thumb/color/media.jpg";
		$("#four p").css({"color": "white"});
	},
	"mouseout" : function() {
		media.src = "thumb/bw/media.jpg";
		$("#four p").css({"color": "gray"});
	}
});

$("#sina, #three").on({
	"mouseover" : function() {
		sina.src = "thumb/color/sina.jpg";
		$("#three p").css({"color": "white"});
	},
	"mouseout" : function() {
		sina.src = "thumb/bw/sina.jpg";
		$("#three p").css({"color": "gray"});
	}
});

$("#stick, #collect").on({
	"mouseover" : function() {
		stick.src = "thumb/color/stick.jpg";
		$("#collect p").css({"color": "white"});
	},
	"mouseout" : function() {
		stick.src = "thumb/bw/stick.jpg";
		$("#collect p").css({"color": "gray"});
	}
});

$("#ui, #one").on({
	"mouseover" : function() {
		ui.src = "thumb/color/ui.jpg";
		$("#one p").css({"color": "white"});
	},
	"mouseout" : function() {
		ui.src = "thumb/bw/ui.jpg";
		$("#one p").css({"color": "gray"});
	}
});

$("#wdis, #see").on({
	"mouseover" : function() {
		wdis.src = "thumb/color/wdis.jpg";
		$("#see p").css({"color": "white"});
	},
	"mouseout" : function() {
		wdis.src = "thumb/bw/wdis.jpg";
		$("#see p").css({"color": "gray"});
	}
});

$("#what, #two").on({
	"mouseover" : function() {
		what.src = "thumb/color/what.jpg";
		$("#two p").css({"color": "white"});
	},
	"mouseout" : function() {
		what.src = "thumb/bw/what.jpg";
		$("#two p").css({"color": "gray"});
	}
});

$("#wild, #things").on({
	"mouseover" : function() {
		wild.src = "thumb/color/wild.jpg";
		$("#things p").css({"color": "white"});
	},
	"mouseout" : function() {
		wild.src = "thumb/bw/wild.jpg";
		$("#things p").css({"color": "gray"});
	}
});

$("#wire, #frame").on({
	"mouseover" : function() {
		wire.src = "thumb/color/wire.jpg";
		$("#frame p").css({"color": "white"});
	},
	"mouseout" : function() {
		wire.src = "thumb/bw/wire.jpg";
		$("#frame p").css({"color": "gray"});
	}
});