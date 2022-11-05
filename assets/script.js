/* 
Rules 
choose 8-128 characters
yes/no lowercase, uppercase, numerics, special characters
Step 1 list variables that are needed in for the password criteria 
 - Password length (8 - 128 characters)
 - Lowercase
 - Numerics
 - Special Characters

step 2 - create prompt and  confirm

*/

// Assignment Code
var generateBtn = document.querySelector('#generate');
// Password variables and values
const lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
      upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
      numerics = ['0', '2', '3', '4', '5', '6', '7', '8', '9'],
      specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '{', '}', '~', '?', '<', '>', '/'];
    
      console.log(lowerCase);
      console.log(upperCase);
      console.log(numerics);
      console.log(specialCharacters);
// Write password to the #password input
function writePassword() {
  var password = generatePassword(); {
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword); 

function generatePassword() {

  // User prompt to choose password length
  const passwordLength = prompt("How many password characters would you like to include? Password may be between 8 to 128 characters.");
  // User confirm for lowercase characters in password 
  const lowerCase = confirm("Do you want to include lowercase characters?");
  // User confirm for uppercase characters in password 
  const upperCase = confirm("Do you want to include uppercase characters?");
  // User confirm for numbers in password
  const numerics = confirm("Do you want to include numbers?");
  // User confirm for special characters in password
  const specialCharacters = confirm("Do you want to include special characters?");

  console.log(passwordLength);
  console.log(lowerCase);
  console.log(upperCase);
  console.log(numerics);
  console.log(specialCharacters);




 }
 
}
writePassword();
generatePassword();
