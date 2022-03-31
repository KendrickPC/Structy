/*
Write a function, linkedListValues, that takes in the head of a linked list as an argument.
The function should return an array containing all values of the nodes in the linked list.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
// 1. Create a results array
// 2. Create a currentNode and start at head
// 3. While current !== null, iterate through... (go all the way through to the VERY END)
// 4. Move current forward.

// n = # of nodes
// Time: O(n) Just one iteration through.
// Space: O(n) created for results array storing all values of nodes linked to the head.


const linkedListValues = (head) => {
  // if (head === null) return [];
  const results = [];
  let current = head;
  while (current !== null) {
    results.push(current.val);
    current = current.next;
  }
  return results;
};


const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;
// a -> b -> c -> d
console.log(linkedListValues(a)); // -> [ 'a', 'b', 'c', 'd' ]

const x = new Node("x");
const y = new Node("y");
x.next = y;
// x -> y
console.log(linkedListValues(x)); // -> [ 'x', 'y' ]

const q = new Node("q");
// q
console.log(linkedListValues(q)); // -> [ 'q' ]

console.log(linkedListValues(null)); // -> [ ]

module.exports = {
  linkedListValues
};