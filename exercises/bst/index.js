// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor (data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert (data) {
    // check to see if data is less than root data and if this.left has a node
    if (data < this.data && this.left !== null) {
      // delegate data into this.left node recursively
      this.left.insert(data)
    } else if (data < this.data) {
      // insert node into this.left
      this.left = new Node(data)
    // same for the right side of bst
    } else if (data > this.data && this.right !== null) {
      this.right.insert(data)
    } else if (data > this.data) {
      this.right = new Node(data)
    }
  }

  contains (data) {
    // data equals this.data, return this (entire node)
    if (this.data === data) {
      return this;
    }
    // if data is less than this.data and node exists, go to the left
    if (data < this.data && this.left !== null) {
      // recurse and return node
      return this.left.contains(data)
    } else if (data > this.data && this.right !== null) {
      return this.right.contains(data) 
    } 
  
    return null
  }

}

module.exports = Node
