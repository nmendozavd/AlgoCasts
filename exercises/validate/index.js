// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
  // node.data should not be greater than max, node.data should not be less than min, if they are something is wrong
  // left hand side, is node greater than max?
  if (max !== null && node.data > max) {
    return false
  }
  // right hand side, is node less than min?
  if (min !== null && node.data < min) {
    return false;
  }
  
  // left side, recursion
  if (node.left !== null && !validate(node.left, min, node.data)) {
    return false;
  }
  // right side recursion 
  if (node.right !== null && !validate(node.right, node.data, max)) {
    return false;
  }

  return true;
}

module.exports = validate;
