/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */


// Pop & shift k times
// Time - O(n x k) / Space - O(1)
var rotate = function(nums, k) {
  if (k > nums.length) k %= nums.length;

  for (let i = 1; i <= k; i++) {
    nums.unshift(nums.pop());
  }
};


// Splice last k elements
// Time - O(n) / Space - O(k)
var rotate = function(nums, k) {
  if (k > nums.length) k %= nums.length;

  let segment = nums.splice(-k);
  nums.splice(0, 0, ...segment);
};


// Reverse whole array, first k elements, remaining elements
// Time - O(n) / Space - O(1)
var rotate = function(nums, k) {
  if (k > nums.length) k %= nums.length;

  nums.reverse();
  
  for (let i = 0, j = k - 1; i < j; i++, j--) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  for (let i = k, j = nums.length - 1; i < j; i++, j--) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }
};