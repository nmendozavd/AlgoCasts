// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor (data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor () {
    this.head = null;
  }

  insertFirst (data) {
    const node = new Node(data, this.head);
    this.head = node;
  }

  size () {
    // create counter 
    let count = 0;
    let node = this.head;
    // run unitl end of linked list 
    while (node !== null) {
      // increment count
      count++;
      // move onto next by assigning 'node' to next node
      node = node.next;
    }

    return count;
  }

  getFirst () {
    return this.head;
  }

  getLast () {
    // edge case, with no nodes
    if (this.head === undefined) {
      return null;
    }

    let node = this.head
    // iterate through linked list
    while (node !== null) {
      // if the next node points to null, we know it's the last node
      if (node.next === null) {
        // return the last node
        return node;
      }
      // if not, keep  iterating 
      node = node.next;
    }
  }

  clear () {
    this.head = null;
  }

  removeFirst () {
    // edge case with no nodes
    if (this.head === null) {
      return;
    }
    // point this.head to the next node 
    this.head = this.head.next;
  }

  removeLast () {
    // edge case if linked list is empty
    if (this.head === null) { 
      return;
    }
    // edge case if only one node exists
    if (this.head.next === null) {
      // remove first node by pointing this.head to null
      this.head = null;
      // end method
      return;
    }
    // node is set to second node
    let node = this.head.next;
    // previous is set to first node
    let previous = this.head;
    // while the next node is not null, we know it's not the last node 
    while (node.next !== null) {
      // set previous to node before node.next
      previous = node; 
      // set node to the next node
      node = node.next;
    }
    // once node.next is null, we know it's the last, so set next to null to remove last node
    previous.next = null;
  }

}

module.exports = { Node, LinkedList}
