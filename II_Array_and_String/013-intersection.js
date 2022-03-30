/*
Write a function, intersection, that takes in two arrays, a,b, as arguments.
The function should return a new array containing elements that are in both of the two arrays.

You may assume that each input array does not contain duplicate elements.
*/

// 1. Create hash map of a.
// 2. Loop through b. If element of b in hash map, push to results.

// Time: O(n) (One iteration through)
// Space: O(n) (Hash table created storage of numbers)

const { performance } = require('perf_hooks');

const intersection = (a, b) => {
  const results = [];
  const hashMap = {};
  for (let num of a) {
    hashMap[num] = true;
  }
  for (let num of b) {
    if (hashMap[num] !== undefined) {
      results.push(num);
    }
  }
  // return hashMap;
  return results;
};

console.log(intersection([4,2,1,6], [3,6,9,2,10])) // -> [2,6]
console.log(intersection([2,4,6], [4,2])) // -> [2,4]
console.log(intersection([4,2,1], [1,2,4,6])) // -> [1,2,4]

var startTime = performance.now();
console.log(intersection([0,1,2], [10,11])) // -> []
var endTime = performance.now();
console.log(`Call to doSomething took ${endTime - startTime} milliseconds`)

const a = [];
const b = [];
for (let i = 0; i < 50000; i += 1) {
  a.push(i);
  b.push(i);
}
var startTime = performance.now()
console.log(intersection(a, b)) // -> [0,1,2,3,..., 49999]

var endTime = performance.now()
console.log(`Call to doSomething took ${endTime - startTime} milliseconds`)

module.exports = {
  intersection
};
