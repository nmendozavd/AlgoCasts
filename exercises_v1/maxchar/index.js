// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

  // create empty object to keep track of used chars
  let objList = {};
  // loop through string
  for (var i = 0; i < str.length; i++) {
    // if key value does not exist, add it by setting value to 1, if it does exist, increment
    if (objList[str[i]] === undefined) {
      objList[str[i]] = 1;
    } else {
      objList[str[i]]++;
    }
  }

  // create max to compare maxChar and maxChar variable 
  let maxNum = 0;
  let maxChar;

  // loop through object list and return highest char used 
  for (var j in objList) {
    if (objList[j] > maxNum) {
      maxNum = objList[j];
      maxChar = j;
    }
    
  }
  // return maxChar 
  return maxChar;
}

module.exports = maxChar;
