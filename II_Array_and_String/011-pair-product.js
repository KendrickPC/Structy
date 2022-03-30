/*
Write a function, pairProduct, that takes in an array and a target product as arguments.
The function should return an array containing a pair of indices whose elements multiply to the given target.
The indices returned must be unique.

Be sure to return the indices, not the elements themselves.

There is guaranteed to be one such pair whose product is the target.
*/

// 1. Create hash table
// 2. Go through with one iteration.

// Time: O(n) (One iteration through)
// Space: O(n) (Hash table created storage of numbers)

const pairProduct = (numbers, targetProduct) => {
  const hash = {};
  for (let i=0; i<numbers.length; i++) {
    const potentialNum = targetProduct / numbers[i];
    if (hash[potentialNum] === undefined) {
      hash[numbers[i]] = i;
    } else {
      // hash[potentialNum] !== undefined
      return [hash[potentialNum], i];
    }
  }
  return hash;
};

console.log(pairProduct([3, 2, 5, 4, 1], 8)); // -> [1, 3]
console.log(pairProduct([3, 2, 5, 4, 1], 10)); // -> [1, 2]
console.log(pairProduct([4, 7, 9, 2, 5, 1], 5)); // -> [4, 5]
console.log(pairProduct([4, 7, 9, 2, 5, 1], 35)); // -> [1, 4]
console.log(pairProduct([3, 2, 5, 4, 1], 10)); // -> [1, 2]
console.log(pairProduct([4, 6, 8, 2], 16)); // -> [2, 3]

module.exports = {
  pairProduct
};