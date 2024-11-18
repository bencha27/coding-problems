/**
 * @param {number[]} digits
 * @return {number[]}
 */


// Iterate through array, right to left
// Time - O(n) / Space - O(1)
var plusOne = function(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    } else {
      digits[i] = 0;
      if (i === 0) {
        digits.unshift(1);
        return digits;
      }
    }
  }
}


// Recursion
// Time - O(n) / Space - O(n)
var plusOne = function(digits) {
  function carryTheOne(array) {
    let digit = array.pop();
    if (digit === undefined) {
      return array.push(1);
    } else if (digit < 9) {
      digit++;
      return array.push(digit);
    } else {
      carryTheOne(array);
      return array.push(0);
    }
  }

  carryTheOne(digits);
  return digits;
}