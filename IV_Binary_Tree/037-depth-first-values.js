/*
Write a function, depthFirstValues, that takes in the root of a binary tree.
The function should return an array containing all values of the tree in
depth-first order.

Hey. This is our first binary tree problem, so you should be liberal with
watching the Approach and Walkthrough. Be productive, not stubborn. -AZ
*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Recursive Approach...
// 1. Base case.  Root === null, return [];
// 2. Make recursive call to left, then recursive call to right.
// x. return itself (root, calls to left, calls to right);

// Time: O(n) because we need to traverse all nodes in the linked list
// Space: O(n) because we store all values an array that gets rebuilt for
// for every new value.

const depthFirstValues = (root) => {
  if (root === null) return [];
  const leftValues = depthFirstValues(root.left);
  const rightValues = depthFirstValues(root.right);
  return [root.val, ...leftValues, ...rightValues]

};








const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

console.log(depthFirstValues(a)); 
//    -> ['a', 'b', 'd', 'e', 'c', 'f']

module.exports = {
  depthFirstValues
};