// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
 var userLengthselection = prompt("Please enter the length of your password, must be at least 8 and no more than 128 characters");
 var userLength = parseInt(userLengthselection);
  while (userLength > 128 || userLength < 8) {
    alert("Please try again, must be at least 8 characters but no more than 128");
    userLengthselection = prompt("Please enter the length of your password, must be at least 8 and no more than 128 characters");
    userLength = parseInt(userLengthselection);
  }
  alert(userLength);
  
  var uppercase = false; 
  var lowercase = false; 
  var numeric = false; 
  var specialcharacters = false; 
  var errorCheck = 0;

  while (uppercase == false && lowercase == false && numeric == false && specialcharacters == false) {
   
    if (errorCheck > 0) {
      alert("please enter a valid selection")
    }
    var userCharacterselection = prompt("What type of characters do you want? uppercase, lowercase, numeric, special characters? Type all that you want");
    var userLC = userCharacterselection.toLowerCase();
  
    if (userLC.search("uppercase") !== -1){
      uppercase = true; 
    }
  
    if (userLC.search("lowercase") !== -1){
      lowercase = true; 
    }
  
    if (userLC.search("numeric") !== -1){
      numeric = true; 
    }
  
    if (userLC.search("special characters") !== -1){
      specialcharacters = true; 
    }
    errorCheck = errorCheck + 1;
  }
  
  var userMessage = "you have selected the following criteria: "; 
 
  if (uppercase == true) {
    userMessage = userMessage + "uppercase ";
  }

  if (lowercase == true) {
    userMessage = userMessage + "lowercase ";
  }

  if (numeric == true) {
    userMessage = userMessage + "numeric ";
  }

  if (specialcharacters == true) {
    userMessage = userMessage + "special characters ";
  }

  alert(userMessage);

  var password = generatePassword(userLength, uppercase, lowercase, numeric, specialcharacters);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(length, upper, lower, numeric, specials) {
 // Possible characters
var characters_for_upper = Array.from('ABCDEFGHIJKLMPNOPQRSTUVWXYZ');
var characters_for_lower = Array.from('abcdefghijklmnopqrstuvwxyz');
var characters_for_numeric = Array.from('0123456789');
var characters_for_specials = Array.from('!@#$%^&*()-_=+]}[{:.;,/|}]');

// Will hold randomly generated characters of each type
var uppercase_string = [];
var lowercase_string = [];
var numeric_string   = [];
var specials_string  = [];
  
// Generate randomly characters of the max possible size
 for(var i=1; i<=128; i++){
   uppercase_string.push( characters_for_upper[parseInt(Math.random()    * characters_for_upper.length)]);
   lowercase_string.push( characters_for_lower[parseInt(Math.random()    * characters_for_lower.length)]);
   numeric_string.push(   characters_for_numeric[parseInt(Math.random()  * characters_for_numeric.length)]);
   specials_string.push(  characters_for_specials[parseInt(Math.random() * characters_for_specials.length)]);
} 

  var counter = 0; 

  if (upper == true) {
    counter = counter + 1;
  }

  if (lower == true) {
    counter = counter + 1; 
  }

  if (numeric == true) {
    counter = counter + 1;
  }
  
  if (specials == true) {
    counter = counter + 1;
  }

  var block = parseInt(length / counter);

  var remainder = length % counter; 

  var password = []; 

  console.log(uppercase_string.slice(0,block).join(''));

  if (upper == true) {
    password.push (uppercase_string.slice(0,block).join('')); 
  }

  if (lower == true) {
    password.push(lowercase_string.slice(0,block).join('')); 
  }

  if (numeric == true) {
    password.push(numeric_string.slice(0,block).join('')); 
  }

  if (specials == true) {
    password.push(specials_string.slice(0,block).join('')); 
  }

  if (remainder > 0) {
    password.push(password.slice(0,remainder).join(''));
  }
  return password.join(''); 
}


  