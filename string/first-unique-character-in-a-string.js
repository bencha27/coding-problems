// First Unique Character in a String
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/881/


// Problem
// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.


// Example 1
// Input: s = "leetcode"
// Output: 0


// Example 2
// Input: s = "loveleetcode"
// Output: 2


// Example 3
// Input: s = "aabb"
// Output: -1


// Solution
var firstUniqChar = function(s) {
  for (let x of s) {
    if (s.indexOf(x) === s.lastIndexOf(x)) {
      return s.indexOf(x);
      break;
    }
  }
  return -1;
};