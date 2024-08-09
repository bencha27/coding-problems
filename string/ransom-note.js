// Ransom Note (LeetCode #383)
// https://leetcode.com/problems/ransom-note/


// Problem
// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
// Each letter in magazine can only be used once in ransomNote.


// Example 1
// Input: ransomNote = "a", magazine = "b"
// Output: false


// Example 2
// Input: ransomNote = "aa", magazine = "ab"
// Output: false


// Example 3
// Input: ransomNote = "aa", magazine = "aab"
// Output: true


// Solution
var canConstruct = (ransomNote, magazine) => {
  let trimmedRansomNote = ransomNote.trim();
  let trimmedMagazine = magazine.trim();

  for (let letter of trimmedMagazine) {
    trimmedRansomNote = trimmedRansomNote.replace(letter, "");
  }

  if (trimmedRansomNote === "") {
    return true;
  } else return false;
}