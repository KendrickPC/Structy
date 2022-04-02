/*
Write a function, treeIncludes, that takes in the root of a binary tree
and a target value. The function should return a boolean indicating
whether or not the value is contained in the tree.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Recursive Approach
// 1. Base case: if root === null, return false;
// 2. If root.val === target return true;
// 3. REcursive calls to root.left store in leftValues
// 4. Recursive calls to root.right store in rightValues
// 5. return false;

// n = # of nodes in tree
// Time: O(n) b/c we traverse the entire tree
// Space: O(n) because of the call stack

const treeIncludes = (root, target) => {
  if (root === null) return false;
  if (root.val === target) return true;
  const leftValues = treeIncludes(root.left, target);
  const rightValues = treeIncludes(root.right, target);
  return leftValues || rightValues;
};


const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

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
console.log(treeIncludes(a, "f")); // -> true
console.log(treeIncludes(a, "n")); // -> false
console.log(treeIncludes(a, "e")); // -> true 
console.log(treeIncludes(a, "p")); // -> false
console.log(treeIncludes(null, "b")); // -> false














module.exports = {
  treeIncludes
};