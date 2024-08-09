// Number of Steps to Reduce a Number to Zero (LeetCode #1342)
// https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/


// Problem
// Given an integer num, return the number of steps to reduce it to zero.
// In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.


// Example 1
// Input: num = 14
// Output: 6


// Example 2
// Input: num = 8
// Output: 4


// Example 3
// Input: num = 123
// Output: 12


// Solution
var numberOfSteps = (num) => {
  let steps = 0;
  while (num > 0) {
    num % 2 === 0 ? num /= 2 : num -= 1;
    steps++;
  }
  return steps;
}