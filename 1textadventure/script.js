console.log("it's printing")


$("#start").click(function() {
        console.log("congrats, you clicked it")
        $("#begin").show();
        $("#yesthat").delay('slow').fadeIn();
        $("#gasp").delay('2000').fadeIn();
        $("#lost").delay('3000').fadeIn();
        $("#one").delay('4000').fadeIn();
        $("#stare").delay('4000').fadeIn();
        $("#jump").delay('4000').fadeIn();
        $("#closer").delay('4000').fadeIn();
});

$("#stare").click(function() {
        $("#notice").delay('slow').fadeIn();
        $("#air").remove();
        $("#squat").remove();
        $("#jump").off("click");
        $("#closer").off("click");
        $("#gaspii").delay('2000').fadeIn();
        $("#lostii").delay('3000').fadeIn();
});

$("#jump").click(function() {
        $("#air").delay('slow').fadeIn();
        $("#notice").remove();
        $("#squat").remove();
        $("#stare").off("click");
        $("#closer").off("click");
        $("#gaspii").delay('2000').fadeIn();
        $("#lostii").delay('3000').fadeIn();
});

$("#closer").click(function() {
        $("#squat").delay('slow').fadeIn();
        $("#notice").remove();
        $("#air").remove();
        $("#jump").off("click");
        $("#stare").off("click");
        $("#two").delay("2000").fadeIn();
        $("#smack").delay("2000").fadeIn();
        $("#wave").delay("2000").fadeIn();
        $("#stretch").delay("2000").fadeIn();
        $("#closer").css("color", "#ff6138");
});

$("#smack").click(function() {
		$("#heck").delay('slow').fadeIn();
		$("#smiles").remove();
		$("#sniffs").remove();
		$("#wave").off("click");
		$("#stretch").off("click");
});

$("#wave").click(function() {
		$("#smiles").delay('slow').fadeIn();
		$("#heck").remove();
		$("#sniffs").remove();
		$("#smack").off("click");
		$("#stretch").off("click");
});

$("#stretch").click(function() {
		$("#sniffs").delay('slow').fadeIn();
		$("#smiles").remove();
		$("#heck").remove();
		$("#wave").off("click");
		$("#smack").off("click");
        $("#three").delay("2000").fadeIn();
        $("#poke").delay("2000").fadeIn();
        $("#pet").delay("2000").fadeIn();
});

$("poke").click(function() {
		$("#fade").delay('slow').fadeIn();
		$("#bliss").remove();
		$("#pet").off("click");
});

$("pet").click(function() {
		$("#bliss").delay('slow').fadeIn();
		$("#fade").remove();
		$("#poke").off("click");
});
