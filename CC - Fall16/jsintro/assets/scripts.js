// var age = 17;
// var parentsPresent = false;

// if (age >= 18 || parentsPresent == true) {
//     console.log("Come on in!");
// } else {
//     if (age == 17) {
//         console.log("Come back next year");
//     } else {
//         console.log("I didn't want to be the one to tell you this, but sorry buddy, you can't make it inside.");
//     }
// }

// var students = ["John", "Mary", "Brian", "Jack", "Sarah"];
    
// for (var increment = 0; increment < students.length; increment++) {
//     console.log(students[increment]);
// }

// function hellowWorld() {
//     console.log("Hello world")
// }

// function addNums(num1, num2) {
//     var sum = num1 + num2;
//     console.log(sum)
// }

// var person = {
//     name: "Kenisha",
//     age: "19",
//     student: true,
//     location: "Brooklyn, NY",
//     pgp: "she/her",
//     favoriteArtists: ["Ari Lennox", "Jay Prince", "Ben Beal"]
// }

var numOfClicks = 0;

$(".button").mousemove(function() {
    // do stuff...
    // console.log("you clicked it...")
    numOfClicks++;
    $("mark").html(numOfClicks);
    // $("body").css("background-color", "lime");
});

    // boolean is always true or false
    // if false, it will skip over
    // = sets values
    // == asks the question
    // && is used to used as AND
    // || is used as OR
    // increment++ equivalent to increment + 1
    // strings are contained within ""
    // hide simply hides, remove takes off element completely