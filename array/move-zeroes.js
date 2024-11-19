/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */


// Iterate through array, right to left
// Time - O(n^2) / Space - O(1)
var moveZeroes = function(nums) {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === 0) {
      let removed = nums.splice(i, 1);
      nums.push(removed[0]);
    }
  }
  
  return nums;
}


// Two pointers
// Time - O(n) / Space - O(1)
var moveZeroes = function(nums) {
  let left = 0;
  
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] !== 0) {
      [nums[right], nums[left]] = [nums[left], nums[right]];
      left++;
    }
  }
  
  return nums;
};