/*
Write a function, summingSquares, that takes a target number as an argument.
The function should return the minimum number of perfect squares that sum
to the target. A perfect square is a number of the form (i*i) where i >= 1.

For example: 1, 4, 9, 16 are perfect squares, but 8 is not perfect square.

Given 12:
summingSquares(12) -> 3
The minimum squares required for 12 is three, by doing 4 + 4 + 4.
Another way to make 12 is 9 + 1 + 1 + 1, but that requires four perfect squares.
*/


const summingSquares = (n, memo={}) => {
  if (n in memo) return memo[n];
  if (n === 0) return 0;
  if (n === 1) return 1;
  let minCount = Infinity;
  for (let i=1; i<n; i++) {
    const squares = i * i;
    const remainder = n - squares;
    const currentCount = 1 + summingSquares(remainder, memo);
    minCount = Math.min(minCount, currentCount)
  }
  memo[n] = minCount;
  return memo[n];
  
};

console.log(summingSquares(8)); // -> 2
console.log(summingSquares(9)); // -> 1
console.log(summingSquares(12)); // -> 3
console.log(summingSquares(1)); // -> 1
console.log(summingSquares(31)); // -> 4
console.log(summingSquares(50)); // -> 2
console.log(summingSquares(68)); // -> 2
console.log(summingSquares(87)); // -> 4



















module.exports = {
  summingSquares
};