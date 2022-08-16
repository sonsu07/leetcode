/**
 * @param {number[]} prices
 * @return {number}
 */
let maxProfit = function(prices) {
    let minPrice = prices[0];
    let maxProfit = 0;
    for (let i = 1; i < prices.length; i++) {
        minPrice = Math.min(prices[i], minPrice);
        maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    }
    return maxProfit;
};