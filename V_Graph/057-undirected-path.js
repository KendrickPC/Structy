/*
Write a function, undirectedPath, that takes in an array of edges for an
undirected graph and two nodes (nodeA, nodeB). The function should return
a boolean indicating whether or not there exists a path between nodeA
and nodeB.
*/

// 1. Convert edge list into adjacency list
// 2. Create a visited set;
// 3. Loop through graph nodes...
// 3. Create a helper function that traverses the graph with the visited set.
// 4. In helper function, if src === dst, return true;
// 5. Check visited set... if visited, return false;
// 6. add current node to visited set.
// 7. const neighbors = graph[src];
// 8. Loop through neighbors


const undirectedPath = (edges, src, dst) => {
  
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