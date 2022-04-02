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

const treeValueCount = (root, target) => {
  
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
console.log(treeValueCount(a,  4)); // -> 3
console.log(treeValueCount(null, 42)); // -> 0


module.exports = {
  treeValueCount
};

