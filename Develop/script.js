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
  var characters_for_upper = "ABCDEFGHIJKLMPNOPQRSTUVWXYZ".split();
  var characters_for_lower = "abcdefghijklmnopqrstuvwxyz".split();
  var characters_for_numeric = "0123456789".split();
  var characters_for_specials = "!@#$%^&*()-_=+]}[{;:/.;,/|}]".split();
  var uppercase_string = "";
  var lowercase_string = "";
  var numeric_string   = "";
  var specials_string  = "";
  for(var i=1; i<=128; i++){
      uppercase_string = uppercase_string + characters_for_upper[Math.random() * 100 % characters_for_upper.length ]
      lowercase_string = lowercase_string + characters_for_lower[Math.random() * 100 % characters_for_lower.length ]
      numeric_string = numeric_string + characters_for_numeric[Math.random() * 100 % characters_for_numeric.length ]
      specials_string = specials_string + characters_for_specials[Math.random() * 100 % characters_for_specials.length ]
  }

} 
  