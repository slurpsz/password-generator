// Assignment Code
var generateBtn = document.querySelector("#generate");

// Object containing arrays of password character types.
var pwPrompts = {
  lowerCaseChar: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  upperCaseChar: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  numericChar: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  specialCharacters: ["!", "#","$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<=>", "?", "@", "[", "\\", "]", "^", "_", "`","{", "|", "}", "~"],

}

// Function to generate password with user options.
function generatePassword () {
  // Variable to store length
  var length = window.prompt("How many characters would you like?")
  // Condtional statement to check length.
  //Conditional statement to check if length is a number.
  if (isNaN(length)) {
    alert("Length must be provided as a number.");
    return;
  }  
  //Conditional statement to check if length is at least 8 characters and no more than 128 characters long. 
  if (length < 8 || length > 128) {
    alert("You need at least 8 characters and no more than 128 characters to continue.")
    return;
  }
  // Variable to store boolean of character types.
  var lowerCase = window.confirm("Would you like any lowercase characters?")
  var upperCase = window.confirm("Would you like any uppercase characters?")
  var numeric = window.confirm ("Would you like any numeric characters?")
  var specialChar = window.confirm ("Would you like any special characters?")

    //Conditional statement to check if users did not include any character types.
    if (lowerCase == false && upperCase == false && numeric == false && specialChar == false) {
      alert("At least one character type must be selected.")
      return;
    }
    var userOptions = []
    if (lowerCase == true) {
      userOptions = userOptions.concat(pwPrompts.lowerCaseChar)
    }
    
    var userOptions = []
    if (upperCase == true) {
      userOptions = userOptions.concat(pwPrompts.upperCaseChar)
    }
    
    var userOptions = []
    if (numeric == true) {
      userOptions = userOptions.concat(pwPrompts.numericChar)
    }
    
    var userOptions = []
    if (specialChar == true) {
      userOptions = userOptions.concat(pwPrompts.specialCharacters)
    }
    
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
