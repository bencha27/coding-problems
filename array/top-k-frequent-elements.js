/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */


// Convert hash table to array, sort array to find top k
// Time - O(n log n) / Space - O(n)
var topKFrequent = function(nums, k) {
  // Hash table to map integer to frequency
  const map = new Map();
  nums.forEach(num => {
    let count = map.get(num) || 0;
    count++;
    map.set(num, count);
  });

  const array = Array.from(map.entries());
  array.sort((a, b) => b[1] - a[1]);
  const subarray = array.slice(0, k);
  return subarray.map(arr => arr[0]);
};


// Heap
var topKFrequent = function(nums, k) {
  // Hash table to map integer to frequency
  const map = new Map();
  nums.forEach(num => {
    let count = map.get(num) || 0;
    count++;
    map.set(num, count);
  });
};


// Bucket sort
// Time - O(n) / Space - O(n)
var topKFrequent = function(nums, k) {
  // Hash table to map integer to frequency
  const map = new Map();
  nums.forEach(num => {
    let count = map.get(num) || 0;
    count++;
    map.set(num, count);
  });
  
  const array = new Array(nums.length + 1).fill([]);
  map.forEach((count, num) => array[count] = [...array[count], num]);
  const result = [];
  for (let i = nums.length, j = k; j > result.length; i--) {
    if (array[i].length > 0) {
      result.push(...array[i]);
    }
  }
  return result;
};