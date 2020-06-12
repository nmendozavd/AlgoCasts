// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
 // make an empty array words
 let words = [];
 // split the input string by spaces to get an array
 let arr = str.split(' ');
 // for each word in the array
  for (var i = 0; i < arr.length; i++) {
     // uppercase the first letter of the word
    var firstChar = arr[i][0].toUpperCase();
    // join the first letter with the rest of the string
    var restStr = arr[i].slice(1);
    // push result into words array
    var word = firstChar + restStr;
    words.push(word);
 }
 // join words into a string, return it
return words.join(' ')
  
}

module.exports = capitalize;
