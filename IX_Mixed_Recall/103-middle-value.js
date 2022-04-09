/*
Write a function, middleValue, that takes in the head of a linked list as
an argument. The function should return the value of the middle node in
the linked list. If the linked list has an even number of nodes, then
return the value of the second middle node.

You may assume that the input list is non-empty.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const middleValue = (head) => {
  const array = [];
  let current = head;
  while (current !== null) {
    array.push(current.val);
    current = current.next;
  } 
  const middleIdx = Math.floor(array.length / 2)
  return array[middleIdx];
};

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// a -> b -> c -> d -> e -> f
console.log(middleValue(a)); // d














module.exports = {
  middleValue
};