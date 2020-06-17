// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3


function memoize(fn) {
  const cache = {};
  return function(...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;
    return result;
  };
}


// solution 2 - Recursive
function fib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

fib = memoize(fib);

// Runtime Complexity: Exponential Time (every increase in N, dramatic increase in time) - No no 
// Improve runtime with Memoization: store the arguments of each function call along with result. 


// // solution 1 - iterable 
// function fib(n) {
//   // create array with first nums
//   let nums = [0,1];
//   // create fibonacci array up unitl n
//   for (let i = 1; i < n; i++) {
//     // logic to create next num, push to array
//     let a = nums[i];
//     let b = nums[i - 1];
//     nums.push(a + b);
//   }
//   // return last num in array, which is n
//   return nums[nums.length - 1];
// }

// // Runtime Complexity: As n increases by 1, we have to do another calculation = linear 0(n)




module.exports = fib;
