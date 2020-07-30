// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  let strA = stringA.replace(/[^a-z0-9]/gi, '').toLowerCase();
  let strB = stringB.replace(/[^a-z0-9]/gi, '').toLowerCase();

  //edge case
  if (strA.length !== strB.length) {
    return false;
  }
  

  // create objects
  let objA = {};

  for (let i = 0; i < strA.length; i++) {
    let char = strA[i];
    if (objA[char] === undefined) {
      objA[char] = 1;
    } else {
      objA[char]++;
    }
  }

  let objB = {};
  
  for (let i = 0; i < strB.length; i++) {
    let char = strB[i];
    if (objB[char] === undefined) {
      objB[char] = 1;
    } else {
      objB[char]++;
    }
  }


  for (let key in objA) {
    if (objA[key] !== objB[key]) {
      return false;
    }
  }
  return true;
}

module.exports = anagrams;
