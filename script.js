// Assignment Code


var generateBtn = document.querySelector("#generate");

var numberOfCharacters= 0;
var specialCharAllowed= "!@#$%^&*(){}[]=<>/,.";
var numbersAllowed= 0123456789;
var lowerCaseLetters="abcdefghijklmnopqrstuvwxyz";
var upperCaseLetters= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


/*Random Function*/

function getRandomSpecialCharacters() {
  var specialChar= specialCharAllowed[Math.floor(Math.random() * specialCharAllowed.length)];
  return specialChar;
}

function getRandomNumbers() {
  var randomNum= numbersAllowed[Math.floor(Math.random() * numbersAllowed)];
  return randomNum;
}

function getRandomlowerLetters() {
  var lowerCL= lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)];
  return lowerCL;
}

function getRandomUpperLetters() {
  var upperCL= upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)];
  return upperCL;
}


function askHowManyCharacters(){

}





/*function generatePassword(){
  var finalPassword="";
  var numberCharacters= askHowManyCharters()


  return finalPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);*/
