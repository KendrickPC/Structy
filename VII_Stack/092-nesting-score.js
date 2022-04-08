/*
Write a function, nestingScore, that takes in a string of brackets as an argument.
The function should return the score of the string according to the following rules:

[] is worth 1 point
XY is worth m + n points where X, Y are substrings of well-formed brackets and m, n are their respective scores
[S] is worth 2 * k points where S is a substring of well-formed brackets and k is the score of that substring
You may assume that the input only contains well-formed square brackets.
*/

const nestingScore = (str) => {
  const stack = [0];
  for (let char of str) {
    if (char === '[') {
      stack.push(0)
    } else {
      const popped = stack.pop();
      if (popped === 0) {
        stack[stack.length-1] += 1;
      } else {
        stack[stack.length-1] += 2 * popped;
      }
    }
  }
  return stack;
};

console.log(nestingScore("[]")); // -> 1
console.log(nestingScore("[][][]")); // -> 3
console.log(nestingScore("[[]]")); // -> 2
console.log(nestingScore("[[][]]")); // -> 4
console.log(nestingScore("[[][][]]")); // -> 6
console.log(nestingScore("[[][]][]")); // -> 5
console.log(nestingScore("[][[][]][[]]")); // -> 7
console.log(nestingScore("[[[[[[[][]]]]]]][]")); // -> 129

module.exports = {
  nestingScore
};
