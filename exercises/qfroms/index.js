// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue()
//     q.add(1)
//     q.add(2)
//     q.peek()  // returns 1
//     q.remove() // returns 1
//     q.remove() // returns 2

const Stack = require('./stack')

class Queue {
  // create stacks here
  constructor () {
    this.first = new Stack()
    this.second = new Stack()
  }
  // add record to first stack
  add (record) {
    this.first.push(record)
  }
  // remove record in queue fashion
  remove () {
    // move all records from first stack to second stack
    while (this.first.peek() !== undefined) {
      const record1 = this.first.pop()
      this.second.push(record1)
    }
    // save record that needs to be removed
    const record = this.second.pop()
    // move back records to first stack
    while(this.second.peek() !== undefined) {
      const record2 = this.second.pop()
      this.first.push(record2)
    }
    // return record that was suppose to be removed
    return record
  }
  // same as above, but not removing recording (popping)
  peek () {
    while (this.first.peek() !== undefined) {
      const record1 = this.first.pop()
      this.second.push(record1)
    }

    const record = this.second.peek()

    while (this.second.peek() !== undefined) {
      const record2 = this.second.pop()
      this.first.push(record2)
    }
    return record;
  }
}

module.exports = Queue
