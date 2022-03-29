/*
Write a function, anagrams, that takes in two strings as arguments.
The function should return a boolean indicating whether or not the strings are anagrams.
Anagrams are strings that contain the same characters, but in any order.
*/

// 1. Check if string lengths are equal. Return false if not equal
// 2. Create a hash map for s1
// 3. Subtract each character of s2. If char === 0, return false;

// n = length of string 1
// m = length of string 2
// Time: O(n + m)
// Space: O(n)

const anagrams = (s1, s2) => {
  const hash = {};
  if (s1.length !== s2.length) return false;
  // Creating hash map for s1:
  for (let char of s1) {
    if (hash[char] === undefined) {
      hash[char] = 1;
    } else {
      hash[char] += 1;
    }
  }
  
  for (let char of s2) {
    if (hash[char] === undefined) return false;
    if (hash[char] === 0) return false;
    hash[char] -= 1;
  }
  return true;
};

console.log(anagrams('restful', 'fluster')); // -> true
console.log(anagrams('cats', 'tocs')); // -> false
console.log(anagrams('monkeyswrite', 'newyorktimes')); // -> true
console.log(anagrams('paper', 'reapa')); // -> false
console.log(anagrams('elbow', 'below')); // -> true
console.log(anagrams('tax', 'taxi')); // -> false
console.log(anagrams('taxi', 'tax')); // -> false
console.log(anagrams('night', 'thing')); // -> true
console.log(anagrams('abbc', 'aabc')); // -> false

module.exports = {
  anagrams
};