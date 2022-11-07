/* 
 * Step 1 list variables that are needed in for the password criteria 
 - Password length (8 - 128 characters)
 - Lowercase
 - Numerics
 - Special Characters

 * Step 2 - create prompt and confirm for password criteria

 * Step 3 - Create if statements for user selection

*/

var generateBtn = document.querySelector('#generate');

function generatePassword() {


  // Password variables and values
  let passwordLength = 0;
  // Created a blank array for user characters inputs
  let allCharacters = [];
  let lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  let upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  let numerics = ['0', '1','2', '3', '4', '5', '6', '7', '8', '9'];
  let specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '{', '}', '~', '?', '<', '>', '/'];
  // Declare a boolean to track the users typeof () characters, will be used for conditions
  let lowerChar = false;
  let upperChar = false;
  let numChar = false;
  let specialChar = false;

    

  // User prompt and confirms for password criteria
  passwordLength = prompt('How many password characters would you like to include? Password may be between 8 to 128 characters.');
  console.log('passwordLength: ' + passwordLength);
   
  lowerChar = confirm('Do you want to include lowercase characters?');
    
  upperChar = confirm('Do you want to include uppercase characters?');
    
  numChar = confirm('Do you want to include numbers?');
    
  specialChar = confirm('Do you want to include special characters?');
  // If password is not within the password criteria it wont accept input
  if (passwordLength < 8 || passwordLength > 128 || passwordLength === "") {
    alert("Invalid Length Entry. Length Must Be Between 8 and 128 Characters.")
    return passwordLength;
  }
    
  
 /* 
 *Lowercase conditions 
 * lowerChar is original false so if true (yes selected by user) it will add lowercase
 * characters to the blank array of allCharacter. This pertains to all conditions listed below.
 */
  if (lowerChar === true); {
    allCharacters = allCharacters.concat(lowerCase);
    console.log('allCharacters: ' + allCharacters);
  }
 // Uppercase conditions
  if (upperChar === true); {
  allCharacters = allCharacters.concat(upperCase);
  console.log('allCharacters: ' + allCharacters);
  }
  // Numeric conditions
  if (numChar === true); {
    allCharacters = allCharacters.concat(numerics);
    console.log('allCharacters: ' + allCharacters);
  }
  // special characters conditions
  if (specialChar === true); {
    allCharacters = allCharacters.concat(specialCharacters);
    console.log('allCharacters: ' + allCharacters);
  }

  for (let i = 0; i < passwordLength; i++) {
    /* password (empty) = password overwrite with previous password and add one for the loop
    * Math random (number between 0 - 1)* all characters.length, Math.floor round that decimal 
    * number to a whole number. That whole number will be the number the character falls on.
    * This will continue until the password length the user chose.
    */
    password = password + allCharacters[Math.floor(Math.random() * allCharacters.length)];
  }
  console.log(password);
  // Return password to the input text
  return password
      


}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);