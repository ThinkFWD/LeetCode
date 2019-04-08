/* 
Question 231. 

Given an integer, write a function to determine if it is a power of two.

*/

/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo = (n) => {
  if(n <= 0 || n%2 > 0) return false;
  if(n===1) return truel;
  isPowerOfTwo(n/2);
};