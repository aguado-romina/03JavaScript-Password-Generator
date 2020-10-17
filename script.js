// Assignment Code
let generateBtn = document.querySelector("#generate");
 



// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Begining of Generate Password//
function generatePassword () {
let passwordString = "";

//Asking user for password requirements //
let passwordLenght = prompt("How many characters do you want?"); 
let lowerCase = confirm("Do you want lower case?"); 
let upperCase = confirm("Do you want upper case?");
let randomNumber = confirm("Do you want numbers?");  
let randomSymbol = confirm("Do you want special characters?");

//If statments for user selections//
if (passwordLenght >= 8 && passwordLenght <= 148) {
} else {
  alert("Password must be between 8 and 148 charachers!");
  return generatePassword();
}
if (lowerCase === true) {
  passwordString = passwordString + getRandomLower();
}

if (upperCase === true) {
  passwordString = passwordString + getRandomUpper ();
}

if (randomNumber === true) {
  passwordString = passwordString + getRandomNumber ();
}

if (randomSymbol === true) {
  passwordString = passwordString + getRandomSymbol();
}

return passwordString;
}
//End of Generate PAssword Funtion//

//Begining of Generating Random values with Javascript//
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
 return symbols[Math.floor(Math.random() * symbols.length)];
}
//End of Generating Random values with Javascript//


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);










