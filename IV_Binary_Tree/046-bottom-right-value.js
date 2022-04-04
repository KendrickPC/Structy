/*
Write a function, bottomRightValue, that takes in the root of a binary tree.
The function should return the right-most value in the bottom-most level
of the tree.

You may assume that the input tree is non-empty.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const bottomRightValue = (root) => {
  const levels = [];
  const queue = [ {node: root, levelNum: 0} ];
  while (queue.length > 0) {
    const {node, levelNum} = queue.shift();
    if (levels.length === levelNum) {
      levels[levelNum] = [node.val];
    } else {
      levels[levelNum].push(node.val);
    }
    if (node.left !== null) queue.push( {node: node.left, levelNum: levelNum + 1} );
    if (node.right !== null) queue.push( {node: node.right, levelNum: levelNum + 1} );
  }
  const lastLevel = levels[levels.length -1];
  return lastLevel[lastLevel.length - 1];
};

// const a = new Node(3);
// const b = new Node(11);
// const c = new Node(10);
// const d = new Node(4);
// const e = new Node(-2);
// const f = new Node(1);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

// //       3
// //    /    \
// //   11     10
// //  / \      \
// // 4   -2     1

// console.log(bottomRightValue(a)); // -> 1


const a = new Node(-1);
const b = new Node(-6);
const c = new Node(-5);
const d = new Node(-3);
const e = new Node(-4);
const f = new Node(-13);
const g = new Node(-2);
const h = new Node(6);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
e.right = h;

//        -1
//      /   \
//    -6    -5
//   /  \     \
// -3   -4   -13
//     / \       
//    -2  6

console.log(bottomRightValue(a)); // -> 6







module.exports = {
  bottomRightValue
};