// Assignment Code


var generateBtn = document.querySelector("#generate");

var numberOfCharacters= 0;
var specialCharAllowed= "!@#$%^&*(){}[]=<>/,.";
var numbersAllowed= "0123456789";
var lowerCaseLetters="abcdefghijklmnopqrstuvwxyz";
var upperCaseLetters= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


/* Asking propmt for Confirmation*/
function askHowManyCharacters(){
  var answer= window.prompt("How Many Characters");
  
  if (answer === false) {
    return askHowManyCharacters();
  }
  
  answer = parseInt(answer);
  if(answer>=8 && answer<=128){
    return answer;
  }else{
    askHowManyCharacters();
  }

}

function askSpecialCharacters(){
  var answer1= confirm("Do you Want Special Characters");
  console.log(answer1);
      return answer1;
      
  }

function askNumbersAllowed(){
  var answer2= confirm("Do you Want Numbers");
  console.log(answer2);
    return answer2;
    
  }

function askLowerCL(){
  var answer3= confirm("Do you Want Characters in Lower Case");
  console.log(answer3);
    return answer3;
    
  }

function askUpperCL(){
  var answer4= confirm("Do you Want Characters in Upper Case");
  console.log(answer4);
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
