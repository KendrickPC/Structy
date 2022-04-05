/*
Write a function, hasCycle, that takes in an object representing the adjacency
list of a directed graph. The function should return a boolean indicating
whether or not the graph contains a cycle.
*/

const hasCycle = (graph) => {
  const visiting = new Set();
  const visited = new Set();

  for (let node in graph) {
    if (traverseGraph(graph, node, visiting, visited) === true) return true;
  }
  return false;
}

const traverseGraph = (graph, node, visiting, visited) => {
  if (visited.has(node)) return false;
  if (visiting.has(node)) return true;
  visiting.add(node);
  const neighbors = graph[node];
  for (let neighbor of neighbors) {
    if (traverseGraph(graph, neighbor, visiting, visited) === true) return true;
  }
  visiting.delete(node);
  visited.add(node);
  return false;
}

console.log(hasCycle({
  a: ["b"],
  b: ["c"],
  c: ["a"],
})); // -> true

console.log(hasCycle({
  a: ["b", "c"],
  b: ["c"],
  c: ["d"],
  d: [],
})); // -> false

console.log(hasCycle({
  a: ["b", "c"],
  b: [],
  c: [],
  e: ["f"],
  f: ["e"],
})); // -> true

console.log(hasCycle({
  q: ["r", "s"],
  r: ["t", "u"],
  s: [],
  t: [],
  u: [],
  v: ["w"],
  w: [],
  x: ["w"],
})); // -> false

console.log(hasCycle({
  a: ["b"],
  b: ["c"],
  c: ["a"],
  g: [],
})); // -> true

console.log(hasCycle({
  a: ["b"],
  b: ["c"],
  c: ["d"],
  d: ["b"],
})); // -> true

module.exports = {
  hasCycle
};
