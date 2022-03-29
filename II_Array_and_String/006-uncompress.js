/*
Write a function, uncompress, that takes in a string as an argument.
The input string will be formatted into multiple groups according to the following pattern:

<number><char>
for example, '2c' or '3a'.

The function should return an uncompressed version of the string where each 'char' of a group is repeated 'number' times consecutively.
You may assume that the input string is well-formed according to the previously mentioned pattern.
*/

// Time Complexity: O();
// Space Complexity: O();

// 1. Create a pointer for i and j and start them both at 0
// 2. when J is at a alphabetic character, split the difference between i and j. Store that in a variable.
// 3. Push j to the array i number of times.
// 4. Join array:

const uncompress = (s) => {
  const numbers = '0123456789';
  const results = [];
  let i=0;
  let j=0;
  
  while (j < s.length) {
    // const iChar = s[i];
    // const jChar = s[j];
    if (numbers.includes(s[j])) j++;
    if (!(numbers.includes(s[j]))) {
      const iNum = Number(s.slice(i, j));
      // console.log(typeof iNum);
      for (let count=0; count<iNum; count++) {
        results.push(s[j]);
      }
      j+=1;
      i=j;
    }
  }
  return results.join('');
};

console.log(uncompress("2c3a1t")); // -> 'ccaaat'
console.log(uncompress("4s2b")); // -> 'ssssbb'
console.log(uncompress("2p1o5p")); // -> 'ppoppppp'
console.log(uncompress("3n12e2z")); // -> 'nnneeeeeeeeeeeezz'
console.log(uncompress("127y")); // ->'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'












module.exports = {
  uncompress
};