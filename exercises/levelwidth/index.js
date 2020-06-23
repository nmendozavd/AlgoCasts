// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth (root) {
  // create a count with 0 as it's first index
  const count = [0]
  // crate arr with root, and extra stopper
  const arr = [root, null]
  // loop through arr as long as it's greater than 1
  while (arr.length > 1) {
    // get first node
    const node = arr.shift();
    // if node is stopper
    if (node === null) {
      // at 0 to count arr
      count.push(0);
      // add stopper to arr
      arr.push(null);
    } else {  
      // otherwise add nodes children
      arr.push(...node.children);
      // and increment the last element in count arr
      count[count.length - 1]++;
    }
  }
  // return arr with counts
  return count
}

module.exports = levelWidth
