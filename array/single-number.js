// Single Number (LeetCode)
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/549/


// Problem
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.


// Example 1
// Input: nums = [2,2,1]
// Output: 1


// Example 2
// Input: nums = [4,1,2,1,2]
// Output: 4


// Example 3
// Input: nums = [1]
// Output: 1


// Solution
var singleNumber = function(nums) {
  return nums.find(num => nums.indexOf(num) === nums.lastIndexOf(num));
}