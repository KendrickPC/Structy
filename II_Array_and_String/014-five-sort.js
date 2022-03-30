/*
Write a function, fiveSort, that takes in an array of numbers as an argument.
The function should rearrange elements of the array such that all 5s appear at the end.
Your function should perform this operation in-place by mutating the original array.
The function should return the array.

Elements that are not 5 can appear in any order in the output, as long as all 5s are at the end of the array.
*/

// 1. Create a left pointer and right pointer at terminal ends
// 1a. While left <= right....
// 2. if right pointer != 5, move it
// 3. If left pointer === 5, keep it, else, move it.
// 4. Create swap function for array. Python method? Sure, why not.

// n= nums.length
// Time: O(n)
// Space: O(1) No new space created for the swaps. 

const fiveSort = (nums) => {
  let left = 0;
  let right = nums.length-1;
  while (left <= right) {
    if (nums[left] === 5 && nums[right] !== 5) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left += 1;
      right -= 1;
    } else if (nums[left] !== 5) {
      left += 1;
    } else if (nums[right] === 5) {
      right -= 1;
    }
  }
  return nums;
};

console.log(fiveSort([5, 1]));

console.log(fiveSort([12, 5, 1, 5, 12, 7]));
// -> [12, 7, 1, 12, 5, 5] 
console.log(fiveSort([5, 2, 5, 6, 5, 1, 10, 2, 5, 5]));
// // -> [2, 2, 10, 6, 1, 5, 5, 5, 5, 5] 
console.log(fiveSort([5, 5, 5, 1, 1, 1, 4]));
// // -> [4, 1, 1, 1, 5, 5, 5] 
console.log(fiveSort([5, 5, 6, 5, 5, 5, 5]));
// // -> [6, 5, 5, 5, 5, 5, 5] 
console.log(fiveSort([5, 1, 2, 5, 5, 3, 2, 5, 1, 5, 5, 5, 4, 5]));
// // -> [4, 1, 2, 1, 2, 3, 5, 5, 5, 5, 5, 5, 5, 5] 

module.exports = {
  fiveSort
};
