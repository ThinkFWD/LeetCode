
/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
 */

/**
 * Assumption: 
 *  Each input would have exactly one solution
 *
 * Restriction:
 *  you may not use the same element twice
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 
 */

const twoSum = (nums, target) => {
    //ES6 Destructuring Assignment allows variables to be declared as below;
    let [reference] = [{}];
    for(let i = 0; i < nums.length; i++){
      if(reference[nums[i]] !== undefined){
        return [reference[nums[i]], i];
      }
      if(reference[target-nums[i]] === undefined ){
        reference[target-nums[i]] = i;
      }
     
    }
    return [];
};

console.log(twoSum([3, 2, 4],6));