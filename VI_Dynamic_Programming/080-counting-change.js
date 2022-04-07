/*
Write a function, countingChange, that takes in an amount and an array of coins. The function should return the number of different ways it is possible to make change for the given amount using the coins.

You may reuse a coin as many times as necessary.

For example,
countingChange(4, [1,2,3]) -> 4
There are four different ways to make an amount of 4:

1. 1 + 1 + 1 + 1
2. 1 + 1 + 2
3. 1 + 3
4. 2 + 2
*/

const countingChange = (amount, coins, i=0, memo={}) => {
  const placeHolder = amount + ',' + i;
  if (placeHolder in memo) return memo[placeHolder];
  if (amount === 0) return 1;
  const coin = coins[i];
  let total = 0;
  for (let quantity=0; quantity*coin <= amount * coin; quantity+=1) {
    const remainder = amount - (quantity * coin);
    total += countingChange(remainder, coins, i+1, memo);
  }
  memo[placeHolder] = total;
  return memo[placeHolder];
};

console.log(countingChange(4, [1, 2, 3])); // -> 4
console.log(countingChange(8, [1, 2, 3])); // -> 10
console.log(countingChange(24, [5, 7, 3])); // -> 5
console.log(countingChange(13, [2, 6, 12, 10])); // -> 0
console.log(countingChange(512, [1, 5, 10, 25])); // -> 20119
console.log(countingChange(1000, [1, 5, 10, 25])); // -> 142511
console.log(countingChange(240, [1, 2, 3, 4, 5, 6, 7, 8, 9])); // -> 1525987916

























module.exports = {
  countingChange
};