/*
Write a function, treeLevels, that takes in the root of a binary tree.
The function should return a 2-Dimensional array where each subarray
represents a level of the tree.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// 1. Create a levels array
// 2. Start a queue... Initiate it with head node and levelNum
// 3. grab queue.shift and set it to current (deconstructed {node, levelNum};
// 4. if levels.length === levelNum, create new array level in levels array
// 5. Else, push node.val to already existing corresponding levels array
// 6. if (root.left !== null), queue.push({node: root.left, levelNum: levelNum+1});
// 7. Same steps as above but with root.right (which will be node.right after object deconstruction);
// 8. Return levels.

// Time:
// Space:



const treeLevels = (root) => {

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

console.log(treeLevels(a)); // ->
// [
//   ['a'],
//   ['b', 'c'],
//   ['d', 'e', 'f']
// ]










module.exports = {
  treeLevels
};