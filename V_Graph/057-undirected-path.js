/*
Write a function, undirectedPath, that takes in an array of edges for an
undirected graph and two nodes (nodeA, nodeB). The function should return
a boolean indicating whether or not there exists a path between nodeA
and nodeB.
*/

const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  const neighbors = graph[nodeA];
  const visited = new Set();
  if (traverseGraph(graph, nodeA, nodeB, visited) === true) return true;
  return false;
  
}

const traverseGraph = (graph, src, dst, visited) => {
  if (visited.has(src)) return false;
  visited.add(src);
  if (src === dst) return true;
  const neighbors = graph[src];
  for (let neighbor of neighbors) {
    if (traverseGraph(graph, neighbor, dst, visited) === true) return true;
  }
  return false;
}

const buildGraph = (edges) => {
  const graph = {};
  for (let edge of edges) {
    const [a, b] = edge;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
}

const edges0 = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
];

console.log(undirectedPath(edges0, 'j', 'm')); // -> true

const edges1 = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
];

console.log(undirectedPath(edges1, 'm', 'j')); // -> true

const edges2 = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
];

console.log(undirectedPath(edges2, 'l', 'j')); // -> true

const edges3 = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
];

console.log(undirectedPath(edges3, 'k', 'o')); // -> false

const edges4 = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
];

console.log(undirectedPath(edges4, 'i', 'o')); // -> false

const edges5 = [
  ['b', 'a'],
  ['c', 'a'],
  ['b', 'c'],
  ['q', 'r'],
  ['q', 's'],
  ['q', 'u'],
  ['q', 't'],
];


console.log(undirectedPath(edges5, 'a', 'b')); // -> true

const edges6 = [
  ['b', 'a'],
  ['c', 'a'],
  ['b', 'c'],
  ['q', 'r'],
  ['q', 's'],
  ['q', 'u'],
  ['q', 't'],
];

console.log(undirectedPath(edges6, 'a', 'c')); // -> true

const edges7 = [
  ['b', 'a'],
  ['c', 'a'],
  ['b', 'c'],
  ['q', 'r'],
  ['q', 's'],
  ['q', 'u'],
  ['q', 't'],
];

console.log(undirectedPath(edges7, 'r', 't')); // -> true

const edges8 = [
  ['b', 'a'],
  ['c', 'a'],
  ['b', 'c'],
  ['q', 'r'],
  ['q', 's'],
  ['q', 'u'],
  ['q', 't'],
];

console.log(undirectedPath(edges8, 'r', 'b')); // -> false

const edges9 = [
  ['s', 'r'],
  ['t', 'q'],
  ['q', 'r'],
];

console.log(undirectedPath(edges9, 'r', 't')); // -> true