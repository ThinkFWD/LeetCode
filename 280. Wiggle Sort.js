/*
Question 280

Given an unsorted array nums, reorder it in-place such that nums[0] <= nums[1] >= nums[2] <= nums[3]....

*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const wiggleSort = (nums) => {
  let flag = 1;
  for(let i = 0; i < nums.length - 1; i++){
    if(flag === 1){
      if(nums[i] > nums[i+1]){
        swap(nums,i);
      }
    }else{
      if(flag === -1){
        if(nums[i] < nums[i+1]){
          swap(nums,i);
        }
      }
    }
    flag = flag*-1;
  }
};

const swap = (numsArray, index) => {
  let tempVal = numsArray[index];
  numsArray[index] = numsArray[index+1];
  numsArray[index+1] = tempVal;
};
