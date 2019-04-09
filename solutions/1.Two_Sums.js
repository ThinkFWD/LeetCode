/* 
++++++ QUESTION ++++++ 

Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.

++++++ EXAMPLE ++++++
Given nums = [2, 7, 11, 15], target = 9,
Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].

++++++ ANALYSIS ++++++

Assumption:
  Each input would only have 1 solution

Restriction:
  You cannot use the same element twice

*/
/*--------------------------------------------------------------------------------------*/
/**
 * 
 * @param {number[]} nums - Series of numbers
 * @param {number} target - Single number
 * @return {number[]}
 * 
 */

//Brute Force Solution 
//Time Complexity: O^2
//Space Complexity: O(1)
const twoSum = (nums, target) => {
  const solution = [null,null];
  for(let [firstIndex, firstNumber] of nums.entries()){
    for(let [secondIndex, secondNumber] of nums.entries()){
      if(firstNumber+secondNumber === target){
        solution[0] = firstIndex;
        solution[1] = secondIndex;
        return;
      }
    }
  }
  return solution;
};

//Secondary Solution
//Time Complexity: O(nlog(n)) // O(N^2)
//Space Complexity: O(N)      // O(1)
//Trick Question: Array.sort uses insertionSort for <= 10 size , while > 10 = quickSort
//Insertion Sort (O(N^2)) w/ space complexity of (O(1))
//Quick Sort (worse case: O(N^2), avg case: O(nlogn)) w/ space complexity of (O(N))

const twoSumV2 = (nums, target) => {
  nums.sort((a,b)=>{
    return a-b;
  })

  let [ leftIndex, rightIndex ] = [0, nums.length-1]
  let [ left, right ] =  [nums[leftIndex], nums[rightIndex]];

  while(left < right){
    if(left+right === target){
      return [leftIndex, rightIndex];
    }else if(left+right > target){
      rightIndex = rightIndex -1;
      right = nums[rightIndex];
    }else if(left+right < target){
      leftIndex = leftIndex+1;
      left = nums[leftIndex];
    }
  }
}

//Optimal Solution
//Time Complexity: O(N)
//Space Complexity: O(N)

const twoSumV3 = (nums, target) =>{
  let dictionary = {};

  for (let [index, number] of nums.entries()){
    let match = (target - number);
    if(number in dictionary){
      return [dictionary[number], index];
    }else {
      dictionary[match] = index;
    }
  }
}

console.log(twoSumV3([0,2,3,1],5));