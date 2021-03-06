/*
Write a function, maxPalinSubsequence, that takes in a string as an argument.
The function should return the length of the longest subsequence of the string
that is also a palindrome.

A subsequence of a string can be created by deleting any characters of the
string, while maintaining the relative order of characters.
*/

const maxPalinSubsequence = (str, i=0, j=str.length-1, memo={}) => {
  const position = i + ',' + j;
  if (position in memo) return memo[position];
  if (i === j) return 1;
  if (i > j) return 0;
  if (str[i] === str[j]) {
    memo[position] = 2 + maxPalinSubsequence(str, i+1, j-1, memo)
    return memo[position]
  } else {
    memo[position] = Math.max(
      maxPalinSubsequence(str, i+1, j, memo),
      maxPalinSubsequence(str, i, j-1, memo)
    )
    return memo[position];
  }
};

console.log(maxPalinSubsequence("luwxult")); // -> 5
console.log(maxPalinSubsequence("xyzaxxzy")); // -> 6
console.log(maxPalinSubsequence("lol")); // -> 3
console.log(maxPalinSubsequence("boabcdefop")); // -> 3
console.log(maxPalinSubsequence("z")); // -> 1
console.log(maxPalinSubsequence("chartreusepugvicefree")); // -> 7
console.log(maxPalinSubsequence("qwueoiuahsdjnweuueueunasdnmnqweuzqwerty")); // -> 15
console.log(maxPalinSubsequence("enamelpinportlandtildecoldpressedironyflannelsemioticsedisonbulbfashionaxe")); // -> 31

module.exports = {
  maxPalinSubsequence
};
