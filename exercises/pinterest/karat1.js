/*

You are running a classroom and suspect that some of your students are passing around the answers to multiple choice questions disguised as random strings.

Your task is to write a function that, given a list of words and a string, finds and returns the word in the list that is scrambled up inside the string, if any exists.There will be at most one matching word.The letters don't need to be contiguous.

Example:
words = ['cat', 'dog', 'bird', 'car', 'ax', 'baby']
string1 = 'tcabnihjs'
find_embedded_word(words, string1) -> cat

string2 = 'tbcanihjs'
find_embedded_word(words, string2) -> cat

string3 = 'baykkjl'
find_embedded_word(words, string3) -> None

string4 = 'bbabylkkj'
find_embedded_word(words, string4) -> baby

n = number of words in `words`
m = maximal string length of each word


I: array of words, and string
0: the actual word or 'None'
C: none
E: none
*/

"use strict";

const words = ["cat", "dog", "bird", "car", "ax", "baby"];
const string1 = "tcabnihjs";
const string2 = "tbcanihjs";
const string3 = "baykkjl";
const string4 = "bbabylkkj";
const string5 = "card";


// TODO --- Write your function

function find_embedded_words(words, string) {
  // create helper function that creates object for each word in words array
  function reCreatObj (str) {
    let letters = {};
    for (let i = 0; i < string.length; i++) {
      let key = string[i];
      if (letters[key]) {
        letters[key]++;
      } else {
        letters[key] = 1;
      }
    }
    return letters;
  }
  
  // loop through words
  for (let i = 0; i < words.length; i++) {
    // each word at index
    let word = words[i];
    // call helper function every time we loop a new word to create new object of word count
    let letters = reCreatObj(string);
    // loop through letters
    for (let j = 0; j < word.length; j++) {
      // grab each letter
      let letter = word[j];
      // check if letter exists
      if (letters[letter]) {
        // decrement letter count if it does
        letters[letter]--;
        // check if we are at end of word length, if so return word
        if (j === word.length - 1) return word;
      } else {
        // otherwise if it does not exist, break loop
        break;
      }
    }
  }
  // return null if word is not found
  return null;
}


console.log(find_embedded_words(words, string1))
console.log(find_embedded_words(words, string2))
console.log(find_embedded_words(words, string3))
console.log(find_embedded_words(words, string4))
console.log(find_embedded_words(words, string5))
// TODO --- Call your function with the test cases from above