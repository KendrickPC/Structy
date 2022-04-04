/*
Write a function, levelAverages, that takes in the root of a binary tree that
contains number values. The function should return an array containing the
average value of each level.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// 1. Create a levels array
// 2. create a queue... queue should take head [ {node: root, levelNum: 0} ];
// 3. while (queue.length > 0), ... do something:
// 4. deconstruct {node, levelNum} = queue.shift();... Current Node:
// 5. if (levels.length === levelNum) levels[levelNum] = [node.val]
// 6. Else, levels[levelNum].push({node: node.val, levelNum: levelNum+ 1});
// 7. if (node.left !== null) queue.push( {node: node.left, levelNum: levelNum + 1});
// 8. if (node.right !== null) queue.push( {node: node.right, levelNum: levelNum + 1} );
// 9. return levels outside of while loop

// 10. Create an averages helper function:
// 11. Create results array
// 12. Loop through first array... Create a sum. 
// 13. Sum / array.length would equal average.
// 14. Push above average to results array.

// 15. Loop through remaining arrays. Do the same steps as above for averages.
// 16. Return averages.

// n = # of nodes
// Time: O(n) because we need iterate over the entire binary tree
// Space: O(n) because we need to store every node into levels array to obtain the average

const levelAverages = (root) => {
  const levels = [];
  const queue = [ {node: root, levelNum: 0} ];
  while (queue.length > 0) {
    const {node, levelNum}= queue.shift();
    if (levels.length === levelNum) {
      levels[levelNum] = [node.val];
    } else {
      levels[levelNum].push(node.val);
    }
    if (node.left !== null) queue.push( {node: node.left, levelNum: levelNum + 1} );
    if (node.right !== null) queue.push( {node: node.right, levelNum: levelNum + 1} );
  }
  
  return averagesHelper(levels)
};

const averagesHelper = (levels) => {
  const averages = [];
  for (let level of levels) {
    let sum = 0;
    for (let num of level) {
      sum += num;
    }
    averages.push(sum / level.length);
  }
  return averages;
}

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

console.log(levelAverages(a)); // -> [ 3, 7.5, 1 ] 

module.exports = {
  levelAverages
};