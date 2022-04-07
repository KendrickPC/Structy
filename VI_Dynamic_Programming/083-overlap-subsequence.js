/*
Write a function, overlapSubsequence, that takes in two strings as arguments.
The function should return the length of the longest overlapping subsequence.

A subsequence of a string can be created by deleting any characters of the
string, while maintaining the relative order of characters.
*/

const overlapSubsequence = (str1, str2, i=0, j=0, memo={}) => {
  const position = i + ',' + j;
  if (position in memo) return memo[position]
  if (i === str1.length || j === str2.length) return 0;
  if (str1[i] === str2[j]) {
    memo[position] = 1 + overlapSubsequence(str1, str2, i+1, j+1, memo)
    return memo[position];
  } else {
    memo[position] = Math.max(
      overlapSubsequence(str1, str2, i+1, j, memo),
      overlapSubsequence(str1, str2, i, j+1, memo)
    )
    return memo[position];
  }
};

console.log(overlapSubsequence("dogs", "daogt")); // -> 3
console.log(overlapSubsequence("xcyats", "criaotsi")); // -> 4
console.log(overlapSubsequence("xfeqortsver", "feeeuavoeqr")); // -> 5
console.log(overlapSubsequence("kinfolklivemustache", "bespokekinfolksnackwave")); // -> 11
console.log(overlapSubsequence(
  "mumblecorebeardleggingsauthenticunicorn",
  "succulentspughumblemeditationlocavore"
)); // -> 15

module.exports = {
  overlapSubsequence
};