// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

let totalCharacters = prompt ("How many characters do you want?");
let lowerCase = prompt ("Do you want lower case?");
let upperCase = prompt ("Do you want upper case?");
let specialCharacter = prompt ("Do you want special characters?");




