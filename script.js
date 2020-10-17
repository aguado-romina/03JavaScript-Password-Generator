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



// Romina Work //

//Asking user for password requirements // 
let totalCharacters = prompt ("How many characters do you want?");
  console.log (totalCharacters);

let lowerCase = confirm ("Do you want lower case?");
  console.log (lowerCase);

let upperCase = confirm ("Do you want upper case?");
  console.log (upperCase);

let specialCharacter = confirm ("Do you want special characters?");
  console.log (specialCharacter);

//Generating Random values with Javascript//
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  let symbols = ' !@#$%^&*(){}[]=<>/,.';
  return symbols [Math.floor(Math.random() * symbols.length)];
}


