// Two Sum
// https://leetcode.com/problems/two-sum/description/


// Problem
  // Given an array of integers "nums" and an integer "target", return indices of the two numbers such that they add up to "target".
  // You may assume that each input would have exactly one solution, and you may not use the same element twice.
  // You can return the answer in any order.


// Examples
  // Example 1:
    // Input: nums = [2,7,11,15], target = 9
    // Output: [0,1]
    // Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

  // Example 2:
    // Input: nums = [3,2,4], target = 6
    // Output: [1,2]

  // Example 3:
    // Input: nums = [3,3], target = 6
    // Output: [0,1]


// Constraints
  // 2 <= nums.length <= 104
  // -109 <= nums[i] <= 109
  // -109 <= target <= 109
  // Only one valid answer exists.


// Follow-up: Can you come up with an algorithm that is less than O(n^2) time complexity?


// Solutions
  // Solution 1 - Brute force / linear search
    // Starting from the first number, check every subsequent number to see if their sum is equal to the target.
    // Time - O(n^2) / Space - O(1)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for (let curr = 0; curr < nums.length; curr++) {
    let diff = target - nums[curr];

    for (let next = curr + 1; next < nums.length; next++) {
      if (nums[next] === diff) return [curr, next];
    }
  }
}


  // Solution 2 - Hash map
    // Create a hash map to store each number and its index. Check if the difference between the target and the current number exists in the hash map.
    // Time - O(n) / Space - O(n)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let map = new Map();

  for (let curr = 0; curr < nums.length; curr++) {
    let diff = target - nums[curr];
    let diffIndex = map.get(diff);
    
    if (map.has(diff)) return [diffIndex, curr];

    map.set(nums[curr], curr);
  }
}