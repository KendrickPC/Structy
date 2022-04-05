/*
Write a function, prereqsPossible, that takes in a number of courses (n) and
prerequisites as arguments. Courses have ids ranging from 0 through n - 1.
A single prerequisite of [A, B] means that course A must be taken before
course B. The function should return a boolean indicating whether or not it
is possible to complete all courses.
*/

const prereqsPossible = (numCourses, prereqs) => {
  const graph = buildGraph(numCourses, prereqs);
  const visiting = new Set();
  const visited = new Set();
  for (let node in graph) {
    if (cycleDetect(graph, node, visiting, visited) === true) return false;
  }
  return true;
};

const cycleDetect = (graph, node, visiting, visited) => {
  if (visited.has(node)) return false;
  if (visiting.has(node)) return true;
  visiting.add(node);
  const neighbors = graph[node];
  for (let neighbor of neighbors) {
    if (cycleDetect(graph, neighbor, visiting, visited) === true) return true;
  }
  visiting.delete(node);
  visited.add(node);
  return false;
}

const buildGraph = (numCourses, prereqs) => {
  const graph = {};
  for (let num=0; num<numCourses; num += 1) {
    graph[num] = [];
  }

  for (let prereq of prereqs) {
    const [a, b] = prereq;
    graph[a].push(b);
  }
  return graph;
}


const numCourses0 = 6;
const prereqs0 = [
  [0, 1],
  [2, 3],
  [0, 2],
  [1, 3],
  [4, 5],
];
console.log(prereqsPossible(numCourses0, prereqs0)); // -> true

const numCourses1 = 6;
const prereqs1 = [
  [0, 1],
  [2, 3],
  [0, 2],
  [1, 3],
  [4, 5],
  [3, 0],
];
console.log(prereqsPossible(numCourses1, prereqs1)); // -> false

const numCourses2 = 5;
const prereqs2 = [
  [2, 4],
  [1, 0],
  [0, 2],
  [0, 4],
];
console.log(prereqsPossible(numCourses2, prereqs2)); // -> true

const numCourses3 = 6;
const prereqs3 = [
  [2, 4],
  [1, 0],
  [0, 2],
  [0, 4],
  [5, 3],
  [3, 5],
];
console.log(prereqsPossible(numCourses3, prereqs3)); // -> false

const numCourses4 = 8;
const prereqs4 = [
  [1, 0],
  [0, 6],
  [2, 0],
  [0, 5],
  [3, 7],
  [4, 3],
];
console.log(prereqsPossible(numCourses4, prereqs4)); // -> true

const numCourses5 = 8;
const prereqs5 = [
  [1, 0],
  [0, 6],
  [2, 0],
  [0, 5],
  [3, 7],
  [7, 4],
  [4, 3],
];
console.log(prereqsPossible(numCourses5, prereqs5)); // -> false

const numCourses6 = 42;
const prereqs6 = [[6, 36]];
console.log(prereqsPossible(numCourses6, prereqs6)); // -> true


module.exports = {
  prereqsPossible
};