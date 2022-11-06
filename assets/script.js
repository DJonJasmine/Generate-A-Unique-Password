/* 
Rules
True False
True True
False True

lowercase + uppercase
lowercase + numerics
lowercase + special characters

uppercase + lowercase
uppercase + numerics
uppercase + special characters

numerics + lowercase
numerics + uppercase
numerics + special characters

special characters + lowercase
special characters + uppercase
special characters + numerics



Step 1 list variables that are needed in for the password criteria 
 - Password length (8 - 128 characters)
 - Lowercase
 - Numerics
 - Special Characters

Step 2 - create prompt and confirm for password criteria

Step 3 - Create if statements for user selection

*/

// Assignment Code
const generateBtn = document.querySelector('generate');
// Password variables and values
const passwordLength = 128,
      lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
      upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
      numerics = ['0', '2', '3', '4', '5', '6', '7', '8', '9'],
      specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '{', '}', '~', '?', '<', '>', '/'];
      
      console.log(lowerCase);
      console.log(upperCase);
      console.log(numerics);
      console.log(specialCharacters);
// Write password to the #password input
function writePassword() {
  const password = generatePassword(); {
   const passwordText = document.querySelector('password');

   passwordText.value = password;
  }

 // Add event listener to generate button
  generateBtn.addEventListener('click', writePassword); 

  function generatePassword() {

   // User prompt and confirms for password criteria
   const passwordLength = prompt('How many password characters would you like to include? Password may be between 8 to 128 characters.');
 
   const lowerCase = confirm('Do you want to include lowercase characters?');
   
   const upperCase = confirm('Do you want to include uppercase characters?');

   const numerics = confirm('Do you want to include numbers?');
 
   const specialCharacters = confirm('Do you want to include special characters?');
 
   console.log(passwordLength);
   console.log(lowerCase);
   console.log(upperCase);
   console.log(numerics);
   console.log(specialCharacters);

   if (passwordLength < 8 || passwordLength > 128) {
     alert('Invalid Entry')
     return passwordLength;
    }
  
    // lowercase and uppercase conditions 
    if (lowerCase === true && upperCase !== true) {
     for (let i = 0; i < passwordLength; i++) {
       userChoice = lowerCase[Math.floor(Math.random() * lowerCase.length)];
       console.log(userChoice);  
      }
    }
  
    if (lowerCase === true && upperCase === true) {
      for (let i = 0; i < passwordLength; i++) {
        userChoice = lowerCase[Math.floor(Math.random() * lowerCase.length)];
        console.log(userChoice);
      }
      for (let i = 0; i < passwordLength; i++) {
        userChoice = upperCase[Math.floor(Math.random() * upperCase.length)];
        console.log(userChoice);
      }
    }

    if (lowerCase !== true && upperCase === true) {
      for (let i = 0; i < passwordLength; i++) {
        userChoice = upperCase[Math.floor(Math.random() * upperCase.length)];
        console.log(userChoice);  
      }
    }

    if (lowerCase !== true && upperCase !== true) {
      console.log();  
    }
  
   // lowercase and numerics conditions 
    if (lowerCase === true && numerics !== true) {
      for (let i = 0; i < passwordLength; i++) {
        userChoice = lowerCase[Math.floor(Math.random() * lowerCase.length)];
        console.log(userChoice);
      }
    }

    if (lowerCase === true && numerics === true) {
      for (let i = 0; i < passwordLength; i++) {
        userChoice = lowerCase[Math.floor(Math.random() * lowerCase.length)];
        console.log(userChoice);
      }
      for (let i = 0; i < passwordLength; i++) {
        userChoice = numerics[Math.floor(Math.random() * numerics.length)];
        console.log(userChoice);
      } 
    }

    if (lowerCase !== true && numerics === true) {
      for (let i = 0; i < passwordLength; i++) {
        userChoice = numerics[Math.floor(Math.random() * numerics.length)];
        console.log(userChoice);
      }
    }

    if (lowerCase !== true && numerics !== true) {
      console.log();
    }
  
 // Lowercase and special characters conditions   
    if (lowerCase === true && specialCharacters !== true) {
      for (let i = 0; i < passwordLength; i++) {
        userChoice = lowerCase[Math.floor(Math.random() * lowerCase.length)];
        console.log(userChoice);
      }
    }

    if (lowerCase === true && specialCharacters === true) {
      for (let i = 0; i < passwordLength; i++) {
        userChoice = lowerCase[Math.floor(Math.random() * lowerCase.length)];
        console.log(userChoice);
      }   
      for (let i = 0; i < passwordLength; i++) {
        userChoice = specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
        console.log(userChoice);
      }    
    }

    if (lowerCase !== true && specialCharacters === true) {
      for (let i = 0; i < passwordLength; i++) {
        userChoice = specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
        console.log(userChoice);
      }
    }

    if (lowerCase !== true && specialCharacters !== true) {
      console.log();
    }
    // Uppercase and lowercase conditions
    if (upperCase === true && lowerCase !== true) {
      for (let i = 0; i < passwordLength; i++) {
        userChoice = upperCase[Math.floor(Math.random() * upperCase.length)];
        console.log(userChoice);
      }
    }

    if (upperCase === true && lowerCase === true) {
      for (let i = 0; i < passwordLength; i++) {
        userChoice = upperCase[Math.floor(Math.random() * upperCase.length)];
        console.log(typeof userChoice);
      }  
      for (let i = 0; i < passwordLength; i++) {
        userChoice = lowerCase[Math.floor(Math.random() * lowerCase.length)];
        console.log(userChoice);
      }  
    }

    if (upperCase !== true && lowerCase === true) {
      for (let i = 0; i < passwordLength; i++) {
        userChoice = lowerCase[Math.floor(Math.random() * lowerCase.length)];
        console.log(userChoice);
      }
    } 
  
    if (upperCase !== true && lowerCase !== true) {
      console.log()
    } 

    // Uppercase and numerics conditions
    if (upperCase === true && numerics !== true) {
      for (let i = 0; i < passwordLength; i++) {
        userChoice = upperCase[Math.floor(Math.random() * upperCase.length)];
        console.log(userChoice);
      }
    }

    if (upperCase === true && numerics === true) {
      for (let i = 0; i < passwordLength; i++) {
        userChoice = upperCase[Math.floor(Math.random() * upperCase.length)];
        console.log(userChoice);
      }
      for (let i = 0; i < passwordLength; i++) {
        userChoice = numerics[Math.floor(Math.random() * numerics.length)];
        console.log(userChoice);
      }
    }


  }
}  
// Function called
writePassword();
