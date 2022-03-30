/*
Write a function, mostFrequentChar, that takes in a string as an argument.
The function should return the most frequent character of the string.
If there are ties, return the character that appears earlier in the string.

You can assume that the input string is non-empty.
*/

// 0. Create a maxChar and maxCount variable.
// 1. Loop through the string to create a hash map of every character. If character exists, +=1. Else, set to 1
// 2. Loop through the string again. If letter count is greater than maxCount, set letter count to maxCount. Then set maxChar to current letter.
// 3. Return maxCount and maxChar

// n = length of string 1
// m = length of string 2
// Time: O(n + m)
// Space: O(n)

const mostFrequentChar = (s) => {
  let maxChar = '';
  let maxCount = 0;
  const hash = {};
  for (let char of s) {
    if (hash[char] === undefined) {
      hash[char] = 1;
    } else {
      hash[char] += 1;
    }
  }
  
  for (let char of s) {
    if (hash[char] > maxCount) {
      maxCount = hash[char];
      maxChar = char;
    }
  }

  // return `${maxChar} ${maxCount}`;
  return maxChar;
};

console.log(mostFrequentChar('bookeeper')); // -> 'e'
console.log(mostFrequentChar('david')); // -> 'd'
console.log(mostFrequentChar('abby')); // -> 'b'
console.log(mostFrequentChar('mississippi')); // -> 'i'
console.log(mostFrequentChar('potato')); // -> 'o'
console.log(mostFrequentChar('eleventennine')); // -> 'e'
console.log(mostFrequentChar("riverbed")); // -> 'r'

module.exports = {
  mostFrequentChar
};
