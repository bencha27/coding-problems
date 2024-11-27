/**
 * @param {string[]} strs
 * @return {string}
 */


var longestCommonPrefix = function(strs) {
  // Brute force
  // Iterate through array, comparing strings at index
  // Time - O(n x m) / Space - O(m)
  let index;
  
  // Edge cases
  if (strs.length === 0) return "";
  else if (strs.length === 1) return strs[0];

  outer: for (let i = 0; ; i++) {
    for (let j = 0; j < strs.length - 1; j++) {
      const a = strs[j][i];
      const b = strs[j+1][i];

      if (!a || !b) break outer;
      if (a !== b) break outer;
    }
    index = i;
  }
  
  if (index === undefined) {
    return "";
  } else {
    return strs[0].slice(0, index+1);
  }
};


var longestCommonPrefix = function(strs) {
  // Array reduce()
  // Reduce pairs of strings to common prefix
  // Time - O(n x m) / Space - O(m)
  // Edge cases
  if (strs.length === 0) return "";
  else if (strs.length === 1) return strs[0];

  return strs.reduce((prev, next) => {
    let i = 0;
    while (prev[i] && next[i] && prev[i] === next[i]) i++;
    return prev.slice(0, i);
  });
};