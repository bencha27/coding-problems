/**
 * @param {string} s
 * @return {boolean}
 */


// Questions/Clarifications
// Is the string sorted? - No
// Can there be duplicates? - Yes
// Are there uppercase & lowercase letters? - Yes
// Are there numbers? - Yes
// Are there non-alphanumeric characters? - Yes
// Are there whitespaces? - Yes
// Is it case-sensitive? - No


// Reverse string
// Time - O(N)
var isPalindrome = function(s) {
  // Convert to lowercase letters
  const stringLowercase = s.toLowerCase();
  // Remove non-alphanumeric characters
  const string = stringLowercase.replaceAll(/[^a-z0-9]/g, "");

  const array = string.split("");
  const stringReverse = array.reverse().join("");
  
  if (string !== stringReverse) return false;
  return true;
};


// Two pointers
// Check if letters at opposite ends are the same
var isPalindrome = function(s) {
  // Convert to lowercase letters
  const stringLowercase = s.toLowerCase();
  // Remove non-alphanumeric characters
  const string = stringLowercase.replaceAll(/[^a-z0-9]/g, "");

  let start = 0;
  let end = string.length - 1;

  while (start <= end) {
    if (string.charAt(start) !== string.charAt(end)) return false;
    start++;
    end--;
  }

  return true;
};