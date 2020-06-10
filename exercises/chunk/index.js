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

  // convert to string, splice?
  let chunked = [];
  
  // if last element does not exist or equals size

  for (var i = 0; i < array.length; i++) {
    let last = chunked[chunked.length - 1];
    if (last === undefined || chunked.length === size) {
      chunked.push([array[i]])
    } else {
      last.push(array[i])
    }
  }
  
  return chunked;
 
  
}

module.exports = chunk;
