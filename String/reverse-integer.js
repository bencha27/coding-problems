// Reverse Integer
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/880/


// Problem
// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).


// Example 1
// Input: x = 123
// Output: 321


// Example 2
// Input: x = -123
// Output: -321


// Example 3
// Input: x = 120
// Output: 21


// Solution
var reverse = function(x) {
  let y = parseFloat(
    x
      .toString()
      .split("")
      .reverse()
      .join("")
  ) * Math.sign(x);  
  if (y < -Math.pow(2, 31) || y > Math.pow(2, 31) - 1) {
    y = 0;
  }
  return y;
};