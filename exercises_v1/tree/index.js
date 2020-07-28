// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor (data) {
    this.data = data;
    this.children = [];
  }

  add (data) {
    // create new node, pass data
    const node = new Node(data);
    // push node into into children arrays
    this.children.push(node);
  }

  remove (data) {
    //   // solution set children equal to filter method 
    //  this.children = this.children.filter(node => {
    //     // remove any node data that is not equal to data
    //    return node.data !== data
    //  }) 

    // my solution using a for loop
    for (let i = 0; i < this.children.length; i++) {
      if (this.children[i].data === data) {
        this.children.splice(this.children[i].data, 1);
      }
    }
  }
}

class Tree {
  constructor () {
    this.root = null;
  }

  traverseBF (fn) {
    // create array with root node
    let children = [this.root];
    // iterate through array, while arr has elements 
    while (children.length !== 0) {
      let node = children.shift();
      // ...operator, push all elements in array, not entire array or use for loop and push
      children.push(...node.children);
      // call function on node
      fn(node);
    }
  }

  traverseDF (fn) {
    let children = [this.root];

    while (children.length !== 0) {
      // remove first node
      let node = children.shift();
      // add children to start of array
      children.unshift(...node.children)
      // pass node into function
      fn(node);
    }
  }
}

module.exports = { Tree, Node}
