// Rotate Array (LeetCode)
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/646/


// Problem
// Given an integer array "nums", rotate the array to the right by "k" steps, where "k" is non-negative.


// Example 1
// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]


// Example 2
// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]


// Solution
var rotate = (nums, k) => {
  if (k > nums.length) {
    k %= nums.length;
  }
  let segment = nums.splice(-k, k);
  nums.splice(0, 0, ...segment);
}