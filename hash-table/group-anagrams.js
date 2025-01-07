/**
 * @param {string[]} strs
 * @return {string[][]}
 */


// Hash table of sorted strings mapped to array of anagrams
// Sort strings via array.sort()
// Time - O(n * m log m) / Space - O(n)
var groupAnagrams = function(strs) {
  const map = new Map();

  strs.forEach(string => {
    const sorted = string.split("").sort().join("");

    if (!map.has(sorted)) map.set(sorted, [string]);
    else {
      let array = map.get(sorted);
      array.push(string);
      map.set(sorted, array);
    }
  });

  return Array.from(map.values());
};


// Hash table of character count mapped to array of anagrams
// Time - O(n * m) / Space - O(n)
var groupAnagrams = function(strs) {
  const map = new Map();

  strs.forEach(string => {
    const charCount = new Array(26).fill(0);
    for (let char of string) {
      charCount[char.charCodeAt(0) - "a".charCodeAt(0)] += 1;
    }
    const key = charCount.join(",");

    if (!map.has(key)) map.set(key, [string]);
    else {
      let array = map.get(key);
      array.push(string);
      map.set(key, array);
    }
  });

  return Array.from(map.values());
};