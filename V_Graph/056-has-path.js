/*
Write a function, hasPath, that takes in an object representing the adjacency
list of a directed acyclic graph and two nodes (src, dst). The function should
return a boolean indicating whether or not there exists a directed path
between the source and destination nodes.
*/



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