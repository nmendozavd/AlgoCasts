// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
// convert to arr, reverse arr, join back on into string
return str.split('').reverse().join('');


}

module.exports = reverse;
