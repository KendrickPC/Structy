/*
Write a function, quickestConcat, that takes in a string and an array of words
as arguments. The function should return the minimum number of words needed to
build the string by concatenating words of the array.

You may use words of the array as many times as needed.
*/

// Time: 
// Space:

const quickestConcat = (s, words) => {
  const answer = _quickestConcat(s, words);
  return answer === Infinity ? -1 : answer;
}

const _quickestConcat = (s, words, memo={}) => {
  if (s in memo) return memo[s];
  // Base Case: 
  // How many words do I need to build an empty string? 0.
  if (s === '') return 0;

  let minWords = Infinity;
  for (let word of words) {
    if (s.startsWith(word)) {
      const suffix = s.slice(word.length);
      const attempt = 1 + _quickestConcat(suffix, words, memo);
      if (attempt < minWords) minWords = attempt;
    }
  }
  memo[s] = minWords;
  return memo[s];
};

console.log(quickestConcat('caution', ['ca', 'ion', 'caut', 'ut'])); // -> 2
console.log(quickestConcat('caution', ['ion', 'caut', 'caution'])); // -> 1
console.log(quickestConcat('respondorreact', ['re', 'or', 'spond', 'act', 'respond'])); // -> 4
console.log(quickestConcat('simchacindy', ['sim', 'simcha', 'acindy', 'ch'])); // -> 3
console.log(quickestConcat('simchacindy', ['sim', 'simcha', 'acindy'])); // -> -1
console.log(quickestConcat('uuuuuu', ['u', 'uu', 'uuu', 'uuuu'])); // -> 2
console.log(quickestConcat('rongbetty', ['wrong', 'bet'])); // -> -1
console.log(quickestConcat('uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu', ['u', 'uu', 'uuu', 'uuuu', 'uuuuu'])); // -> 7

module.exports = {
  quickestConcat
};
