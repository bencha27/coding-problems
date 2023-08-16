// Valid Palindrome
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/883/


// Problem
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.


// Example 1
// Input: s = "A man, a plan, a canal: Panama"
// Output: true


// Example 2
// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.


// Example 3
// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.


// Solution
var isPalindrome = function(s) {
  let array = s.toLowerCase().match(/[a-z]|[0-9]/g);
  
  if (array === null) {
    return true;
  }

  // #1: For loop
  // for (let i = 0; i < array.length/2; i++) {
  //   let j = array.length - i - 1;
  //   if (array[i] != array[j]) {
  //     return false;
  //   }
  // }
  // return true;
  
  // #2: Compare strin
  if (array.join("") === array.reverse().join("")) {
    return true;
  } else {
    return false;
  }
};