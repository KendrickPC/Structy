/*
Write a function, largestComponent, that takes in the adjacency list of an
undirected graph. The function should return the size of the largest connected
component in the graph.
*/

// n = # of nodes
// e = # of edges
// Time: O(e) Must traverse through every node. 
// Space: O(n) for the set storing every node.

const largestComponent = (graph) => {
  const visited = new Set();
  let largestSize = 0;
  for (let node in graph) {
    const currentSize = traverseGraph(graph, node, visited);
    if (currentSize > largestSize) largestSize = currentSize;
  }
  return largestSize;
}

const traverseGraph = (graph, node, visited) => {
  if (visited.has(node)) return 0;
  visited.add(node);
  let size = 1;
  const neighbors = graph[node];
  for (let neighbor of neighbors) {
    size += traverseGraph(graph, neighbor, visited);
  }
  return size;
}

console.log(largestComponent({
  0: ['8', '1', '5'],
  1: ['0'],
  5: ['0', '8'],
  8: ['0', '5'],
  2: ['3', '4'],
  3: ['2', '4'],
  4: ['3', '2']
})); // -> 4

console.log(largestComponent({
  1: ['2'],
  2: ['1','8'],
  6: ['7'],
  9: ['8'],
  7: ['6', '8'],
  8: ['9', '7', '2']
})); // -> 6

console.log(largestComponent({
  3: [],
  4: ['6'],
  6: ['4', '5', '7', '8'],
  8: ['6'],
  7: ['6'],
  5: ['6'],
  1: ['2'],
  2: ['1']
})); // -> 5

console.log(largestComponent({})); // -> 0

console.log(largestComponent({
  0: ['4','7'],
  1: [],
  2: [],
  3: ['6'],
  4: ['0'],
  6: ['3'],
  7: ['0'],
  8: []
})); // -> 3


module.exports = {
  largestComponent
};
