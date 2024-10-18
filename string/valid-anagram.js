/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */


// Questions/Clarifications
// Is the string sorted? - No
// Can there be duplicates? - Yes
// Is it case-sensitive? - No (all lowercase)


// Sort
// Convert strings to arrays & sort
// Convert back to strings, check if they're identical
// Time - O(n log n) / Space - O(log n)
var isAnagram = function(s, t) {
  const sArraySorted = s.split("").sort();
  const tArraySorted = t.split("").sort();
  const sSorted = sArraySorted.toString();
  const tSorted = tArraySorted.toString();
  
  if (sSorted === tSorted) return true;
  else return false;
}


// Hash map
// Store character count in 1st string
// Subtract character count from 2nd string
// Check if every letter count is 0
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    
    const map = new Map();
    
    for (const letter of s) {
      let count = map.get(letter) || 0;
      count++;
      map.set(letter, count);
    }
    
    for (const letter of t) {
      let count = map.get(letter);
      if (!count) return false;
      count--;
      map.set(letter, count);
    }
    
    for (const [ letter, count ] of map) {
      if (count !== 0) return false;
    }
    
    return true;
}