/**
 * @param {string} s
 * @return {number}
 */


// Compare first & last indices
// Time - O(n^2) / Space - O(n)
var firstUniqChar = function(s) {
  for (let i = 0; i < s.length; i++) {
    const character = s.charAt(i);
    if (s.indexOf(character) === s.lastIndexOf(character)) {
      return i;
    }
  }

  return -1;
};


// Hash table
// Time - O(n) / Space - O(n)
var firstUniqChar = function(s) {
  let map = new Map();
  
  for (let i = 0; i < s.length; i++) {
    const character = s.charAt(i);
    if (map.get(character) === undefined) {
      map.set(character, i);
    } else {
      map.set(character, false);
    }
  }
  
  for (let [ key, value ] of map) {
    if (value !== false) {
      return value;
    }
  }
  
  return -1;
}