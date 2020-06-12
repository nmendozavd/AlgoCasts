// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// solution #2 with helper methods
function anagrams(stringA, stringB) {
  // cleaning up strings, in order to sort, must be array, so convery string to array, and back to string 
  var stringA = stringA.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
  var stringB = stringB.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
  // compare if strings are the same, if not, not an anagram
  if (stringA !== stringB) {
    return false;
  }
  return true;
}

// my solution/ solution #1
// function anagrams(stringA, stringB) {
//   // remove spaces and non-letter characters with regex, and lower case strings
//   var stringA = stringA.replace(/[^\w]/g, '').toLowerCase();
//   var stringB = stringB.replace(/[^\w]/g, '').toLowerCase();

//   // create character map of string
//   let objStrA = {};

//   for (var i = 0; i < stringA.length; i++) {
//     if (objStrA[stringA[i]] === undefined) {
//       objStrA[stringA[i]] = 1;
//     } else {
//       objStrA[stringA[i]]++;
//     }
//   }
  
//   // create character map of stringB
//   let objStrB = {};
  
//   for (var i = 0; i < stringB.length; i++) {
//     if(objStrB[stringB[i]] === undefined) {
//       objStrB[stringB[i]] = 1;
//     } else {
//       objStrB[stringB[i]]++;
//     }
//   }
 
//   // compare length of keys, if not equal, return false > we know that it is not an anagram
//   if (Object.keys(objStrA).length !== Object.keys(objStrB).length ) {
//     return false;
//   }
    
//   // keys are equal, now compare values, if one value is not equal, then not an anagram
//   for (let char in objStrA) {
//     if (objStrA[char] !== objStrB[char]) {
//       return false
//     } 
//   }
//   // all keys AND values are equal, return true
//   return true;
// }

module.exports = anagrams;
