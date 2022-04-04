/*
Write a function, treeValueCount, that takes in the root of a binary tree
and a target value. The function should return the number of times that
the target occurs in the tree.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Recursive Approach:
// 1. Base case of root === null, return 0;
// x. Create a count variable to keep track of count.
// 2. root.val === target, count += 1;
// 3. Recursive calls to root.left and root.right.
// 4. return count + root.left recursive calls + root.right recursive calls

const treeValueCount = (root, target) => {
  let count = 0;
  if (root === null) return 0;
  if (root.val === target) count += 1;
  const leftValues = treeValueCount(root.left, target);
  const rightValues = treeValueCount(root.right, target);
  return count + leftValues + rightValues;
};

const a = new Node(7);
const b = new Node(5);
const c = new Node(1);
const d = new Node(1);
const e = new Node(8);
const f = new Node(7);
const g = new Node(1);
const h = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
f.right = h;

//      7
//    /   \
//   5     1
//  / \     \
// 1   8     7
//    /       \
//   1         1

console.log(treeValueCount(a, 9)); // -> 0
console.log(treeValueCount(a,  1)); // -> 4
console.log(treeValueCount(a,  7)); // -> 2
console.log(treeValueCount(null, 42)); // -> 0

module.exports = {
  treeValueCount
};
