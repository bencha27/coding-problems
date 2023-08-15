// Valid Anagram
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/882/


// Problem
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.


// Example 1
// Input: s = "anagram", t = "nagaram"
// Output: true


// Example 2
// Input: s = "rat", t = "car"
// Output: false


// Solution
var isAnagram = function(s, t) {
  if (s.length != t.length) {
    return false;
  }
  
  let arrayS = s.split("");
  let arrayT = t.split("");
  arrayS.sort();
  arrayT.sort();
  let stringS = arrayS.join("");
  let stringT = arrayT.join("");
  
  if (stringS == stringT) {
    return true;
  } else {
    return false;
  }
};