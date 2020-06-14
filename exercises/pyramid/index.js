// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  // get midPoint of array for each row
  const midPoint = Math.floor((2 * n - 1) / 2);
  // from o to n (iterate through rows)
  for (let row = 0; row < n; row++) {
    // create an empty string, 'level'
    let level = '';
    // from 0 to two times n - 1 
    for (let column = 0; column < (n * 2) - 1; column++) {
      // 
      if (midPoint - row <= column && midPoint + row >= column) {
        level += '#';
      } else { // otherwise add space to 'level'
        level += ' ';
      }
    }
    //console.log 'level'
    console.log(level);
  }  
}

module.exports = pyramid;
