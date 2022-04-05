/*
Write a function, connectedComponentsCount, that takes in the adjacency list of
an undirected graph. The function should return the number of connected
components within the graph.
*/

// 0. Create a count variable and set it to 0.
// 1. Create a helper function. Add a visited set();
// 2. in helper function, check current node in visited set. If has, return false;
// 3. Add node to visited set.
// 4. traverse through the graph, with for loop. 
// 5. const neighbors = graph[node];
// 6. after for loop, return true;

// 7. In main function if helper function returns true, count += 1;
// 8. return count.



const connectedComponentsCount = (graph) => {
  let count = 0;
  const visited = new Set();
  for (let node in graph) {
    if (traverseGraph(graph, node, visited) === true) count += 1;
  }
  return count;
}

const traverseGraph = (graph, node, visited) => {
  if (visited.has(String(node))) return false;
  visited.add(String(node));
  const neighbors = graph[node];
  for (let neighbor of neighbors) {
    traverseGraph(graph, neighbor, visited);
  }
  return true;
}

console.log(connectedComponentsCount({
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2]
})); // -> 2

console.log(connectedComponentsCount({
  1: [2],
  2: [1,8],
  6: [7],
  9: [8],
  7: [6, 8],
  8: [9, 7, 2]
})); // -> 1

console.log(connectedComponentsCount({
  3: [],
  4: [6],
  6: [4, 5, 7, 8],
  8: [6],
  7: [6],
  5: [6],
  1: [2],
  2: [1]
})); // -> 3

console.log(connectedComponentsCount({})); // -> 0

console.log(connectedComponentsCount({
  0: [4,7],
  1: [],
  2: [],
  3: [6],
  4: [0],
  6: [3],
  7: [0],
  8: []
})); // -> 5

module.exports = {
  connectedComponentsCount
};
