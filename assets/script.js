/* 
Rules
True False
True True
False True
False False

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
      
 // Write password to the #password input
function writePassword() {
  let password = generatePassword(); {
   const passwordText = document.querySelector('password');

   passwordText.value = password;
  }

 // Add event listener to generate button
  generateBtn.addEventListener('click', writePassword); 

  function generatePassword() {

    const password = '';

   // User prompt and confirms for password criteria
    const userPasswordLength = prompt('How many password characters would you like to include? Password may be between 8 to 128 characters.');
    console.log(userPasswordLength);

    const lowerCase = confirm('Do you want to include lowercase characters?');
    
    const upperCase = confirm('Do you want to include uppercase characters?');
    
    const numerics = confirm('Do you want to include numbers?');
    
    const specialCharacters = confirm('Do you want to include special characters?');
    
    console.log(lowerCase + upperCase + numerics + specialCharacters);
    
    const randomLowerCase = Math.floor(Math.random() * lowerCase.length);

    console.log(randomLowerCase);

    const randomUpperCase = Math.floor(Math.random() * upperCase.length);

    console.log(randomUpperCase);

    const randomNumerics = Math.floor(Math.random() * numerics.length);

    console.log(randomNumerics);

    const randomSpecialCharacters = Math.floor(Math.random() * specialCharacters.length);

    console.log(randomSpecialCharacters);
  
    if (passwordLength < 8 || passwordLength > 128) {
      alert('Invalid Entry');
      return passwordLength;
    }
  
    // lowercase and uppercase conditions 
    if (lowerCase === true && upperCase !== true); {
     for (let i = 0; i < passwordLength; i++); 
    }
  
    if (lowerCase === true && upperCase === true); {
      for (let i = 0; i < passwordLength; i++); 
    }

    if (lowerCase !== true && upperCase === true); {
      for (let i = 0; i < passwordLength; i++);
    }

    if (lowerCase !== true && upperCase !== true); 
  
   // lowercase and numerics conditions 
    if (lowerCase === true && numerics !== true); {
      for (let i = 0; i < passwordLength; i++); 
    }

    if (lowerCase === true && numerics === true); {
      for (let i = 0; i < passwordLength; i++); 
    }

    if (lowerCase !== true && numerics === true); {
      for (let i = 0; i < passwordLength; i++); 
    }

    if (lowerCase !== true && numerics !== true); {
      console.log();
    }
  
 // Lowercase and special characters conditions   
    if (lowerCase === true && specialCharacters !== true); {
      for (let i = 0; i < passwordLength; i++); 
    }

    if (lowerCase === true && specialCharacters === true); {
      for (let i = 0; i < passwordLength; i++);    
    }

    if (lowerCase !== true && specialCharacters === true); {
      for (let i = 0; i < passwordLength; i++); 
    }

    if (lowerCase !== true && specialCharacters !== true); {
      console.log();
    }

    // Uppercase and lowercase conditions
    if (upperCase === true && lowerCase !== true); {
      for (let i = 0; i < passwordLength; i++); 
    }

    if (upperCase === true && lowerCase === true); {
      for (let i = 0; i < passwordLength; i++); 
    }

    if (upperCase !== true && lowerCase === true); {
      for (let i = 0; i < passwordLength; i++); 
    } 
  
    if (upperCase !== true && lowerCase !== true); {
     console.log();
    } 

    // Uppercase and numerics conditions
    if (upperCase === true && numerics !== true); {
      for (let i = 0; i < passwordLength; i++); 
    }

    if (upperCase === true && numerics === true); {
      for (let i = 0; i < passwordLength; i++); 
    }

    if (upperCase !== true && numerics === true); {
      for (let i = 0; i < passwordLength; i++); 
    }

    if (upperCase !== true && numerics !== true); 

    // Uppercase and special characters
    if (upperCase === true && specialCharacters !== true); {
      for (let i = 0; i < passwordLength; i++); 
    }

    if (upperCase === true && specialCharacters === true); {
      for (let i = 0; i < passwordLength; i++); 
    }

    if (upperCase !== true && specialCharacters === true); {
      for (let i = 0; i < passwordLength; i++); 
    }

    if (upperCase !== true && specialCharacters !== true); 

    // Numerics and lowercase conditions
    if (numerics === true && lowerCase !== true); {
      for (let i = 0; i < passwordLength; i++);
    }

    if (numerics === true && lowerCase === true); {
      for (let i = 0; i < passwordLength; i++); 
    }

    if (numerics !== true && lowerCase === true); {
      for (let i = 0; i < passwordLength; i++); 
    }

    if (numerics !== true && numerics !== true); 

    // Numerics and lowercase conditions
    if (numerics === true && lowerCase !== true); {
      for (let i = 0; i < passwordLength; i++); 
    }

    if (numerics === true && lowerCase === true); {
      for (let i = 0; i < passwordLength; i++); 
    }

    if (numerics !== true && lowerCase === true); {
      for (let i = 0; i < passwordLength; i++); 
    }

    if (numerics !== true && numerics !== true); 
    
    // Numerics and uppercase conditions
    if (numerics === true && upperCase !== true); {
      for (let i = 0; i < passwordLength; i++); 
    }
    
    if (numerics === true && upperCase === true); {
      for (let i = 0; i < passwordLength; i++); 
    }
    
    if (numerics !== true && upperCase === true); {
      for (let i = 0; i < passwordLength; i++); 
    }

    if (numerics !== true && upperCase !== true); 

    // Numerics and special characters conditions
    if (numerics === true && specialCharacters !== true); {
      for (let i = 0; i < passwordLength; i++);
    }
    
    if (numerics === true && specialCharacters === true); {
      for (let i = 0; i < passwordLength; i++); 
    }
    
    if (numerics !== true && specialCharacters === true); {
      for (let i = 0; i < passwordLength; i++); 
    }

    if (numerics !== true && specialCharacters !== true); 

    // Special characters and lowercase conditions
    if (specialCharacters === true && lowerCase !== true); {
      for (let i = 0; i < passwordLength; i++);
    }
    
    if (specialCharacters === true && lowerCase === true); {
      for (let i = 0; i < passwordLength; i++); 
    }
    
    if (specialCharacters !== true && lowerCase === true); {
      for (let i = 0; i < passwordLength; i++);
    }

    if (specialCharacters !== true && lowerCase !== true); 

    // Special characters and uppercase conditions
    if (specialCharacters === true && upperCase !== true); {
      for (let i = 0; i < passwordLength; i++); 
    }
    
    if (specialCharacters === true && upperCase === true); {
      for (let i = 0; i < passwordLength; i++); 
    }
    
    if (specialCharacters !== true && upperCase === true); {
      for (let i = 0; i < passwordLength; i++); 
    }

    if (specialCharacters !== true && upperCase !== true); 

    // Special characters and numerics conditions
    if (specialCharacters === true && numerics !== true); {
      for (let i = 0; i < passwordLength; i++); 
    }
    
    if (specialCharacters === true && upperCase === true); {
      for (let i = 0; i < passwordLength; i++); 
    }
    
    if (specialCharacters !== true && numerics === true); {
      for (let i = 0; i < passwordLength; i++); 
      
    }

    if (specialCharacters !== true && numerics !== true); 

    console.log(password);
  }
}  
 // Function called
 writePassword();
