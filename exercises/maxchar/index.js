// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let maxObj = {};

    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      let createObj = (maxObj[char] === undefined) ? maxObj[char] = 1: maxObj[char]++;
    }

    let maxNum = 0;
    let maxLetter;

    for (let char in maxObj) {
      if (maxObj[char] > maxNum) {
        maxNum = maxObj[char];
        maxLetter = char;
      }
    }

    return maxLetter;
  

}

module.exports = maxChar;
