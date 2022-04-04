/*
Write a function, largestComponent, that takes in the adjacency list of an
undirected graph. The function should return the size of the largest connected
component in the graph.
*/

// 1. create a largestSize variable and set it to 0;
// 2. Create a new visited set();
// 3.  for (let node in graph) , do something:
// 4. Inside for loop, create a helper function. 
// 5. assign return of helper function to currentSize variable
// 6. largestSize = Math.max(currentSize, largestSize)

// 7. For helper function, take in graph, node, visited
// 8. let runningSizeCount = 1;
// 9. if visited.has(node), return 0;
// 10. visited.add(node);
// 11. const neighbors = graph[node];
// 12. For (let neighbor of neighbors), do something...
// 13. recursive call helperFunction(graph, neighbor, visited);
// 14. Outside loop, return runningSizeCount;

// n = # of nodes
// e = # of edges
// Time: O(e) Must traverse through every node. 
// Space: O(n) for the set storing every node.

const largestComponent = (graph) => {
  let largestSize = 0;
  const visited = new Set();
  for (let node in graph) {
    let sizeCount = traverseGraph(graph, node, visited);
    if (largestSize < sizeCount) largestSize = sizeCount;
  }
  return largestSize;
}

const traverseGraph = (graph, node, visited) => {
  if (visited.has(node)) return 0;
  visited.add(node);
  let runningSizeCount = 1;
  const neighbors = graph[node];
  for (let neighbor of neighbors) {
    runningSizeCount += traverseGraph(graph, neighbor, visited);
  }
  return runningSizeCount;
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
