// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'


// second solution #2
function capitalize(str) { 
  // create an empty string
  let capStr = '';
  // for each character in the string
  let firstChar = str[0].toUpperCase();
  capStr += firstChar;
 
  for (var i = 1; i < str.length; i++) {
    // if character to the left a space
    if (str[i - 1] === ' ') {
      // capitilzaie and add it to result
      var capChar = str[i].toUpperCase();
      capStr += capChar;
    } else { // otherwise
      // add to result
      capStr += str[i];
    }
  }
  return capStr;
}


// // first solution
// function capitalize(str) {
//  // make an empty array words
//  let words = [];
//  // split the input string by spaces to get an array
//  let arr = str.split(' ');
//  // for each word in the array
//   for (var i = 0; i < arr.length; i++) {
//      // uppercase the first letter of the word
//     var firstChar = arr[i][0].toUpperCase();
//     // join the first letter with the rest of the string
//     var restofWord = arr[i].slice(1);
//     var word = firstChar + restofWord;
//     // push result into words array
//     words.push(word);
//  }
//  // join words into a string, return it
// return words.join(' ')
  
// }

module.exports = capitalize;
