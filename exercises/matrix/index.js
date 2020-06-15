// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  // create an empty arr called results
  let results = [];
  // push subarrays into results;
  for (let i = 0; i < n; i++) {
    results.push([]);
  }
  // create counter var, starting at 1
  let count = 1;
  
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;
  // as long as (start column <= end column) and start row <= end row
  while (startColumn <= endColumn && startRow <= endRow) {
     // loop from start column to end column > Top Row
    for (let i = startColumn; i <= endColumn; i++) {
      // at results[start_row][i] assign counter var
      results[startRow][i] = count;
      // increment count
      count++;
     }
     // increment start row
     startRow++;
     
    
    // loop from start to end row > Right Column
    for (let i = startRow; i <= endRow; i++) {
      // at [i][end_column] assign counter variable
      results[i][endColumn] = count;
      // increment counter
      count++;
    }
    endColumn--;
    // decrement end column
    // ..repeat for other two sides > Bottom Row
    for (let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = count;
      count++;
    }
    endRow--;
    // Start column
    for (let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = count;
      count++;
    }
    startColumn++
  }
  return results;

}

module.exports = matrix;
