// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList()
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

function midpoint (list) {
  let slow = list.head
  let fast = list.head
  // while the next two nodes from fast are defined
  while (fast.next && fast.next.next) {
    // move slow by one
    slow = slow.next
    // move fast by two nodes
    fast = fast.next.next
  }
  // once we get the while loop, we know slow is the midpoint
  return slow;
}

module.exports = midpoint
