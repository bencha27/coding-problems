/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */


// Questions/Clarifications
// Duplicates? - Yes
// Characters? - All letters
// Letter case? - All lowercase
// Whitespace? - 


// Linear search
// Check if each letter in `ransomNote` exists in `magazine`
// Remove checked letter from `magazine`
// Time - O(N) / Space - O(N)
var canConstruct = function(ransomNote, magazine) {
  const array = magazine.split("");

  for (const letter of ransomNote) {
    const index = array.indexOf(letter);
    if (index === -1) return false;
    array.splice(index, 1);
  }
  return true;
}


// Hash table
// Store the count of each letter from `magazine` in a hash table
// Decrement the count of each letter from `ransomNote`
// If count equals 0 or doesn't exist, return false
var canConstruct = function(ransomNote, magazine) {
  const map = new Map();

  for (const letter of magazine) {
    let count = map.get(letter) || 0;
    count++;
    map.set(letter, count);
  }

  for (const letter of ransomNote) {
    let count = map.get(letter);
    if (!count || count === 0) return false;
    count--;
    map.set(letter, count);
  }

  return true;
}