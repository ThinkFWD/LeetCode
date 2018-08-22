/*
Question 315

You are given an integer array nums and you have to return a new counts array. The counts array has the property where counts[i] is the number of smaller elements to the right of nums[i].

*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */

// START TIME: 8:04 PM
// BRUTE FORCE: 8:22 PM
//Input: Array of Numbers
//Output: Array of Numbers, where each position signifies how many numbers that are smaller than current on the right.

const countSmaller = (nums) => {
  let solution = [];
  solution = nums.map((item, index)=>{
      return nums.length-index-1;
  }); //[3,2,1,0];
  
  let lessCounter = 0;
  
  for(let i = nums.length - 1; i > -1; i--){
      for (let x = nums.length -1; x >= i; x--){
          if(nums[i] > nums[x]){
              lessCounter++;
          }
      }
      solution[i] = lessCounter;
      lessCounter = 0;
  }
  return solution;
};