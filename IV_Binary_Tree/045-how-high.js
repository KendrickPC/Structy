/*
Write a function, howHigh, that takes in the root of a binary tree.
The function should return a number representing the height of the tree.

The height of a binary tree is defined as the maximal number of edges
from the root node to any leaf node.

If the tree is empty, return -1.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Time: O(n) because we must traverse through every node:
// Space: O(n) b/c we store every node in a levels array.

const howHigh = (node) => {
  if (node === null) return -1;
  const levels = [];
  const queue = [ {node: node, levelNum: 0} ];
  while (queue.length > 0) {
    // console.log(queue)
    // console.log(levels)
    const {node, levelNum} = queue.shift();
    if (levels.length === levelNum) {
      levels[levelNum] = [node.val];
    } else {
      levels[levelNum].push(node.val);
    }
    // console.log(node);
    if (node.left !== null) queue.push({node: node.left, levelNum: levelNum + 1})
    if (node.right !== null) queue.push({node: node.right, levelNum: levelNum + 1});
  }
  return levels.length-1;
};



const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');
const g = new Node('g');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
//    /
//   g

console.log(howHigh(a)); // -> 3

console.log(howHigh(null)); // -> -1

const x = new Node('x');
//      a
console.log(howHigh(x)); // -> 0










module.exports = {
  howHigh
};