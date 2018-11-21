// With prompts 
function start() {
	var randomNumber = Math.floor((Math.random()*1000)+1);
	var end = 0;
	var tries = 0;

	console.log(randomNumber);
	while (end < 1) {
	var guess = prompt("Guess a number between 1 and 1000. Or type 'q' to end the game.");
	if (guess == randomNumber) {
		alert("You got it!");
		var end = 1;
	}
	else if (guess > randomNumber) {
		alert("Too high, try again");
	} 
	else if (guess < randomNumber) {
		alert("Too low, try again");
	}
	else if (guess === "q") {
		var end = 2;
	}
	else {
		alert("Invaild input. Try again");
		}
	tries++;	
	}
	if (end === 1) {
		alert("It took you "+tries+" attempt(s) to guess the number.");
	}
	else if (end === 2) {
		alert("Try again when you are ready.")
	}
}

// Assignment 5
// Start
var randomNumber = parseInt(Math.floor((Math.random()*1000)+1));
var tries = 1;
function uni() {
	location.reload();
}
// Guess

function GTN() {
	// Sets guess to the value in the box
	var guess = parseInt(document.getElementById("g1").value);
	
	// Checks in the user guessed correctly
	if (guess == randomNumber) {
		document.getElementById("out").innerHTML= "You got it!";
		alert("It took you "+tries+" attempt(s) to guess the number.");
		// Removes the display of their last guess
		document.getElementById("last").innerHTML = "";
	}
	else if (guess > randomNumber) {
		document.getElementById("out").innerHTML= "Too high, try again";
		tries+= 1;
		// Displays their last guess
		document.getElementById("last").innerHTML = ("Your last guess was "+guess);
	} 
	else if (guess < randomNumber) {
		document.getElementById("out").innerHTML= "Too low, try again";
		tries+= 1;
		// Displays their last guess
		document.getElementById("last").innerHTML = ("Your last guess was "+guess);
	}
	else {
		document.getElementById("out").innerHTML= "Invaild input. Try again";
		tries+= 1;
		document.getElementById("last").innerHTML = "";
	}
	// Loging the values into the console
	console.log("Guess: "+guess);
	console.log("Random Number: "+randomNumber);
	console.log("Attempts: "+tries);
	// Emptying the input box
	document.getElementById("g1").value=null;
}
