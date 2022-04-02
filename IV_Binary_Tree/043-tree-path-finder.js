/*
Write a function, pathFinder, that takes in the root of a binary tree and a target value. The function should return an array representing a path to the target value. If the target value is not found in the tree, then return null.

You may assume that the tree contains unique values.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Recursive Approach
// 1. Consider base case of root === null, return NULL
// 2. Consider case where target is matched with root.val... return array [ root.val]
// 3. recursive calls to left and right... 
// 4. If leftValues !== null, target found in leftValues... return itself and spread ...leftValues
// 5. Same for rightValues...


const pathFinder = (root, target) => {
  const answer = _pathFinder(root, target);
  return answer === null ? null : answer.reverse();
}

const _pathFinder = (root, target) => {
  if (root === null) return null;
  if (root.val === target) return [ root.val ];
  const leftValues = _pathFinder(root.left, target);
  if (leftValues !== null) {
    // target found in leftValues
    leftValues.push(root.val);
    return leftValues;
  }
  const rightValues = _pathFinder(root.right, target);
  if (rightValues !== null) {
    rightValues.push(root.val);
    return rightValues;
  }
  return null;
};


const root = new Node(0);
let curr = root;
for (let i = 1; i <= 6000; i += 1) {
  curr.right = new Node(i);
  curr = curr.right;
}

//      0
//       \
//        1
//         \
//          2
//           \
//            3
//             .
//              .
//               .
//              5999
//                \
//                6000

console.log(pathFinder(root, 3451)); // -> [0, 1, 2, 3, ..., 3450, 3451]

console.log(pathFinder(null, "x")); // -> null

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
const g = new Node("g");
const h = new Node("h");
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
f.right = h;
//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
//    /       \
//   g         h
console.log(pathFinder(a, "h")); // -> ['a', 'c', 'f', 'h']










module.exports = {
  pathFinder
};