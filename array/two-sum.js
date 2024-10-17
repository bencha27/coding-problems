/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


// Questions/Clarifications
// Is the array sorted? – No
// Can there be negative integers? - Yes
// Can there be duplicates - Yes


// Brute force / linear search
// Check each number with each subsequent number
// Time - O(N^2) / Space - O(1)
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) return [i, j];
    }
  }
}


// Two pointers
// Sort the array, then start with the smallest & the largest
// If the sum < target, move to the next smallest
// If the sum > target, move to the next largest
// Time - O(N log N) / Space - O(N)
var twoSum = function(nums, target) {
  // Make an array copy with indices
  const arrayWithIndices = nums.map((num, index) => [num, index]);
  
  // Sort the array
  arrayWithIndices.sort((a, b) => a[0] - b[0]);
  
  let left = 0;
  let right = nums.length - 1;
  
  while (left < right) {
    let sum = arrayWithIndices[left][0] + arrayWithIndices[right][0];
    if (sum === target) {
      return [arrayWithIndices[left][1], arrayWithIndices[right][1]];
    } else if (sum < target) {
      left++;
    } else right--;
  }
}


// Hash map
// Store each number & its index in a hash map
// Check if the difference between the target & the number exists in the hash map
// Time - O(N) / Space - O(N)
var twoSum = function(nums, target) {
  let map = new Map();

  for (let curr = 0; curr < nums.length; curr++) {
    let diff = target - nums[curr];
    let diffIndex = map.get(diff);
    
    if (map.has(diff)) return [diffIndex, curr];

    map.set(nums[curr], curr);
  }
}