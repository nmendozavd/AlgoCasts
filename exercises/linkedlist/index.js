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
    // create counter var
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
}

module.exports = { Node, LinkedList}
