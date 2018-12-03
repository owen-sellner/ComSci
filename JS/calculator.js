function calc() {
	
}

// Encryption (With the weird space removal)
function pigEncrypt (plaintext) {
  var ciphertext = ""; 
  var wordlist = plaintext.split(" "); 
  
  for (var i = 0; i < wordlist.length; i++) {
    var last = wordlist.slice(-1);
    if (wordlist[i].length > 2) {
      ciphertext = ciphertext + wordlist[i].substring(1, ) + wordlist[i][0]+"ay ";
    }
    else if (wordlist[i] == last && wordlist.length > 2) {
      ciphertext = ciphertext + wordlist[i].substring(1, ) + wordlist[i][0]+"ay";
    }
    else {
      ciphertext = ciphertext + wordlist[i]+ " ";
    }
  }
  return(ciphertext);
}

console.log(pigEncrypt("Hello my name is Simon"));
console.log(wordlist);

// Encryption (Without the space removal)
function pigEncryptB (plaintext) {
  var ciphertext = ""; 
  var wordlist = plaintext.split(" "); 
  
  for (var i = 0; i < wordlist.length; i++) {
    if (wordlist[i].length > 2) {
      ciphertext = ciphertext + wordlist[i].substring(1, ) + wordlist[i][0]+"ay ";
    }
    else {
      ciphertext = ciphertext + wordlist[i]+ " ";
    }
  }
  return(ciphertext);
}

console.log(pigEncrypt("Hello my name is Simon"));
console.log(wordlist);