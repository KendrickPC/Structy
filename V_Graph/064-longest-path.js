/*
Write a function, longestPath, that takes in an adjacency list for a directed
acyclic graph. The function should return the length of the longest path
within the graph. A path may start and end at any two nodes. The length of a
path is considered the number of edges in the path, not the number of nodes.
*/

// 1. create a distance object...
// 2. find terminal nodes:
// 3. Loop through graph again...
// 4. Use helper function to store visited... base case:
// return 1 + maxPath

const longestPath = (graph) => {
  const distance = {};
  // find terminal nodes:
  for (let node in graph) {
    if (graph[node].length === 0) {
      distance[node] = 0;
    }
  }
  for (let node in graph) {
    traverseGraph(graph, node, distance);
  }
  return Math.max(...Object.values(distance));
}

const traverseGraph = (graph, node, distance) => {
  // base case:
  if (node in distance) return distance[node];
  let maxLength = 0;
  const neighbors = graph[node];
  for (let neighbor of neighbors) {
    const attempt = traverseGraph(graph, neighbor, distance);
    if (attempt > maxLength) maxLength = attempt;
  }
  distance[node] = 1 + maxLength;
  return distance[node];
}

const graph0 = {
  a: ['c', 'b'],
  b: ['c'],
  c: []
};

console.log(longestPath(graph0)); // -> 2

const graph1 = {
  a: ['c', 'b'],
  b: ['c'],
  c: [],
  q: ['r'],
  r: ['s', 'u', 't'],
  s: ['t'],
  t: ['u'],
  u: []
};

console.log(longestPath(graph1)); // -> 4

const graph2 = {
  h: ['i', 'j', 'k'],
  g: ['h'],
  i: [],
  j: [],
  k: [],
  x: ['y'],
  y: []
};

console.log(longestPath(graph2)); // -> 2

const graph3 = {
  a: ['b'],
  b: ['c'],
  c: [],
  e: ['f'],
  f: ['g'],
  g: ['h'],
  h: []
};

console.log(longestPath(graph3)); // -> 3

module.exports = {
  longestPath
};
