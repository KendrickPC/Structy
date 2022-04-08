/*
Write a function, permutations, that takes in an array an argument.
The function should return a 2D array where each subarray represents
one of the possible permutations of the array.

The subarrays may be returned in any order.

You may assume that the input array contains unique elements.
*/

// n = length of items array
// Time: ~O(n!)
// Space: ~O(n!)

const permutations = (items) => {
  if (items.length === 0) return [ [] ];
  const first = items[0];
  const permsWithoutFirst = permutations(items.slice(1));
  const permsWithFirst = [];
  for (let perm of permsWithoutFirst) {
    for (let i=0; i<=perm.length; i+=1) {
      permsWithFirst.push([...perm.slice(0, i), first, ...perm.slice(i)]);
    }
  }
  return permsWithFirst;
};


console.log(permutations(['a', 'b', 'c'])); // -> 
// [ 
//   [ 'a', 'b', 'c' ], 
//   [ 'b', 'a', 'c' ], 
//   [ 'b', 'c', 'a' ], 
//   [ 'a', 'c', 'b' ], 
//   [ 'c', 'a', 'b' ], 
//   [ 'c', 'b', 'a' ] 
// ] 

console.log(permutations(['red', 'blue'])); // ->
// [ 
//   [ 'red', 'blue' ], 
//   [ 'blue', 'red' ] 
// ]

console.log(permutations([8, 2, 1, 4])); // ->
// [ 
//   [ 8, 2, 1, 4 ], [ 2, 8, 1, 4 ], 
//   [ 2, 1, 8, 4 ], [ 2, 1, 4, 8 ], 
//   [ 8, 1, 2, 4 ], [ 1, 8, 2, 4 ], 
//   [ 1, 2, 8, 4 ], [ 1, 2, 4, 8 ], 
//   [ 8, 1, 4, 2 ], [ 1, 8, 4, 2 ], 
//   [ 1, 4, 8, 2 ], [ 1, 4, 2, 8 ], 
//   [ 8, 2, 4, 1 ], [ 2, 8, 4, 1 ], 
//   [ 2, 4, 8, 1 ], [ 2, 4, 1, 8 ], 
//   [ 8, 4, 2, 1 ], [ 4, 8, 2, 1 ], 
//   [ 4, 2, 8, 1 ], [ 4, 2, 1, 8 ], 
//   [ 8, 4, 1, 2 ], [ 4, 8, 1, 2 ], 
//   [ 4, 1, 8, 2 ], [ 4, 1, 2, 8 ] 
// ] 

console.log(permutations([])); // ->
// [
//  [ ]
// ]

module.exports = {
  permutations
};
