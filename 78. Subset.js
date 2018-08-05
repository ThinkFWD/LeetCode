/*
Question 78

Given a set of distinct integers, nums, return all possible subsets (the power set).
Note: The solution set must not contain duplicate subsets.
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

//input: number[] {any number}
//out: number [][] {no: duplicates}
//Problem type: combination, no duplicates
const subsets = (nums) => {
  const solution = [];

  //decision to include the number or not include the number for each number
  const generateCombo = (size, index, partial) => {
      if(size === nums.length-1){
          solution.push(partial);
          return;
      }
      //exclude the number
      generateCombo(size+1, index+1, partial);
      //include the number 
      generateCombo(size+1, index+1, partial.concat(nums[index]));
  }
  generateCombo(0,0,[]);
  return solution;
 };

 //example: 
 // ===> subset([1,2,3]); //[[],[3],[2],[2,3],[1],[1,3],[1,2],[1,2,3]];
