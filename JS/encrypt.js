// Encryption (asking the user)
function pigEncryptC() {
  var plaintext = prompt("What would you like encrypted?")
  plaintext = plaintext.toLowerCase(); //Sets all letters to lower case

  var ciphertext = ""; //Creates empty string for final answer
  var wordlist = plaintext.split(" "); //Splits the string into an array divided everytime there is a space
  
  for (var i = 0; i < wordlist.length; i++) {
    if (wordlist[i].length > 2) {
      ciphertext = ciphertext + wordlist[i].substring(1, ) + wordlist[i][0]+"ay ";
    }
    else {
      ciphertext = ciphertext + wordlist[i]+ " ";
    }
  }
 
// return(ciphertext);
alert(ciphertext); //Alerts the final answer
}

// Decryption (asking the user)
function pigEncryptD() {
  var text = prompt("What would you like decrypted?");
  text = text.toLowerCase(); //Sets all letters to lower case

  var plain = ""; //Creates empty string for final answer
  var list = text.split(" "); //Splits the string into an array divided everytime there is a space
  
  for (var j = 0; j < list.length; j++) {
    if (list[j].length > 2) {
      plain += list[j].charAt(list[j].length-3) + list[j].substring(0,list[j].length-3) + " ";
    }
    else {
      plain += list[j] + " ";
    }
  }

alert(plain); //Alerts the final answer
}

// Encryption (assignment 6)
function ranEncrypt() {
	var plaintext = prompt("What would you like encrypted?");
	plaintext = plaintext.toLowerCase(); //Sets all letters to lower case

	var letter = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
	var number = ["0","1","2","3","4","5","6","7","8","9"];

	var ciphertext = ""; //Creates empty string for final answer
	var num;

	for (var i = 0; i < plaintext.length; i++) {
		if (plaintext[i] == " ") {
			ciphertext += " ";
		} // Transfers a space in a string to the final output
		else if (number.includes(plaintext[i])) {
			ciphertext += (number.indexOf(plaintext[i])-9)*(-1);
		}
		else if (plaintext[i] == "z") {
			ciphertext += "a"; // Replaces any A's with Z's
		}
		else if (letter.indexOf(plaintext[i]) <= 25){
			num = letter.indexOf(plaintext[i])+1;
			ciphertext += letter[num]; //Shifts every letter one place forward in the alphabet
		}
		else if (plaintext[i] != plaintext[i].toString()) {
			ciphertext += plaintext[i].toString(); 
		}
	}
	alert(ciphertext); //Alerts the final answer
}
// Decryption (assignment 6)
function ranDecrypt() {
	var text = prompt("What would you like decrypted?");
	text = text.toLowerCase(); //Sets all letters to lower case

	var letter = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	var number = ["0","1","2","3","4","5","6","7","8","9"];

	var plain = ""; //Creates empty string for final answer
	var num;

	for (var i = 0; i < text.length; i++) {
		if (text[i] == " ") {
			plain += " ";
		} // Transfers a space in a string to the final output
		else if (number.includes(text[i])) {
			plain += number.indexOf(text[i])*(-1)+9; 
		}
		else if (text[i] == "a") {
			plain += "z"; // Replaces any Z's with A's
		}	
		else {
			num = letter.indexOf(text[i])-1;
			plain += letter[num]; //Shifts every letter one place back in the alphabet 
		}
	}
	alert(plain); //Alerts the final answer
}