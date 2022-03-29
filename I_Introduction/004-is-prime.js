/*
Write a function, isPrime, that takes in a number as an argument.
The function should return a boolean indicating whether or not the given number is prime.

A prime number is a number that is only divisible two distinct numbers: 1 and itself.

For example, 7 is a prime because it is only divisible by 1 and 7.
For example, 6 is not a prime because it is divisible by 1, 2, 3, and 6.

You can assume that the input number is a positive integer.
*/

// Time Complexity: O(n);
// Space Complexity: O(1);

// 1. Start with n === 1 return false:
// 2. For loop through n.. i < n;
// 3. if n % i === 0 return false;
// 4. At the end of the function, return true

// const isPrime = (n) => {
//   if (n === 1) return false;
//   for (i = 2; i < n; i += 1) {
//     if (n % i === 0) return false;
//   }
//   return true;
// };

// Time Complexity: O(Math.sqrt(n));
// Space Complexity: O(1);

const isPrime = (n) => {
  if (n === 1) return false;
  for (let i=2; i <= Math.sqrt(n); i+=1) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log(isPrime(2)); // -> true
console.log(isPrime(3)); // -> true
console.log(isPrime(4)); // -> false
console.log(isPrime(5)); // -> true
console.log(isPrime(6)); // -> false
console.log(isPrime(7)); // -> true
console.log(isPrime(8)); // -> false
console.log(isPrime(25)); // -> false
console.log(isPrime(31)); // -> true
console.log(isPrime(2017)); // -> true
console.log(isPrime(2048)); // -> false
console.log(isPrime(1)); // -> false
console.log(isPrime(713)); // -> false



module.exports = {
  isPrime
};