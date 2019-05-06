/* 
++++++ QUESTION ++++++ 
Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, 
also in sorted non-decreasing order.

++++++ EXAMPLE ++++++
Example 1:

Input: [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Example 2:

Input: [-7,-3,2,3,11]
Output: [4,9,9,49,121]
 
Note:

1 <= A.length <= 10000
-10000 <= A[i] <= 10000
A is sorted in non-decreasing order.

++++++ ANALYSIS ++++++

Assumption:
  

Restriction:
  

*/

/**
 * @param {number[]} A
 * @return {number[]}
 */
const sortedSquares = (A) => {
  let [ left, right, solution ] = [ 0, A.length-1 , []];
  
  while (left <= right){
      let sqLeft = A[left] * A[left];
      let sqRight = A[right] * A[right];
      
      if(sqLeft > sqRight){
          solution.unshift(sqLeft);
          left++;
      }else{
          solution.unshift(sqRight);
          right--;
      }
  }
  return solution;
};

console.log(sortedSquares([-7,-3,2,3,11]));