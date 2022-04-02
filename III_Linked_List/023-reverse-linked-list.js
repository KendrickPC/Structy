/*
Write a function, reverseList, that takes in the head of a linked list as an argument. The function should reverse the order of the nodes in the linked list in-place and return the new head of the reversed linked list.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
// 1. Create a dummy node and set it to null
// 2. Set current to head
// 3. Set next node as a placeholder.
// 4. Set current.next to dummy
// 5. Move current to placeholder
// 6. Return new current.

// Time: O(n) because we need to loop through the entire linked list
// Space: O(1) No storage added. 

const reverseList = (head) => {
  let current = head;
  let previous = null;
  while (current !== null) {
    let next = current.next;

    current.next = previous;
    
    previous = current;
    current = next;
  }
  return previous;
};

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
// a -> b -> c -> d -> e -> f
// null <- a   b -> c -> d -> e -> f
// prev  cur next
console.log(reverseList(a)); // f -> e -> d -> c -> b -> a

const x = new Node("x");
const y = new Node("y");
x.next = y;
// x -> y
console.log(reverseList(x)); // y -> x

const p = new Node("p");
// p
console.log(reverseList(p)); // p











module.exports = {
  reverseList
};