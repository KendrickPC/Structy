/*
Write a function, semestersRequired, that takes in a number of courses (n) and
a list of prerequisites as arguments. Courses have ids ranging from 0 through
n - 1. A single prerequisite of [A, B] means that course A must be taken
before course B. Return the minimum number of semesters required to complete
all n courses. There is no limit on how many courses you can take in a single
semester, as long the prerequisites of a course are satisfied before taking it.

Note that given prerequisite [A, B], you cannot take course A and course B
concurrently in the same semester. You must take A in some semester before B.

You can assume that it is possible to eventually complete all courses.
*/

const semestersRequired = (numCourses, prereqs) => {
  const graph = buildGraph(numCourses, prereqs);
  const distance = {};
  // Find terminal nodes:
  for (let node in graph) {
    if (graph[node].length === 0) {
      distance[node] = 0;
    }
  }
  
  for (let node in graph) {
    traverseGraph(graph, node, distance);
  }
  return Math.max(...Object.values(distance)) + 1;
};

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

const buildGraph = (numCourses, prereqs) => {
  const graph = {};
  for (let num=0; num<numCourses; num+=1) {
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
  [1, 2],
  [2, 4],
  [3, 5],
  [0, 5],
];
console.log(semestersRequired(numCourses0, prereqs0)); // -> 3

const numCourses1 = 7;
const prereqs1 = [
  [4, 3],
  [3, 2],
  [2, 1],
  [1, 0],
  [5, 2],
  [5, 6],
];
console.log(semestersRequired(numCourses1, prereqs1)); // -> 5

const numCourses2 = 5;
const prereqs2 = [
  [1, 0],
  [3, 4],
  [1, 2],
  [3, 2],
];
console.log(semestersRequired(numCourses2, prereqs2)); // -> 2

const numCourses3 = 12;
const prereqs3 = [];
console.log(semestersRequired(numCourses3, prereqs3)); // -> 1

const numCourses4 = 3;
const prereqs4 = [
  [0, 2],
  [0, 1],
  [1, 2],
];
console.log(semestersRequired(numCourses4, prereqs4)); // -> 3

const numCourses5 = 6;
const prereqs5 = [
  [3, 4],
  [3, 0],
  [3, 1],
  [3, 2],
  [3, 5],
];
console.log(semestersRequired(numCourses5, prereqs5)); // -> 2

module.exports = {
  semestersRequired
};
