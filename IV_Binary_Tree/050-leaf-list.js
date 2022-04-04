/*
Write a function, leafList, that takes in the root of a binary tree and returns
an array containing the values of all leaf nodes in left-to-right order.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// depth First approach
// 1. Create a results array. results = [];
// 2. stack initialized with root stack = [root];
// 3. while stack.length > 0, do something...
// 4. current = queue.pop();
// x. if (current.left === null && current.right === null) results.push(current.val);
// 5. if (current.left !== null) leafList(current.left);
// 6. if (current.right !== null) leafList(current.right);
// 7. Return results array.

// n = # of nodes
// Time: O(n) because we need to iterate through all nodes in the tree.
// Space: O(n) because we need to store n leaf nodes in the results array.

const leafList = (root) => {
  const results = [];
  const stack = [ root ];
  while (stack.length > 0) {
    const current = stack.pop();
    if (current.left === null && current.right === null) {
      results.push(current.val);
    }
    if (current.right !== null) stack.push(current.right);
    if (current.left !== null) stack.push(current.left);
    
  }
  return results;
};


const a = new Node(5);
const b = new Node(11);
const c = new Node(54);
const d = new Node(20);
const e = new Node(15);
const f = new Node(1);
const g = new Node(3);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
e.left = f;
e.right = g;

//        5
//     /    \
//    11    54
//  /   \
// 20   15
//      / \
//     1  3

console.log(leafList(a)); // -> [ 20, 1, 3, 54 ]

module.exports = {
  leafList
};