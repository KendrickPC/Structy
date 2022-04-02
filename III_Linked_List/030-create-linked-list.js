/*
Write a function, createLinkedList, that takes in an array of values as an argument. The function should create a linked list containing each element of the array as the values of the nodes. The function should return the head of the linked list.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const createLinkedList = (values) => {
  if (values.length === 0) return [];
  const head = new Node(values[0]);
  let current = head;
  for (let i=1; i < values.length; i+=1) {
    current.next = new Node(values[i]);
    current = current.next;
  }
  return head;
};

console.log(createLinkedList(["h", "e", "y"]));
// h -> e -> y
console.log(createLinkedList([1, 7, 1, 8]));
// 1 -> 7 -> 1 -> 8
console.log(createLinkedList(["a"]));
// a
console.log(createLinkedList([]));
// null

module.exports = {
  createLinkedList
};
