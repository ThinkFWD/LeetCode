/*
Question 78

Given a set of distinct integers, nums, return all possible subsets (the power set).
Note: The solution set must not contain duplicate subsets.
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// ######## Visual illustration 
//                                                 --include     --> 1,2,3
//                           --include       --> 3 --not include --> 1,2      
// 1 -- include       --> 2  --not include   --> 3 --include     --> 1,3
//                                                 --not include --> 1
//                                                 --include     --> 2,3  
//   -- not include   --> 2  -- include      --> 3 --not include --> 2
//                           --not include   --> 3 --include     --> 3
//                                                 --not include --> []


const subSets = (arrayOfNumbers) => {
    let solution = [];

    const superSetGenerate = (index, partial, solution) => {

        
    }

    return solution;
}




// ++++++++ Recursive solution
const subsets = (nums) => {
    let solution = [];
    combine(nums, 0, [], solution)
    return solution;
};

const combine = (nums, index, partial, solution) => {
    //base case is when we reach depth of size nums.length
    if(index === nums.length){
        solution.push(partial);
        return
    }
    //not include index value
    combine(nums,index+1, partial, solution);
    //include index
    combine(nums,index+1, partial.concat(nums[index]), solution);
}
