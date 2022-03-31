/*
Write a function, sumList, that takes in the head of a linked list containing
numbers as an argument.
The function should return the total sum of all values in the linked list.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// 1. Create a sum variable
// 2. Set currentNode = head;
// 3. While current !== null;
// 4. Add current.val to sum...
// 5. Move current node forward to next node.
// 6. Return sum.

// n = # of nodes
// Time: O(n)
// Space O(1)

const sumList = (head) => {
  let sum = 0;
  let currentNode = head;
  while (currentNode !== null) {
    sum += currentNode.val;
    currentNode = currentNode.next;
  }
  return sum;
};

const a = new Node(2);
const b = new Node(8);
const c = new Node(3);
const d = new Node(-1);
const e = new Node(7);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

// 2 -> 8 -> 3 -> -1 -> 7
console.log(sumList(a)); // 19
const x = new Node(38);
const y = new Node(4);

x.next = y;
// 38 -> 4
console.log(sumList(x)); // 42

const z = new Node(100);
// 100
console.log(sumList(z)); // 100

console.log(sumList(null)); // 0
