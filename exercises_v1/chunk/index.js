// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  // create an empty array
  let chunked = [];
  // create index start at 0
  let index = 0;
  // while index is less than array.length
  while (index < array.length) {
     // push slice of length size from array into chunked
     chunked.push(array.slice(index, size + index))
    // add size to index
    index += size;
  }

  return chunked;
  
}

// first approach
// function chunk(array, size) {

//   // create empty array
//   let chunked = [];

//   // loop through provided array

//   for (var i = 0; i < array.length; i++) {
//     // set last to, last element in array
//     let last = chunked[chunked.length - 1];
//     // if last does not exist or the length equals size, push that element
//     if (last === undefined || last.length === size) {
//       chunked.push([array[i]])
//     } else {
//       // otherwise push the last element
//       last.push(array[i])
//     }
//   }
//   return chunked;
// }

module.exports = chunk;
