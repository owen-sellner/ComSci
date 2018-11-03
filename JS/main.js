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

function test4() {
	var numA = prompt("Insert three (3) numbers to find their product. Insert first number.");	
	var numB = prompt("Insert second number.");
	var numC = prompt("Insert third number.");

	alert("The product is " + numA * numB * numC);
}

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

function assignB4(){
	var numZ = prompt("How many intervals do you want in the triangle?")
	var stars = " *" 
	numZ -= 1;
	console.log("'"+stars+" '")
	for (let i = 0; i < numZ; i++){
		stars += " *"
		console.log("'"+stars+" '")
	}
}