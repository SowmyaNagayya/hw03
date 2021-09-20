// Assignment Code


var generateBtn = document.querySelector("#generate");

var numberOfCharacters= 0;
var specialCharAllowed= "!@#$%^&*(){}[]=<>/,.";
var numbersAllowed= "0123456789";
var lowerCaseLetters="abcdefghijklmnopqrstuvwxyz";
var upperCaseLetters= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


/*Generating Random Function*/

function getRandomSpecialCharacters() {
  var specialChar= specialCharAllowed[Math.floor(Math.random() * specialCharAllowed.length)];
  return specialChar;
}

function getRandomNumbers() {
  var randomNum= numbersAllowed[Math.floor(Math.random() * numbersAllowed.length)];
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

/*Stores Random Values in randomFunction*/
var randomFunction={ 
  specialChar: getRandomSpecialCharacters(),
  randomNum: getRandomNumbers(),
  lowerCL: getRandomlowerLetters(),
  upperCL: getRandomUpperLetters()
}

/*console.log(randomFunction.specialChar);
console.log(randomFunction.randomNum);
console.log(randomFunction.lowerCL);
console.log(randomFunction.upperCL);*/

/* Asking propmt for Confirmation*/
function askHowManyCharacters(){
  var answer= window.prompt("How Many Characters");
  if(answer>=8 && answer<=128){
        return answer;
  }else{
    window.prompt("Pick a Number between 8 and 128");
  }

}

function askSpecialCharacters(){
  var answer1= window.confirm("Do you Want Special Characters")
      return answer1;
  }

function askNumbersAllowed(){
  var answer2= window.confirm("Do you Want Numbers")
    return answer2;
  }

function askLowerCL(){
  var answer3= window.confirm("Do you Want Characters in Lower Case")
    return answer3;
  }

function askUpperCL(){
  var answer4= window.confirm("Do you Want Characters in Upper Case")
    return answer4;
  }

/*Generating Password*/
function generatePassword(){
  var finalPassword=""
  var numberCharacters= askHowManyCharacters();
  var specialCharacters= askSpecialCharacters();
  var numbers= askNumbersAllowed();
  var lowerecase= askLowerCL(); 
  var uppercase= askUpperCL();

  /* List Of Potential Characters*/
  var listOfPotentialCharacters= "";
  if(specialCharacters)
  {
    listOfPotentialCharacters= listOfPotentialCharacters.concat(specialCharAllowed);
  }

  if(numbers)
  {
    listOfPotentialCharacters= listOfPotentialCharacters.concat(numbersAllowed);
  }

  if(lowerecase)
  {
    listOfPotentialCharacters= listOfPotentialCharacters.concat(lowerCaseLetters);
  }

  if(uppercase)
  {
    listOfPotentialCharacters= listOfPotentialCharacters.concat(upperCaseLetters);
  }

 var pswdGen="";
 for(i=0;i<numberCharacters;i++)
  {
   finalPassword= listOfPotentialCharacters[Math.floor(Math.random()*listOfPotentialCharacters.length)];
   pswdGen = pswdGen + finalPassword ; 
  }


  return pswdGen;
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
