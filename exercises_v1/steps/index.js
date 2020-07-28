// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// recursion solution
// function steps (n, row = 0, stair = '') {
//   if (n === row) {
//     return;
//   }

//   if (n === stair.length) {
//     console.log(stair);
//     steps(n, row + 1);
//     return;
//   }

//   if (stair.length <= row) {
//     stair += '#';
//   } else {
//     stair += ' ';
//   }

//   steps(n, row, stair);

// }

// iterable solution 
function steps(n) {

  // from 0 to n (iterate through rows)
  for (let row = 0; row < n; row++) {
    // create an empty string stair
    let stair = '';
    // from 0 to n (iterate through columns)
    for (let column = 0; column < n; column++) {
      // if current column is equal to or less than row
      if (column <= row) {
        // add a # to stair
        stair += '#'
      } else {
        // otherwise add a space
        stair += ' ';
      }
    }
    // console log stair inside for loop
    console.log(stair);
  }
}

module.exports = steps;
