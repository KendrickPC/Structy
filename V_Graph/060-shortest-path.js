/*
Write a function, shortestPath, that takes in an array of edges for an
undirected graph and two nodes (nodeA, nodeB). The function should return
the length of the shortest path between A and B. Consider the length as the
number of edges in the path, not the number of nodes. If there is no path
between A and B, then return -1.
*/

// 1. translate edge list into adjacency list
// 2. let pathCount = Infinity;
// 3. return pathCount;
// 4. create a visited set;
// 5. Loop through graph. For (let node in graph)....
// 6. traverseGraph(graph, nodeA, nodeB, visited);

// 7. Build helper function (graph, src, dst, visited);
// 8. let currentCount = 1; 
// 9. if src === dst, return currentCount
// 9. const neighbors = graph[src];
// 10. For let neighbor of neighbors
// 11. recursive(graph, neighbor, dst, visited);
// 12. return currentCount;


// e = # of edges:
// Time: O(e) b/c we traverse through each edge
// Space: O(e) because we store each edge in a visited set (in memory)
const shortestPath = (edges, nodeA, nodeB) => {

}

const edges0 = [
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v']
];

console.log(shortestPath(edges0, 'w', 'z')); // -> 2

const edges1 = [
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v']
];

console.log(shortestPath(edges1, 'y', 'x')); // -> 1

const edges2 = [
  ['a', 'c'],
  ['a', 'b'],
  ['c', 'b'],
  ['c', 'd'],
  ['b', 'd'],
  ['e', 'd'],
  ['g', 'f']
];

console.log(shortestPath(edges2, 'a', 'e')); // -> 3

const edges3 = [
  ['a', 'c'],
  ['a', 'b'],
  ['c', 'b'],
  ['c', 'd'],
  ['b', 'd'],
  ['e', 'd'],
  ['g', 'f']
];

console.log(shortestPath(edges3, 'e', 'c')); // -> 2

const edges4 = [
  ['a', 'c'],
  ['a', 'b'],
  ['c', 'b'],
  ['c', 'd'],
  ['b', 'd'],
  ['e', 'd'],
  ['g', 'f']
];

console.log(shortestPath(edges4, 'b', 'g')); // -> -1

const edges5 = [
  ['c', 'n'],
  ['c', 'e'],
  ['c', 's'],
  ['c', 'w'],
  ['w', 'e'],
];

console.log(shortestPath(edges5, 'w', 'e')); // -> 1

const edges6 = [
  ['c', 'n'],
  ['c', 'e'],
  ['c', 's'],
  ['c', 'w'],
  ['w', 'e'],
];

console.log(shortestPath(edges6, 'n', 'e')); // -> 2

const edges7 = [
  ['m', 'n'],
  ['n', 'o'],
  ['o', 'p'],
  ['p', 'q'],
  ['t', 'o'],
  ['r', 'q'],
  ['r', 's']
];

console.log(shortestPath(edges7, 'm', 's')); // -> 6

module.exports = {
  shortestPath
};
