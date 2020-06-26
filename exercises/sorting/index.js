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
    let indexofMin = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexofMin]) {
        indexofMin = j;
      }
    }
    if (i !== indexofMin) {
      let temp = arr[indexofMin];
      arr[indexofMin] = arr[i];
      arr[i] = temp;
    }
  }
    return arr;
}

function mergeSort (arr) {
}

function merge (left, right) {
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge}
