/**
 * @param {number[]} prices
 * @return {number}
 */


// Questions/Clarifications
// Is the array sorted? – No
// Can there be negative integers? - No
// Can there be duplicates - Yes


// Brute force / linear search
// Check each price with each subsequent price
// Time - O(N^2) / Space - O(1)
// Time limit exceeded
var maxProfit = function(prices) {
  let profit = 0;
  
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      let difference = prices[j] - prices[i];
      if (difference > profit) profit = difference;
    }
  }
  
  return profit;
}


// Sliding window
// Right & left pointers for buy & sell prices
// Store maximum difference
// If buy price is less than sell price, update sell price to buy price
// Time - O(N) / Space - O(1)
var maxProfit = function(prices) {
  let left = 0;
  let right = 1;
  let max = 0;

  while (right < prices.length) {
    const difference = prices[right] - prices[left];
    max = Math.max(max, difference);
    
    if (difference < 0) left = right;
    right++;
  }

  return max;
}