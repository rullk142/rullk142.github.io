var album_list = [
{
	"title" : "ii",
	"artistname": "led zeppelin",
	"tracks": [
		"Whole Lotta Love",
		"2",
		"3",
		"4"
		]
},
{
	"artistname": "fleetwood mac",
	"title": "rumors"
},
{
	"artistname": "beatles",
	"title": "abbey road"
},
{
	"artistname": "the shins",
	"title": "chutes too narrow"
}
];

album_list.forEach(function(the_single_album) {
	console.log(the_single_album);

	var container = document.querySelector(".saranwrap")

	var thing_to_append = document.createElement("div");
	thing_to_append.textContent = the_single_album.artistname;

	var heading = document.createElement("h4");
		heading.textContent = the_single_album.title;
		thing_to_append.appendChild(heading);

	if (typeof the_single_album.tracks !== "undefined")
		{
		the_single_album.tracks.forEach(function(tr_name)
			{
			var tr = document.createElement("p");
			tr.textContent = tr_name;
			thing_to_append.appendChild(tr);
			});
		}

	container.appendChild(thing_to_append);
});



// var albumtitles = ["ii", "rumors", "abbey road"];
// console.log(albumtitles[0]);


// war albumtitles = "["ii", "rumors", "abbey road"];
// var albumartists = ["led zeppelin", "fleetwood man", "beatles"]

//albumtitles.forEach(function(element) {
// 	console.log(element);
// });
// albumartists.forEach(function(element) {
//	console.log(element);
// });
