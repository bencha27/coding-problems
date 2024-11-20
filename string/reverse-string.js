/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */


// Two pointers
// Time – O(n) / Space - O(1)
var reverseString = function(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
};


// Reverse sort
// Time - O(log n) / Space - O(1)
var reverseString = function(s) {
  s.reverse();
}