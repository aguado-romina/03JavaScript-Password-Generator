// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//Begining of Generate Password//
function generatePassword() {
  let passwordString = [];

  //Asking user for password requirements //
  let passwordLenght = prompt("How many characters do you want?");
  if (passwordLenght >= 8 && passwordLenght <= 148) {
  } else {
    alert("Password must be between 8 and 148 charachers!");
    return generatePassword();
  }
  let lowerCase = confirm("Do you want lower case?");
  let upperCase = confirm("Do you want upper case?");
  let randomNumber = confirm("Do you want numbers?");
  let randomSymbol = confirm("Do you want special characters?");

  if(lowerCase === false && upperCase === false && randomSymbol === false && randomNumber === false) {
    alert("You must choose a criteria!");
    return generatePassword();
  }
  
  //If statments for user selections//
 
  if (lowerCase === true) {
    for (let i = 0; i < passwordLenght; i++) { 
    passwordString.push(getRandomLower());
   }
  }
   if (upperCase === true) {
    for (let i = 0; i < passwordLenght; i++) { 
     passwordString.push(getRandomUpper());
   }
  }
   if (randomNumber === true) {
    for (let i = 0; i < passwordLenght; i++) { 
     passwordString.push(getRandomNumber());
   }
  }
   if (randomSymbol === true) {
    for (let i = 0; i < passwordLenght; i++) { 
     passwordString.push(getRandomSymbol());
   }
  }
   console.log(passwordString);


  //Random selection for all variables// 
let pwd = '';
for (let i = 0; i < passwordLenght; i++) {
  let randomChar = passwordString[Math.floor(Math.random() * passwordString.length)]
  console.log(randomChar);
  pwd += randomChar

}
return pwd;
}
//End of Generate Password Funtion//



//Begining of Generating Random values with Javascript - Used Youtube tutorial - link attached in README//
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
  let symbols = '!@#$%^&*(){}[]=<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}
//End of Generating Random values with Javascript//


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);










