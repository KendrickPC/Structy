/*
Write a function, treeSum, that takes in the root of a binary tree that
contains number values. The function should return the total sum of all
values in the tree.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Recursive Approach:
// 1. Base case: root === null, return 0;
// 2. Recursive calls to root.left
// 3. Recursive calls to root.right
// return root.val + recursive calls to root.left + root.right

const treeSum = (root) => {
  if (root === null) return 0;
  const leftValues = treeSum(root.left);
  const rightValues = treeSum(root.right);
  return root.val + leftValues + rightValues;
};

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

console.log(treeSum(a)); // -> 21
console.log(treeSum(null)); // -> 0
















module.exports = {
  treeSum
};