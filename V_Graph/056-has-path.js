/*
Write a function, hasPath, that takes in an object representing the adjacency
list of a directed acyclic graph and two nodes (src, dst). The function should
return a boolean indicating whether or not there exists a directed path
between the source and destination nodes.
*/

// Note: No visited set is needed because this is a directed graph.
// 1. Recursive approach. If src=== dst, return true;
// 2. const neighbors = graph[src];
// 3a. for (let neighbor of neighbors) 
// 3b. hasPath(graph, neighbor, dst);
// 4. return false (outside of for loop);

// Time: O(n) because the worst case scenario is that we loop through every node in the graph.
// Space: O(1) because this is a constant time lookup. No storage of memory needed.

const hasPath = (graph, src, dst) => {
  if (src === dst) return true;
  const neighbors = graph[src];
  for (let neighbor of neighbors) {
    if (hasPath(graph, neighbor, dst) === true) return true;
  }
  return false;
};

const graph0 = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: []
};

console.log(hasPath(graph0, 'f', 'k')); // true

const graph1 = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: []
};

console.log(hasPath(graph1, 'f', 'j')); // false

const graph2 = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: []
};

console.log(hasPath(graph2, 'i', 'h')); // true

const graph3 = {
  v: ['x', 'w'],
  w: [],
  x: [],
  y: ['z'],
  z: [],  
};

console.log(hasPath(graph3, 'v', 'w')); // true

const graph4 = {
  v: ['x', 'w'],
  w: [],
  x: [],
  y: ['z'],
  z: [],  
};

console.log(hasPath(graph4, 'v', 'z')); // false

module.exports = {
  hasPath
};