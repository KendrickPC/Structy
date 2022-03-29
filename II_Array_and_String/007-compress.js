/*
Write a function, compress, that takes in a string as an argument.
The function should return a compressed version of the string where consecutive occurrences of the same characters are compressed into the number of occurrences followed by the character.
Single character occurrences should not be changed.

'aaa' compresses to '3a'
'cc' compresses to '2c'
't' should remain as 't'

You can assume that the input only contains alphabetic characters.
*/

// n = length of string
// Time: O(n)
// Space: O(n)

// 1. Have a two pointer approach. Set up i and j to 0.
// 2. While loop j < s.length
// 3. Iterate to make j !== i
// 4. split the difference between j and i... j-i.

const compress = (s) => {
  const results = [];
  let i=0;
  let j=0;
  while (s[j] !== undefined) {
    if (s[i] === s[j]) j++;
    if (s[i] !== s[j]) {
      const difference = j-i;
      if (difference === 1) {
        results.push(s[i]);
      } else {
        results.push(difference);
        results.push(s[i]);
      }
      i=j;
    }
  }
  return results.join('');
};


console.log(compress('ccaaatsss')); // -> '2c3at3s';
console.log(compress('ssssbbz')); // -> '4s2bz'
console.log(compress('ppoppppp')); // -> '2po5p'
console.log(compress('nnneeeeeeeeeeeezz')); // -> '3n12e2z'
console.log(compress('yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy')); // -> '127y'

module.exports = {
  compress
};
