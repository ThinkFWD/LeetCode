
/* 
++++++ QUESTION ++++++ 
Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.
++++++ EXAMPLE ++++++

Example 1:

Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Not 7-1 = 6, as selling price needs to be larger than buying price.
++++++ ANALYSIS ++++++

Time Complexity = O(1)
Space Complexity = O(N)
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
  if(prices.length < 1) return 0
  if(prices.length === 2){
      (prices[0]-prices[prices.length-1]> 0) ? prices[0]-prices[prices.length-1] : 0;
  }
  
  let buy = prices[0];
  let sell = prices[0];
  let profit = 0;
  
  for(let price of prices){
      if(price <= buy){
          if(sell-buy > 0){
             profit = Math.max(sell-buy, profit)
          }
          buy = price
          sell = 0
      }else{
          if(price > sell){
              sell = price
          }
      }
  }
  return Math.max(sell-buy, profit);
};