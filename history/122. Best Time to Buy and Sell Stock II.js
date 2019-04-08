/*
Question 122
Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

*/

/**
 * @param {number[]} prices
 * @return {number}
 */

const maxProfit = (prices) => {
  let total = 0;
  for (let i=0; i< prices.length-1; i++) {
      if(prices[i+1] > prices[i]) total += prices[i+1]-prices[i];
  }    
  return total;
}

