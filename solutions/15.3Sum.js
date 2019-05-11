
/* 
++++++ QUESTION ++++++ 
Given an array nums of n integers, are there elements a, b, c 
in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

++++++ EXAMPLE ++++++
Note:

The solution set must not contain duplicate triplets.

Example:

Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]

++++++ ANALYSIS ++++++

Assumption: result must be a set of arrays


Time Complexity = 
Space Complexity =
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
  let [ solution, left, right ] = [[], 0, nums.length-1];
  nums.sort((a,b)=>{return a-b}) // O(nlogn)
  if(nums.length < 3 ) return solution;
  for(let [index, number] of nums.entries()){
      if(number > 0) return solution;
      if(number === nums[index-1]) continue;
      left = index+1;
      right = nums.length-1;
      let temp = 0;
      while (left < right || index > left){  
          temp = number + nums[left] + nums[right];
          if (temp === 0){
              solution.push([number, nums[left], nums[right]])
              left++;
              right--;
              while(left < right && nums[left] == nums[left-1]){
                  left++;
              }
              while(left < right && nums[right] == nums[right+1]){
                  right--;
              }
          }else if (temp < 0){
              left++;
          }else if (temp > 0){
              right--;
          }
      }
  }
  return solution;
};