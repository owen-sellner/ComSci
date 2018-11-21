// Asks the user what their age is
function testA () {
	var age = prompt ("How old are you?") 
	var time = 18-age
	if (age < 18) {
		alert ("Call me in " + time + " years")
		}
	if (age >= 18) {
			alert ("How you doing? ;)")
		}
}
// Asks the user for their name and records a response in the console
function test1() {
	var fName = prompt("What's your name?");
	var myColor = prompt("Pick a colour " + fName);
	if(myColor == "red"){
		console.log("Excellent choice good sir");
	}
	else if(myColor == "green"){
		console.log("Obviously he's a normie")
	}
	else if(myColor == "yellow"){
		console.log("Big Bird")
	}
	else {
		console.log("Huh?")
	}
}
// Asks the user for their favorite number and alerts a response
function test2() {
	var favorite = prompt("What's your favorite number?")

	if(favorite == 69){
		alert("You should be ashamed of yourself.");
	}
	else if(favorite == 69) {
		alert("You should be ashamed of yourself.");
	}
	else if(favorite == 16) {
		alert("That is my favorite too. :)");
	}
	else {
		alert("Solid choice dude.")
	}
	console.log(favorite);
}
// Asks user to in put two numbers and alerts the larger number
function test3() {
	var num1 = prompt("Input a number in to each box and the larger interger will be printed. Input your first number below.");
	var num2 = prompt("Input your second number.")
	if (num1 > num2) {
		alert(num1 + " is greator")
	}
	else if (num1 < num2) {
		alert(num2 + " is greator")
	}
	else {
		alert("They are equal.")
	}
}
// Multiples the numbers inputed by the user
function test4() {
	var numA = prompt("Insert three (3) numbers to find their product. Insert first number.");	
	var numB = prompt("Insert second number.");
	var numC = prompt("Insert third number.");

	alert("The product is " + numA * numB * numC);
}
// Orders the numbers inputed by the user from greatest to least
function test5() {
	var numD = prompt("Insert three (3) numbers to find their order (greatest to least). Insert first number.");	
	var numE = prompt("Insert second number.");
	var numF = prompt("Insert third number.");

	var total = [numD, numE, numF];

	total.sort(function(a,b){
		return b-a; 
	});
	alert(total);
}
// Assigns a string value for a number in a list in the console
function assignA4() {
	for (let i = 1; i <= 100; i++) {
		if (i%3 === 0 && i%5 === 0) {
			console.log("FizzBuzz");
		}
		else if (i%3 === 0) {
			console.log("Fizz");
		}
		else if (i%5 === 0) {
			console.log("Buzz")
		}
		else {
			console.log(i);
		}
	}
}
// Creates a triangle made of astriks in the console
function assignB4(){
	var numZ = prompt("How many intervals do you want in the triangle?")
	var stars = " *" 
	numZ -= 1;
	console.log("'"+stars+" '");
	for (let i = 0; i < numZ; i++){
		stars += " *"
		console.log("'"+stars+" '")
	}
}
function astrix(){
	document.getElementById("Ab4").innerHTML ="";
	var numZ = prompt("How many intervals do you want in the triangle?")
	var stars = " *" 
	numZ -= 1;
	var node = document.createElement("LI")
	var testnode = document.createTextNode("'"+stars+" '");
	node.appendChild(textnode);
	document.getElementById("Ab4").appendChild(node);
	
	for (let i = 0; i < numZ; i++){
		stars += " *"
		text = "'"+stars+" '";
		textList.appendChild(text);
		document.getElementById("Ab4").appendChild(textList);
	}
}

function hide1(){
	let x = document.getElementById("hideA");
	if (x.style.display === "none") {
		x.style.display = "block";
	}
	else {
		x.style.display = "none";
	}
}

function quiz(){
	let array = [74,85,71];
	for (var i = 0; i <= 2; i++) {
		console.log(array[i])
	}
}
function quiz2(){
	let array = [74,85,71];
	for (let i = 0; i < array.length; i++) {
		console.log("You got a mark of "+array[i]);
	}
	let y = Math.round((74+85+71)/array.length)
	console.log("Your average is "+y);
}

// Assignment 5
function GTN() {
	var randomNumber = Math.floor((Math.random()*1000)+1);
	console.log(randomNumber);
	var end = 0;
	var tries = 0;
	// var guess = prompt("Guess a number between 1 and 1000");
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
		var end = 1;
	}
	else {
		alert("Invaild input. Try again");
		}
	tries++;	
	}
	alert("It took you "+tries+" tries to guess the number.");
}