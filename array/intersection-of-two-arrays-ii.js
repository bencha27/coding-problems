/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */


// Linear search
// Time - O(n^2) / Space - O(n)
var intersect = function(nums1, nums2) {
  const intersection = [];
  
  if (nums1.length < nums2.length) {
    for (let i = 0; i < nums1.length; i++) {
      const index = nums2.indexOf(nums1[i]);
      if (index !== -1) {
        intersection.push(nums1[i]);
        nums2.splice(index, 1);
      }
    }
  } else {
    for (let i = 0; i < nums2.length; i++) {
      const index = nums1.indexOf(nums2[i]);
      if (index !== -1) {
        intersection.push(nums2[i]);
        nums1.splice(index, 1);
      }
    }
  }
  
  return intersection;
}


// Sort & 2 pointers
// Time - O(n log n) / Space - O(n)
var intersect = function(nums1, nums2) {
  function sortArray(a, b) {
    return a - b;
  }
  nums1.sort(sortArray);
  nums2.sort(sortArray);
  
  const intersection = [];
  
  for (let i = 0, j = 0; i < nums1.length && j < nums2.length; ) {
    // nums[i] === nums[j]
    if (nums1[i] === nums2[j]) {
      intersection.push(nums1[i]);
      i++;
      j++;
      continue;
    } else if (nums1[i] > nums2[j]) {
      j++;
    } else i++;
  }
  
  return intersection;
}


// Hash table
// Time - O(n) / Space - O(n)
var intersect = function(nums1, nums2) {
  const map = new Map();
  const intersection = [];
  
  for (const num of nums1) {
    let count = map.get(num) || 0;
    count++;
    map.set(num, count);
  }
  
  for (const num of nums2) {
    let count = map.get(num);
    if (!count) continue;
    intersection.push(num);
    count--;
    map.set(num, count);
  }
  
  return intersection;
}