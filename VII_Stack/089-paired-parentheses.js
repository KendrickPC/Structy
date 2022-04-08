/*
Write a function, pairedParentheses, that takes in a string as an argument.
The function should return a boolean indicating whether or not the string
has well-formed parentheses.

You may assume the string contains only alphabetic characters, '(', or ')'.
*/

const pairedParentheses = (str) => {
  let count = 0;
  for (let char of str) {
    if (count === 0 && char === ')') return false;
    if (char === '(') count += 1;
    if (char === ')') count -= 1;
  }
  return count === 0;
};

// console.log(pairedParentheses("(david)((abby))")); // -> true
// console.log(pairedParentheses("()rose(jeff")); // -> false
console.log(pairedParentheses(")(")); // -> false
console.log(pairedParentheses("()")); // -> true
console.log(pairedParentheses("(((potato())))")); // -> true
console.log(pairedParentheses("(())(water)()")); // -> true
console.log(pairedParentheses("(())(water()()")); // -> false
console.log(pairedParentheses("")); // -> true
console.log(pairedParentheses("))()")); // -> false


module.exports = {
  pairedParentheses
};