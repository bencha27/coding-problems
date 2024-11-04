/**
 * @param {number[]} nums
 * @return {number}
 */


// Questions/Clarifications
// Duplicates? - Yes
// Sorted? - Yes


// Brute force
// Iterate through array, comparing consecutive pairs
// Splice out duplicates
// Time - O(n^2) / Space - O(1)
var removeDuplicates = (nums) => {
  for (i = 0; i < nums.length; i++) {
    let j = i + 1;
    if (nums[i] === nums[j]) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
}


// Two pointers
// One pointer to iterate through array
// Another pointer at index for unique element
// Time - O(n) / Space - O(1)
var removeDuplicates = (nums) => {
  let k = 1;
  
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[k - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }
  
  return k;
}