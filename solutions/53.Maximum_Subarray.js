/* 
++++++ QUESTION ++++++ 
Given an integer array nums, find the contiguous subarray 
(containing at least one number) which has the largest sum and return its sum.
++++++ EXAMPLE ++++++

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

++++++ ANALYSIS ++++++

Time Complexity = O(N)
Space Complexity = O(N)

Dynamic Programming
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (nums) => {
  if(nums.length < 1) return 0; 
  let dynamicDecision = [];
  let [add, start, max] = [0, 0, 0];
  for(let [index,number] of nums.entries()){
      if(dynamicDecision.length === 0){ 
          dynamicDecision.push(number);
          max = number;
      }else{
          add = dynamicDecision[index-1]+number
          start = number;
          dynamicDecision.push((start > add) ? start : add);
          if(dynamicDecision[dynamicDecision.length -1] > max){
              max = dynamicDecision[dynamicDecision.length -1];
          }
      }
  }
  return max;
};