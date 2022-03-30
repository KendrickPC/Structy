/*
Write a function, pairSum, that takes in an array and a target sum as arguments.
The function should return an array containing a pair of indices whose elements sum to the given target.
The indices returned must be unique.

Be sure to return the indices, not the elements themselves.

There is guaranteed to be one such pair that sums to the target.
*/

// 1. Create hash table
// 2. Go through with one iteration.

// Time: O(n) (One iteration through)
// Space: O(n) (Hash table created storage of numbers)

const pairSum = (numbers, targetSum) => {
  const hash = {}
  for (let i=0; i < numbers.length; i++) {
    const difference = targetSum - numbers[i];
    if (hash[difference] === undefined) {
      hash[numbers[i]] = i;
    } else {
      // hash[difference] !== undefined
      return [hash[difference], i];
    }
  }
  return hash;
};


console.log(pairSum([3, 2, 5, 4, 1], 8)); // -> [0, 2]
console.log(pairSum([4, 7, 9, 2, 5, 1], 5)); // -> [0, 5]
console.log(pairSum([4, 7, 9, 2, 5, 1], 3)); // -> [3, 5]
console.log(pairSum([1, 6, 7, 2], 13)); // -> [1, 2]
console.log(pairSum([9, 9], 18)); // -> [0, 1]
console.log(pairSum([6, 4, 2, 8 ], 12)); // -> [1, 3]








module.exports = {
  pairSum
};