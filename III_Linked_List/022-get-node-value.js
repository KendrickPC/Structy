/*
Write a function, getNodeValue, that takes in the head of a linked list and
an index. The function should return the value of the linked list at the
specified index.

If there is no node at the given index, then return null.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// 1. Create a current node variable and set it to head.
// 2. Create a current index variable and set it to 0
// 3. If index === currentIndex, return currentNode's value
// 4. While loop to progress currentNode forward
// 5. Return null at end of function

const getNodeValue = (head, index) => {
  let currentNode = head;
  let currentIdx = 0;
  while (currentNode !== null) {
    if (index === currentIdx) return currentNode.val;
    currentIdx += 1;
    currentNode = currentNode.next;
  }
  return null;
};

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
a.next = b;
b.next = c;
c.next = d;
// a -> b -> c -> d
console.log(getNodeValue(a, 2)); // 'c'
console.log(getNodeValue(a, 3)); // 'd'
console.log(getNodeValue(a, 7)); // null

const node1 = new Node("banana");
const node2 = new Node("mango");
node1.next = node2;
// banana -> mango
console.log(getNodeValue(node1, 0)); // 'banana'
console.log(getNodeValue(node1, 1)); // 'mango'

module.exports = {
  getNodeValue
};