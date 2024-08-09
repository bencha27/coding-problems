// Move Zeroes
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/567/


// Problem
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.


// Example 1
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]


// Example 2
// Input: nums = [0]
// Output: [0]


// Solution
var moveZeroes = function(nums) {
  for (let i = nums.length - 1; i > -1; i--) {
    if (nums[i] === 0) {
      nums.push(0);
      nums.splice(i, 1);
    }
  }
};