/*
Write a function, linkedPalindrome, that takes in the head of a linked list as an
argument. The function should return a boolean indicating whether or not the
linked list is a palindrome. A palindrome is a sequence that is the same both
forwards and backwards.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const linkedPalindrome = (head) => {
  let current = head;
  const array = [];
  while (current !== null) {
    array.push(current.val);
    current = current.next;
  }
  // return array;
  let left = 0;
  let right = array.length-1;
  while (left <= right) {
    if (array[left] !== array[right]) {
      return false;
    }
    left += 1;
    right -= 1;
  }
  return true;
};


// const a = new Node(3);
// const b = new Node(2);
// const c = new Node(7);
// const d = new Node(7);
// const e = new Node(2);
// const f = new Node(3);

// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;
// e.next = f;

const a = new Node(3);
const b = new Node(2);
const c = new Node(4);

a.next = b;
b.next = c;

// 3 -> 2 -> 4
console.log(linkedPalindrome(a)); // false

// 3 -> 2 -> 7 -> 7 -> 2 -> 3
// console.log(linkedPalindrome(a)); // true













module.exports = {
  linkedPalindrome
};