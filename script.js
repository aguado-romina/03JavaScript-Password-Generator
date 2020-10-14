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

let totalCharacters = prompt ("How many characters do you want?");
let lowerCase = prompt ("Do you want lower case?");
let upperCase = prompt ("Do you want upper case?");
let specialCharacter = prompt ("Do you want special characters?");


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
  const symbols = ' !@#$%^&*(){}[]=<>/,.';
  return symbols [Math.floor(Math.random() * symbols.length)];
}

console.log(getRandomLower());

console.log(getRandomUpper());

console.log(getRandomNumber());

console.log(getRandomSymbol());

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
}

const 