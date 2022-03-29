/*
Write a function greet that takes in a string argument, s, and returns the string "hey s".
No tricks here.
Run the tests to check your work.
*/

const greet = (s) => {
  return `hey ${s}`;
};

console.log(greet("alvin")); // -> 'hey alvin'
console.log(greet("jason")); // -> 'hey jason'
console.log(greet("how now brown cow")); // -> 'hey how now brown cow'


module.exports = {
  greet
};