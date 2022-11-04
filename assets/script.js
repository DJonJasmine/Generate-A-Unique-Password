/* 
Step 1 create a series of prompts for password criteria 
 - choose length of password (8 - 128 characters)
 - ask do i want each character types (lowercase, uppercase, numeric, and/or special characters)
 -
 -
step 2

WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```
*/


// Assignment Code
let generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}
 
function generatePassword() {
  let passwordLength = prompt("How many characters to include in your password? It may be between 8 and 128 characters.")
 
  let lowercase = confirm("Do you want to include lowercase characters?");
  
  let uppercase = confirm("Do you want to include uppercase characters?");
 
  let number = confirm("Do you want to include numbers?");
  
  let specialCharacters = confirm("Do you want to include special characters?");
 }
 

 


generatePassword()

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
