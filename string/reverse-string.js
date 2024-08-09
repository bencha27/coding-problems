// Reverse String
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/879/


// Problem
// Write a function that reverses a string. The input string is given as an array of characters s.
// You must do this by modifying the input array in-place with O(1) extra memory.


// Example 1
// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]


// Example 2
// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]


// Solution
var reverseString = function(s) {
  s.reverse();

  // For loop - Much more complex
  // for (let i = s.length-1; i >= 0; i--) {
  //   let x = s[i];
  //   s.splice(i, 1);
  //   s.push(x);
  // }
};