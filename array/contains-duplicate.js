/**
 * @param {number[]} nums
 * @return {boolean}
 */


// Questions/Clarifications
// Is the array sorted? – No
// Can there be negative integers? - Yes
// Can there be duplicates - Yes


// Compare first index & last index of number
// Time - O(N) / Space - O(1)
// Time limit exceeded
var containsDuplicate = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i])) return true;
  }
  return false;
}


// Sort
// Sort the array, then check pairs of consecutive numbers
// Time - O(N log N) / Space - O(1)
var containsDuplicate = function(nums) {
  const arraySorted = nums.sort();
  for (let i = 0; i < nums.length - 1; i++) {
    if (arraySorted[i] === arraySorted[i+1]) return true;
  }
  return false;
}


// Hash set
// Store each checked number in a hash set
// Time - O(N) / Space - O(N)
var containsDuplicate = function(nums) {
  let set = new Set();
  
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) return true;
    set.add(nums[i]);
  }
  return false;
}