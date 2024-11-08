/**
 * @param {number[]} prices
 * @return {number}
 */


// Time - O(n) / Space - O(1)
var maxProfit = (prices) => {
  let totalProfit = 0;

  for (i = 1; i < prices.length; i++) {
    const difference = prices[i] - prices[i - 1];

    if (difference > 0) {
      totalProfit += difference;
    }
  }
  return totalProfit;
}