/*
Write a function, isUnivalueList, that takes in the head of a linked list as
an argument. The function should return a boolean indicating whether or not
the linked list contains exactly one unique value.

You may assume that the input list is non-empty.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// 1. Create a const variable to store linked list's first value.
// 2. Create a current variable and set it to head of linked list.
// 3. Iterate through the Linked List with a While loop
// 4. if (current.val !== currentVal) return false
// 5. Increment currentNode forward by setting current = current.next
// 6. If currentNode reaches the end of the Linked List input, return true;

// n = # of nodes in linked list
// Time: O(n) because we need to iterate through the entire linked list
// Space: O(1) no new space is stored in memory.

const isUnivalueList = (head) => {
  const currentVal = head.val;
  let currentNode = head;
  while (currentNode !== null) {
    if (currentNode.val !== currentVal) return false;
    currentNode = currentNode.next;
  }
  return true;
};

const a = new Node(7);
const b = new Node(7);
const c = new Node(7);
a.next = b;
b.next = c;
// 7 -> 7 -> 7
console.log(isUnivalueList(a)); // true

const u = new Node(2);
const v = new Node(2);
const w = new Node(3);
const x = new Node(3);
const y = new Node(2);
u.next = v;
v.next = w;
w.next = x;
x.next = y;
// 2 -> 2 -> 3 -> 3 -> 2
console.log(isUnivalueList(u)); // false

module.exports = {
  isUnivalueList
};
