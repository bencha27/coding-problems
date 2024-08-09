// Plus One
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/559/


// Problem
// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
// Increment the large integer by one and return the resulting array of digits.


// Example 1
// Input: digits = [1,2,3]
// Output: [1,2,4]


// Example 2
// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]


// Example 3
// Input: digits = [9]
// Output: [1,0]


// Solution
var plusOne = function(digits) {
  let i = digits.length - 1;
  digits[i]++;
  for (; digits[i] > 9; i--) {
    if (digits[i] > 9) {
      digits[i] = 0;
      if (!digits[i-1]) {
        digits.unshift(1);
      } else {
        digits[i-1]++;
      }
    }
  }
  return digits;
};