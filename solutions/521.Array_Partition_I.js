
/* 
++++++ QUESTION ++++++ 

Given an array of 2n integers, your task is to group these integers into n pairs of integer, say (a1, b1), (a2, b2), ..., (an, bn) which makes sum of min(ai, bi) for all i from 1 to n as large as possible.

***** In translation ******
Find the Max of min pairs 

++++++ EXAMPLE ++++++

Example 1:
Input: [1,4,3,2]

Output: 4
Explanation: n is 2, and the maximum sum of pairs is 4 = min(1, 2) + min(3, 4).

++++++ ANALYSIS ++++++

Assumption: 

Note:
n is a positive integer, which is in the range of [1, 10000].
All the integers in the array will be in the range of [-10000, 10000].

Time Complexity = n(log(n))
Space Complexity = 
*/

// Solution 
/**
 * @param {number[]} nums
 * @return {number}
 */
const arrayPairSum = function(nums) {
  let solution = 0;
  if(!nums.length) return solution;
  
  let sortedNums = nums.sort((a,b)=>{return a-b});
  for(i = 0; i <nums.length; i+=2){
      solution = solution + sortedNums[i];
  }
  return solution;
};