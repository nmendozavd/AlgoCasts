// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort (arr) {
  // find the largest record, and move it to right-hand side, and decrease the length by i
  // nested loops
  for (let i = 0; i < arr.length; i++) {
    // this loop goes until the last element, and decreases
    for (let j = 0; j < (arr.length - i - 1); j++) {
      if (arr[j] > arr[j + 1]) {
        // swap values, great goes to the right side
        // create temp to store element
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}

function selectionSort (arr) {
  // prove me wrong algo

  for (let i = 0; i < arr.length; i++) {
    let indexofMin = i

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexofMin]) {
        indexofMin = j
      }
    }
    if (i !== indexofMin) {
      let temp = arr[indexofMin]
      arr[indexofMin] = arr[i]
      arr[i] = temp
    }
  }
  return arr
}
// recrusive solution: until we have one element per array, which is sorted
function mergeSort (arr) {
  // edge case 
  if (arr.length === 1) {
    return arr;
  }
  // find center of arr
  const center = Math.floor(arr.length / 2);
  //split array into two equal halves
  const left = arr.slice(0, center);
  const right = arr.slice(center);

  // recurse, until arr.length is 1
  return merge(mergeSort(left), mergeSort(right));

}

function merge (left, right) {
  // take two separate sorted arrs, and merge them together 
  // create results arr
  const results = []
  // while there are still elements in both arrs
  while (left.length && right.left) {
    // if the first element the left half is less than first in right half
    if (left[0] < right[0]) {
      // shift the element left elements into results
      results.push(left.shift())
    } else {
      // otherwise shift the right element
      results.push(right.shift())
    }
  }
  // take everything from the arrays left over and put into results, order does not matter, because one array will be empty
  return [...results, ...left, ...right]
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge}
