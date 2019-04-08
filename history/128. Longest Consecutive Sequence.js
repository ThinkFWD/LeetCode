/*
Question 128 

Given an unsorted array of integers, find the length of the longest consecutive elements sequence.
Your algorithm should run in O(n) complexity.

input: [1,2,3,100,4,6]
output: 4
Strategy: Create an object, increase values prior or forward, but not increase if value exists in reference
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = (nums) => {
  let maxConsecurtive = 0;
  const storage = {};

  for(let value of nums){
    if(!storage[value]){

      const left = storage[value - 1] || 0;
      const right = storage[value + 1] || 0;
      const totalCount = left + right + 1;

      storage[value-left] = totalCount;
      storage[value] = totalCount;
      storage[value+right] = totalCount;

      maxConsecurtive = Math.max(maxConsecurtive, totalCount);
    }
  }
  return maxConsecurtive;
}