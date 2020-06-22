// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List()
//    list.insertLast('a')
//    list.insertLast('b')
//    list.insertLast('c')
//    list.insertLast('d')
//    fromLast(list, 2).data // 'b'

function fromLast (list, n) {
  slow = list.head
  fast = list.head

  // increment fast by n times
  while (n > 0) {
    fast = fast.next;
    n--;
  }
  // increment fast and slow 1 node until fast.next is null
  while (fast.next !== null) {
    fast = fast.next;
    slow = slow.next;
  }
  // slow is node n times from last node.
  return slow
}

module.exports = fromLast
