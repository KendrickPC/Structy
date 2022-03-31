/*
Write a function, linkedListFind, that takes in the head of a linked list and
a target value. The function should return a boolean indicating whether or not
the linked list contains the target.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// 1. Set currentNode = head
// 2. while currentNode !== null
// 3. if target === currentNode, return true
// 4. progress currentNode forward
// 5. return false at the end, when finished iterating through head.

// Time: O(n) because we need to loop through the entire linked list
// Space: O(1) No storage added. 

const linkedListFind = (head, target) => {
  let currentNode = head;
  while(currentNode !== null) {
    if (currentNode.val === target) return true;
    currentNode = currentNode.next;
  }
  return false;
};

// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");

// a.next = b;
// b.next = c;
// c.next = d;
// // a -> b -> c -> d
// console.log(linkedListFind(a, "c")); // true

// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");
// a.next = b;
// b.next = c;
// c.next = d;
// // a -> b -> c -> d
// console.log(linkedListFind(a, "d")); // true

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
a.next = b;
b.next = c;
c.next = d;
// a -> b -> c -> d
console.log(linkedListFind(a, "q")); // false

// const node1 = new Node("jason");
// const node2 = new Node("leneli");
// node1.next = node2;
// // jason -> leneli
// console.log(linkedListFind(node1, "jason")); // true

// const node1 = new Node(42);
// // 42
// console.log(linkedListFind(node1, 42)); // true

// const node1 = new Node(42);
// // 42
// console.log(linkedListFind(node1, 100)); // false















module.exports = {
  linkedListFind
};