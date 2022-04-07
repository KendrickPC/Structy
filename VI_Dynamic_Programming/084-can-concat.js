/*
Write a function, canConcat, that takes in a string and an array of words as
arguments. The function should return boolean indicating whether or not it is
possible to concatenate words of the array together to form the string.

You may reuse words of the array as many times as needed.
*/

const canConcat = (s, words, memo={}) => {
  if (s in memo) return memo[s];
  if (s === '') return true;
  for (let word of words) {
    if (s.startsWith(word)) {
      const suffix = s.slice(word.length);
      if (canConcat(suffix, words, memo) === true) {
        memo[s] = true;
        return memo[s];
      }
    }
  }
  memo[s] = false;
  return memo[s];
};

console.log(canConcat("oneisnone", ["one", "none", "is"])); // -> true
console.log(canConcat("oneisnone", ["on", "e", "is"])); // -> false
console.log(canConcat("oneisnone", ["on", "e", "is", "n"])); // -> true
console.log(canConcat("foodisgood", ["is", "g", "ood", "f"])); // -> true
console.log(canConcat("santahat", ["santah", "hat"])); // -> false
console.log(canConcat("santahat", ["santah", "san", "hat", "tahat"])); // -> true
console.log(canConcat("rrrrrrrrrrrrrrrrrrrrrrrrrrx", ["r", "rr", "rrr", "rrrr", "rrrrr", "rrrrrr"])); // -> false

module.exports = {
  canConcat
};
