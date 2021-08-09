// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // what if i want to test a different code in my code even though I already have functioning code
  const polybiusObject = {'a':'11', 'b':'21', 'c':'31', 'd':'41', 'e':'51', 'f': '12', 'g':'22', 'h': '32', 'i': '42', 
  'j': '42', 'k':'52', 'l':'13', 'm':'23', 'n':'33', 'o':'43', 'p':'53', 'q':'14', 'r':'24', 's':'34', 't':'44', 'u':'54', 
  'v':'15', 'w':'25', 'x':'35', 'y':'45', 'z':'55', ' ':' '}
  function polybius(input, encode = true) {
    // your solution code here
    let output = "";
    if (encode === true) {
      const inputString = input.toLowerCase();
      for (let i=0; i<inputString.length;i++){
        const foundLetter = inputString[i];
        const foundCode = polybiusObject[foundLetter];
        output += foundCode;
      }
    }
    if (encode === false) {
      const inputString = input.split(" ").join("  ");
      if (inputString.length % 2 !== 0) return false;
      const splitArray = inputString.split()
      for (let i = 0; i<inputString.length; i+=2) {
        const joinedArray = splitArray.join('').slice(i,i+2);
        let decodedLetter = " ";
        //special case if equals 42 it could be two numbers
        if (joinedArray === "42") decodedLetter = "(i/j)";
        if (joinedArray !== "42" && joinedArray !== "  ") {
        decodedLetter = Object.keys(polybiusObject).find(key => polybiusObject[key] === joinedArray);
        }
        output += decodedLetter;
      }
    }
    return output;
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
