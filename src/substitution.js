// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  //making a function that takes in an string and put them in order according to the alphabet
  function makeSubObject (alphabet) {
    const substitutionObject = {'a':'', 'b':'', 'c':'', 'd':'', 'e':'', 'f': '', 'g':'', 'h': '', 'i': '', 
    'j': '', 'k': '', 'l':'', 'm':'', 'n':'', 'o':'', 'p':'', 'q':'', 'r':'', 's':'', 't':'', 'u':'', 
    'v':'', 'w':'', 'x':'', 'y':'', 'z':'',' ': ' '}
    for (let i =0; i<alphabet.length; i++){
      for(let letter in substitutionObject) {
        if (substitutionObject[letter] === ''){
          substitutionObject[letter] = alphabet[i];
          break 
        }
      }
    }
    return substitutionObject
  }

  function substitution(input, alphabet = '', encode = true) {
    //check if the alphabet string is exactly 26 characters
    if (alphabet.length !== 26) return false;
    //check if there are any duplicates characters in the alphabet string
    for(let i = 0; i < alphabet.length; i++)
        for(let j = i + 1; j < alphabet.length; j++)
            if (alphabet[i] === alphabet[j])
                return false;
    //initialize the codeString variable
    let codeString = '';
    //initialize our variable to create the object we will access to code/decode
    const substitutionObject = makeSubObject(alphabet);
    input = input.toLowerCase();
    //check to see if we are encoding or decoding
    if (encode === true) {
      for (let i = 0; i<input.length; i++){
        const letter = input[i]
        //access the substitution value from our object
        const decodedLetter = substitutionObject[letter]
        //add the substitution value to our string we initialized prior
        codeString += decodedLetter;
      }
      return codeString;
    }
    if (encode === false) {
      for(let i= 0; i<input.length; i++){
        const letter = input[i];
        //use find to find the matching value, then keys object.keys to access the key of that value
        const decodedLetter = Object.keys(substitutionObject).find(key => substitutionObject[key] === letter);
        //add the key to the string we initialized prior
        codeString += decodedLetter;
      }
      return codeString;
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
