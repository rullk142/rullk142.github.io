console.log("it's printing")

function scrollToBottom() {
	$("#page").animate({scrollTop: $("#page").get(0).scrollHeight}, 1000);
	console.log("scroll?");
};

$("#start").click(function() {
        console.log("congrats, you clicked it")
        $("#begin").show();
        $("#yesthat").delay('slow').fadeIn();
        setTimeout(scrollToBottom, 1000);
        $("#gasp").delay('2000').fadeIn();
        setTimeout(scrollToBottom, 2500);
        $("#lost").delay('3000').fadeIn();
        setTimeout(scrollToBottom, 3500);
        $("#one").delay('4000').fadeIn();
        $("#stare").delay('4000').fadeIn();
        $("#jump").delay('4000').fadeIn();
        $("#closer").delay('4000').fadeIn();
        $("#start").css("color", "#ff6138");
        $("#start").css("cursor", "default");

        setTimeout(scrollToBottom, 4500);

});

$("#stare").click(function() {
        $("#notice").delay('slow').fadeIn();
        $("#stare").css("color", "black");
        $("#stare").css("cursor", "default");
        // $("#air").remove();
        // $("#squat").remove();
        // $("#jump").off("click");
        // $("#closer").off("click");
        // $("#gaspii").delay('2000').fadeIn();
        // $("#lostii").delay('3000').fadeIn();
        setTimeout(scrollToBottom, 1000);
});

$("#jump").click(function() {
        $("#air").delay('slow').fadeIn();
        $("#jump").css("color", "black");
        $("#jump").css("cursor", "default");
        // $("#notice").remove();
        // $("#squat").remove();
        // $("#stare").off("click");
        // $("#closer").off("click");
        // $("#gaspii").delay('2000').fadeIn();
        // $("#lostii").delay('3000').fadeIn();
        setTimeout(scrollToBottom, 1000);
});

$("#closer").click(function() {
        $("#squat").delay('slow').fadeIn();
        setTimeout(scrollToBottom, 1000);
        // $("#notice").remove();
        // $("#air").remove();
        // $("#jump").off("click");
        // $("#stare").off("click");
        $("#two").delay("2000").fadeIn();
        $("#smack").delay("2000").fadeIn();
        $("#wave").delay("2000").fadeIn();
        $("#stretch").delay("2000").fadeIn();
        $("#closer").css("color", "#ff6138");
        $("#stare").css("color", "black");
        $("#jump").css("color", "black");
        $("#stare").css("cursor", "default");
        $("#jump").css("cursor", "default");
        $("#closer").css("cursor", "default");
        setTimeout(scrollToBottom, 2500);
});

$("#smack").click(function() {
		$("#heck").delay('slow').fadeIn();
		$("#smack").css("color", "black");
        $("#smack").css("cursor", "default");
		// $("#smiles").remove();
		// $("#sniffs").remove();
		// $("#wave").off("click");
		// $("#stretch").off("click");
		setTimeout(scrollToBottom, 1000);
});

$("#wave").click(function() {
		$("#smiles").delay('slow').fadeIn();
		setTimeout(scrollToBottom, 1000);
		$("#wave").css("color", "black");
        $("#wave").css("cursor", "default");
		// $("#heck").remove();
		// $("#sniffs").remove();
		// $("#smack").off("click");
		// $("#stretch").off("click");
		setTimeout(scrollToBottom, 1000);
});

$("#stretch").click(function() {
		$("#sniffs").delay('slow').fadeIn();
		setTimeout(scrollToBottom, 1000);
		// $("#smiles").remove();
		// $("#heck").remove();
		// $("#wave").off("click");
		// $("#smack").off("click");
        $("#three").delay("2000").fadeIn();
        $("#poke").delay("2000").fadeIn();
        $("#pet").delay("2000").fadeIn();
        $("#stretch").css("color", "#ff6138");
        $("#smack").css("color", "black");
        $("#wave").css("color", "black");
        $("#smack").css("cursor", "default");
        $("#wave").css("cursor", "default");
        $("#stretch").css("cursor", "default");
        setTimeout(scrollToBottom, 2500);
});

$("#poke").click(function() {
		$("#fade").delay('slow').fadeIn();
		$("#poke").css("color", "black");
        $("#poke").css("cursor", "default");
		// $("#bliss").remove();
		// $("#pet").off("click");
		setTimeout(scrollToBottom, 1000);
});

$("#pet").click(function() {
		$("#bliss").delay('slow').fadeIn();
		setTimeout(scrollToBottom, 1000);
		// $("#fade").remove();
		// $("#poke").off("click");
		$("#four").delay("2000").fadeIn();
		setTimeout(scrollToBottom, 2500);
		$("#fourii").delay("4000").fadeIn();
		$("#return").delay("4000").fadeIn();
		$("#take").delay("4000").fadeIn();
		$("#pet").css("color", "#ff6138");
        $("#poke").css("color", "black");
        $("#poke").css("cursor", "default");
        $("#pet").css("cursor", "default");
        setTimeout(scrollToBottom, 4500);
});

$("#return").click(function() {
		$("#cry").delay('slow').fadeIn();
		setTimeout(scrollToBottom, 1000);
		$("#cryii").delay('2000').fadeIn();
		setTimeout(scrollToBottom, 2500);
		$("#cryiii").delay('4000').fadeIn();
		$("#return").css("color", "#ff6138");
		$("#take").remove();
		$("#end").delay('6000').fadeIn();
		setTimeout(scrollToBottom, 6500);
});

$("#take").click(function() {
		$("#happy").delay('slow').fadeIn();
		setTimeout(scrollToBottom, 1000);
		$("#end").delay('2000').fadeIn();
		$("#take").css("color", "#ff6138");
		$("#return").css("color", "black");
        $("#return").css("cursor", "default");
		$("#end").delay('2000').fadeIn();
		setTimeout(scrollToBottom, 2500);
});
