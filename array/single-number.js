/**
 * @param {number[]} nums
 * @return {number}
 */


// Array index search
// Time - O(n^2) / Space - O(1)
var singleNumber = function(nums) {
  return nums.find(num => nums.indexOf(num) === nums.lastIndexOf(num));
}


// Sort & compare consecutive elements
// Time - O(n log n) / Space - O(n)
var singleNumber = function(nums) {
  if (nums.length === 1) return nums[0];
  
  nums.sort();

  for (let i = 0; i < nums.length; i += 2) {
    if (i === nums.length - 1) return nums[i];
    if (nums[i] !== nums[i + 1]) return nums[i];
  }
}


// XOR bitwise
// Time - O(n) / Space - O(1)
var singleNumber = function(nums) {
  return nums.reduce((total, value) => total ^ value);
}