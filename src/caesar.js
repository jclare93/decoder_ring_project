// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  
  function caesar(input, shift, encode = true) {
    //check to see if shift meets the criteria
    if (!shift || shift >25 || shift < -25) return false;
    //turn the input string into lowercase, so it makes it easy to compare with unicode
    let inputString = input.toLowerCase();
    //initialize the output variable
    let output = "";
    for (let i=0; i<inputString.length; i++){
      //check if the value is between a-z, or a different character
      if (inputString[i] >= 'a' && inputString[i] <= 'z') {
        //initialize codedLetter as the unicode value of the inputString at i
        let codedLetter =inputString.charCodeAt(i);
        //check to see if we are encoding, shifting forward, or decoding, shifting backward
        (encode === true)? codedLetter += shift: codedLetter = codedLetter-shift;
        /*we need to convert codedLetter back nonunicode in order for javascript to compare values
        if it goes past z, before a, we need to go to the other side of the alphabet*/
        if (String.fromCharCode(codedLetter) > 'z') codedLetter = codedLetter - 26;
        if (String.fromCharCode(codedLetter) < 'a') codedLetter += 26;
        //add the nonunicode value to the output
        output += String.fromCharCode(codedLetter);
      } else {
        output += inputString[i];
      }
    }
  return output;
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
