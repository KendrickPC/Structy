/*
Write a function, subsets, that takes in an array as an argument.
The function should return a 2D array where each subarray represents
one of the possible subsets of the array.

The elements within the subsets and the subsets themselves may be returned in any order.

You may assume that the input array contains unique elements.
*/

// n = length of elements array
// Time: ~O(2^n)
// Space: ~O(2^n)

const subsets = (elements) => {
  // Base Case:
  if (elements.length === 0) return [ [] ];
  const first = elements[0];
  const subsetsWithoutFirst = subsets(elements.slice(1));
  const subsetsWithFirst = [];

  for (let sub of subsetsWithoutFirst) {
    subsetsWithFirst.push([first, ...sub]);
  }
  return [...subsetsWithFirst, ...subsetsWithoutFirst]

}  

console.log(subsets(['a', 'b'])); // ->
// // [ 
// //   [], 
// //   [ 'b' ], 
// //   [ 'a' ], 
// //   [ 'a', 'b' ] 
// // ]

console.log(subsets(['a', 'b', 'c'])); // ->
// [
//   [],
//   [ 'c' ],
//   [ 'b' ],
//   [ 'b', 'c' ],
//   [ 'a' ],
//   [ 'a', 'c' ],
//   [ 'a', 'b' ],
//   [ 'a', 'b', 'c' ]
// ]

console.log(subsets(['x'])); // ->
// [ 
//   [], 
//   [ 'x' ] 
// ]

console.log(subsets(['q', 'r', 's', 't'])); // ->
// [
//   [],
//   [ 't' ],
//   [ 's' ],
//   [ 's', 't' ],
//   [ 'r' ],
//   [ 'r', 't' ],
//   [ 'r', 's' ],
//   [ 'r', 's', 't' ],
//   [ 'q' ],
//   [ 'q', 't' ],
//   [ 'q', 's' ],
//   [ 'q', 's', 't' ],
//   [ 'q', 'r' ],
//   [ 'q', 'r', 't' ],
//   [ 'q', 'r', 's' ],
//   [ 'q', 'r', 's', 't' ]
// ]
























module.exports = {
  subsets
};
