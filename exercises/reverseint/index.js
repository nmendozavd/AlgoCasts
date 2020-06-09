// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  // convert to string and reverse, and join back to string.
  var reverseNum = n.toString().split('').reverse().join('');
  // convert to num and mulitply by original sign of number
  return parseInt(reverseNum) * Math.sign(n);

}

module.exports = reverseInt;
