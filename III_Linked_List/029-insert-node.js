/*
Write a function, insertNode, that takes in the head of a linked list, a value,
and an index. The function should insert a new node with the value into the
list at the specified index. Consider the head of the linked list as index 0.
The function should return the head of the resulting linked list.

Do this in-place.

You may assume that the input list is non-empty and the index is not greater
than the length of the input list.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// 3. set current = head:
// 4. set currentIdx = 0:

// 5. While current !== null, do somethin:
// 6. if (currentIdx === index), ... previous.next = new Node(value)
// 6a. previous = previous.next:
// 6b. previous.next = current:

// 7. Else, previous.next = current:
// 8. current = curent.next:

// 9. Return dummYHead;

const insertNode = (head, value, index) => {
  let previous = head;
  let current = head.next;
  let currentIdx = 1;

  if (index === 0) {
    let newHead = new Node(value);
    newHead.next = head;
    return newHead;
  }
  
  while (current !== null) {
    if (currentIdx === index) {
      previous.next = new Node(value);
      previous = previous.next;
      previous.next = current;
      return head;
    }
    previous = current;
    current = current.next;
    currentIdx += 1;
  }
  
  if (currentIdx === index) {
    previous.next = new Node(value);
    return head;
  }
  // return head;
};

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
a.next = b;
b.next = c;
c.next = d;
// a -> b -> c -> d
console.log(insertNode(a, 'x', 2));
// a -> b -> x -> c -> d

/*
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
a.next = b;
b.next = c;
c.next = d;
// a -> b -> c -> d
console.log(insertNode(a, 'v', 3));
// a -> b -> c -> v -> d

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
a.next = b;
b.next = c;
c.next = d;
// a -> b -> c -> d
console.log(insertNode(a, 'm', 4));
// a -> b -> c -> d -> m

const a = new Node("a");
const b = new Node("b");
a.next = b;
// a -> b
console.log(insertNode(a, 'z', 0));
// z -> a -> b 
*/

module.exports = {
  insertNode
};

