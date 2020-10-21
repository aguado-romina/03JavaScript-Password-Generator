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
    passwordString = passwordString + getRandomUpper();
  }

  if (randomNumber === true) {
    passwordString = passwordString + getRandomNumber();
  }

  if (randomSymbol === true) {
    passwordString = passwordString + getRandomSymbol();
  }
  console.log(passwordString);

  let pwd = '';
  for (let i = 0; i < passwordLenght; i++) {
  
  let randomPick = Math.floor(Math.random() * 4 + 1);

    switch (randomPick) { 
      case 1: pwd = pwd + getRandomLower(); 
      break; 
      case 2: pwd = pwd + getRandomUpper(); 
      break; 
      case 3: pwd = pwd + getRandomSymbol(); 
      break; 
      case 4: pwd = pwd + getRandomNumber(); 
      break; 
      default: return console.log("didn't give 1 - 4"); }
  }
  return pwd;
}


//End of Generate Password Funtion//

//Begining of For loop//

//End of for loop//

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
  let symbols = '!@#$%^&*(){}[]=<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}
//End of Generating Random values with Javascript//


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);










