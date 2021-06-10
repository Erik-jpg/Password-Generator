

let passwordLength = parseInt(
    prompt("Please choose a password length between 8 and 128")
  );
  while (passwordLength < 8 || passwordLength > 128 || !passwordLength) {
    alert("Please enter correct password length");
    passwordLength = parseInt( 
    );
  }
  let specialCharacters = confirm("Would you like to use special characters, such as: (.,-=!@#$)?");
  let capitalizedCharacters = confirm("Would you like to use capitalized letters, such as: (ABCDEFGH)?");
  let lowercaseCharacters = confirm("Would you like lowercase letters, such as: (abcdefgh)?");
  let numericCharacters = confirm("Would you like to include numbers, such as: (12345678)?");
  while (!specialCharacters && !capitalizedCharacters && !lowercaseCharacters && !numericCharacters) {
    alert("You need to chose at least one.");
    specialCharacters = confirm("Would you like special characters(!@#$)?");
    capitalizedCharacters = confirm("Would you like uppercase  characters(ABCD)?");
    lowercaseCharacters = confirm("Would you like lowercase characters(abcd)?");
    numericCharacters = confirm("Would you like to include numbers(1234)?");
  }
  const upperCaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  const lowerCaseArray = ['a', 'b', 'c', 'd', 'e','f', 'g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','y','z'];
  const specialArray = ['!', '@', '#', '$', '%','^','&','*','(',')','-','_','=','+','[',']','{','}',';',':','"',',','<','.','>','?','/'];
  const numbersArray = ['1', '2', '3', '4', '5','6','7','8','9','0'];
  let generatePassword = (maxNum) => {
    let array = [];
    for (let index = 0; index < maxNum; index++) {
      let rand = Math.floor(Math.random() * 4);
      while (
        (!capitalizedCharacters && rand === 0) ||
        (!lowercaseCharacters && rand === 1) ||
        (!specialCharacters && rand === 2) ||
        (!numericCharacters && rand === 3)
        ){
          rand = Math.floor(Math.random() * 4); 
      }
      if (capitalizedCharacters && rand === 0) {
          let upperCaseRand = Math.floor(Math.random() * upperCaseArray.length);
          array.push(upperCaseArray[upperCaseRand]);
        }
      if (lowercaseCharacters && rand === 1) {
        let lowerCaseRand = Math.floor(Math.random() * lowerCaseArray.length);
        array.push(lowerCaseArray[lowerCaseRand]);
      }
      if (specialCharacters && rand === 2) {
        let specialRand = Math.floor(Math.random() * specialArray.length);
        array.push(specialArray[specialRand]);
      }
      if (numericCharacters && rand === 3) {
        let numbersRand = Math.floor(Math.random() * numbersArray.length);
        array.push(numbersArray[numbersRand]);
      }
    }
    return array;
  };
  
  // Assignment Code
  let generateBtn = document.querySelector("#generate");
  
  // Write password to the #password input
  function writePassword() {
    let password = generatePassword(passwordLength).join("");
    let passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  generateBtn.addEventListener("click", writePassword);