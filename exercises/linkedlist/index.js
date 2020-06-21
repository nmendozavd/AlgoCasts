// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor (data, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor () {
    this.head = null
  }

  insertFirst (data) {
    const node = new Node(data, this.head)
    this.head = node
  }

  size () {
    // create counter 
    let count = 0
    let node = this.head
    // run unitl end of linked list 
    while (node !== null) {
      // increment count
      count++
      // move onto next by assigning 'node' to next node
      node = node.next
    }

    return count
  }

  getFirst () {
    return this.head
  }

  getLast () {
    // edge case, with no nodes
    if (this.head === undefined) {
      return null
    }

    let node = this.head
    // iterate through linked list
    while (node !== null) {
      // if the next node points to null, we know it's the last node
      if (node.next === null) {
        // return the last node
        return node
      }
      // if not, keep  iterating 
      node = node.next
    }
  }

  clear () {
    this.head = null
  }

  removeFirst () {
    // edge case with no nodes
    if (this.head === null) {
      return
    }
    // point this.head to the next node 
    this.head = this.head.next
  }

  removeLast () {
    // edge case if linked list is empty
    if (this.head === null) {
      return
    }
    // edge case if only one node exists
    if (this.head.next === null) {
      // remove first node by pointing this.head to null
      this.head = null
      // end method
      return
    }
    // node is set to second node
    let node = this.head.next
    // previous is set to first node
    let previous = this.head
    // while the next node is not null, we know it's not the last node 
    while (node.next !== null) {
      // set previous to node before node.next
      previous = node
      // set node to the next node (like chaining .next)
      node = node.next
    }
    // once node.next is null, we know it's the last, so set next to null to remove last node
    previous.next = null
  }

  insertLast (data) {
    // create new node and pass in data
    const node = new Node(data)
    // edge case if no nodes exist 
    if (this.head === null) {
      this.head = node
      node.next = null
      return
    }
    // get last node from getlast() method
    let last = this.getLast()
    // set last to new node
    last.next = node
    // set last node to null
    node.next = null
  }

  getAt (index) {
    // edge case if no nodes exist
    if (this.head === null) {
      return null
    }
    // set node to head
    let node = this.head
    // create count
    let count = 0
    // run while a node exist
    while (node) {
      // if count equals index
      if (count === index) {
        // return that node
        return node
      }
      // iterate through nodes
      node = node.next
      // increment count
      count++
    }
    // return null if index is out of bounds
    return null
  }

  removeAt (index) {
    // edge case, no nodes
    if (this.head === null) {
      return;
    }
    // edge case, removing first node, point head to second node
    if (index === 0) {
      this.head = this.head.next;
    }
    // get index previous current node
    const previous = this.getAt(index - 1);
    // edge case, out of bounds, and when previous.next points to null
    if (previous === null || previous.next === null) {
      return null;
    }
    // point previous to node ahead of current node
    previous.next = previous.next.next;

  }
  
  insertAt(data, index) {
    // create a new node at provided index, if out of bounds, add to end of list

    // edge case with no nodes 
    if (this.head === null) {
      this.head = new Node(data);
      return;
    }
    // first element
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    // insert node anywhere in list || to get insert index that is out of bounds
    // get previous node
    const previous = this.getAt(index - 1) || this.getLast();
    // create new node, pass data and the next node
    const node = new Node(data, previous.next);
    // connect previous node to new node
    previous.next = node;
  }

}

module.exports = { Node, LinkedList}
