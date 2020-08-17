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

function steps(n) {

  // go by rows first
  for (let row = 0; row < n; row++) {
    let stairs = '';
    // go through columns now
    for (let column = 0; column < n; column++) {
      // pattern is in the columns / rows
      if (column <= row) {
        stairs += '#';
      } else {
        stairs += ' ';
      }
    }
    console.log(stairs);
  }


}

module.exports = steps;
