// Running Sum of 1d Array (LeetCode #1480)
// https://leetcode.com/problems/running-sum-of-1d-array/

// Problem
// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]...nums[i]).
// Return the running sum of nums.

// Example 1
// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]

// Example 2
// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]

// Example 3
// Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]

// Solution
var runningSum = (nums) => {
  return nums.map((num, index, arr) => {
    for (let i = 0; i < index; i++) {
      num += arr[i];
    }
    return num;
  })
}