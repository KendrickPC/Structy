/*
Write a function minChange that takes in an amount and an array of coins.
The function should return the minimum number of coins required to create
the amount. You may use each coin as many times as necessary.

If it is not possible to create the amount, then return -1.
*/

const minChange = (amount, coins) => {
  const answer = _minChange(amount, coins);
  if (answer === Infinity) {
    return -1;
  } else {
    return answer;
  }
}

const _minChange = (amount, coins, memo={}) => {
  if (amount in memo) return memo[amount];
  if (amount < 0) return Infinity;
  if (amount === 0) return 0
  let minCoins = Infinity;
  for (let coin of coins) {
    const remainder = amount - coin;
    const runningCoins = 1 + _minChange(remainder, coins, memo);
    if (runningCoins < minCoins) minCoins = runningCoins;
  }
  memo[amount] = minCoins;
  return minCoins;
};

console.log(minChange(8, [1, 5, 4, 12])); // -> 2, because 4+4 is the minimum coins possible
console.log(minChange(13, [1, 9, 5, 14, 30])); // -> 5
console.log(minChange(23, [2, 5, 7])); // -> 4
console.log(minChange(102, [1, 5, 10, 25])); // -> 6
console.log(minChange(200, [1, 5, 10, 25])); // -> 8
console.log(minChange(2017, [4, 2, 10])); // -> -1
console.log(minChange(271, [10, 8, 265, 24])); // -> -1
console.log(minChange(0, [4, 2, 10])); // -> 0
console.log(minChange(0, [])); // -> 0




module.exports = {
  minChange
};