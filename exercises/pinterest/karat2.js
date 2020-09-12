// You and your friends are all fans of the hit TV show ThroneWorld and like to discuss it on social media. Unfortunately, some of your friends don't watch every new episode the minute it comes out. Out of consideration for them you would like to obfuscate your status updates so as to keep them spoiler-free.

// You settle on a route cipher, which is a type of transposition cipher. Given a message and integers r and c, to compute the route encryption of the message:

// Write out the message row-wise in a grid with r rows and c columns
// then read the message column-wise.

// You are guaranteed that r * c == len(message).

// Your task is to write a function that, given a message, r, and c, returns the route encryption of the message.

// Example:

// message = One does not simply walk into Mordor

//, r = 6, c = 6

// O n e   d o
// e s   n o t
//   s i m p l
// y   w a l k
//   i n t o  
// M o r d o r

// -> "Oe y Mnss ioe iwnr nmatddoploootlk r"

// Other examples:

// message = "1.21 gigawatts!", r = 5, c = 3
// 1 . 2
// 1   g
// i g a
// w a t
// t s !

// -> "11iwt. gas2gat!"

// message = "1.21 gigawatts!", r = 3, c = 5 -> "1ga.it2gt1as w!"

// Complexity analysis:

// n: the length of the message
// I: string, num (row and columnds)
// O: string encrypted

const message1 = "One does not simply walk into Mordor";
const r1 = 6;
const c1 = 6;

const message2 = "1.21 gigawatts!";
const r2 = 5;
const c2 = 3;
const r3 = 3;
const c3 = 5;


function encrypt(str, rows, columns) {
  // create 2 dimensional matrix 
  let matrix = [];
  // convert str to arr
  let strArr = str.split('');
  let start = 0;
  let end = rows;

  // while end is less than rows * columns
  while(end <= rows * columns) {
    // slice array into subarrays and push into matrix array for 2d
    let slice = strArr.slice(start, end);
    matrix.push(slice);
    // increment start and end, adding rows to slice
    start = end;
    end = end + rows;
  }
  //console.log(matrix)
  // create new matrix that transposes array from original matrix to encrypt message
  let transposeArray = [];
  for (let i = 0; i < rows; i++) {
    transposeArray.push([]);
    for (let j = 0; j < columns; j++) {
      transposeArray[i].push(matrix[j][i]);
    }
  }
  //console.log(transposeArray)
  // create encrypt message 
  let message = '';
  // loop through matrix
  for (let i = 0; i < transposeArray.length; i++) {
    // at each row of matrix
    let row = transposeArray[i];
    // loop through arrays
    for (let j = 0; j < row.length; j++) {
      // add letters to message
      let letter = row[j];
      message += letter;
    }
  }
  return message;
}

console.log(encrypt(message1, r1, c1));
console.log(encrypt(message2, r2, c2));
console.log(encrypt(message2, r3, c3));


