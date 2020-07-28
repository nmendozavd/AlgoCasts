// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {
  // slow and fast variable point to first node
  let slow = list.head;
  let fast = list.head;
  // while next two nodes are defined
  while (fast.next && fast.next.next) {
    // move slow one node, fast two nodes
    slow = slow.next;
    fast = fast.next.next;
    // if they point to the same node, circular
    if (slow === fast) {
      return true;
    }
  }
  // otherwise once fast points to null, we don't have a circular list
  return false;


}

module.exports = circular;
