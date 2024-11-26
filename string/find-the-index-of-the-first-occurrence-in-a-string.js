/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */


// Brute force - Substring search
// Time - O(n x m) / Space - O(1)
var strStr = function(haystack, needle) {
  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    let substring = haystack.substr(i, needle.length);
    if (substring === needle) return i;
  }

  return -1;
};


// Brute force - Character search
// Time - O(n x m) / Space - O(1)
var strStr = function(haystack, needle) {
  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    for (let j = 0; j < needle.length; j++) {
      if (haystack.charAt(i + j) !== needle.charAt(j)) {
        break;
      }
      if (j === needle.length - 1) {
        return i;
      }
    }
  }

  return -1;
};


// Regex search
// Time - O(n) / Space - O(m)
var strStr = function(haystack, needle) {
  const regex = new RegExp(needle);
  return haystack.search(regex);
};