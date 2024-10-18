/**
 * @param {string} s
 * @return {boolean}
 */


// Stack
// Time - O(N)
var isValid = function(s) {
  const stack = [];
  const openBrackets = ["(", "{", "["];

  for (const bracket of s) {
    if (openBrackets.includes(bracket)) {
      stack.push(bracket);
      continue;
    }
    
    switch (bracket) {
      case ")":
        if (stack.pop() !== "(") return false;
        break;
      case "}":
        if (stack.pop() !== "{") return false;
        break;
      default:
        if (stack.pop() !== "[") return false;
    }
  }

  if (!stack.length) return true;
  return false;
}


// Stack with hash map
// Time - O(N)
var isValid = function(s) {
  const stack = [];
  const map = new Map();
  map.set(")", "(");
  map.set("]", "[");
  map.set("}", "{");

  for (const bracket of s) {
    if (!map.has(bracket)) {
      stack.push(bracket);
      continue;
    }

    if (stack.pop() !== map.get(bracket)) return false;
  }

  if (!stack.length) return true;
  return false;
}