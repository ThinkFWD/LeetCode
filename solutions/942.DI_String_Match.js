
/* 
++++++ QUESTION ++++++ 

Given a string S that only contains "I" (increase) or "D" (decrease), let N = S.length.
Return any permutation A of [0, 1, ..., N] such that for all i = 0, ..., N-1:

If S[i] == "I", then A[i] < A[i+1]
If S[i] == "D", then A[i] > A[i+1]

++++++ EXAMPLE ++++++

Example 1:

Input: "IDID"
Output: [0,4,1,3,2]
Example 2:

Input: "III"
Output: [0,1,2,3]
Example 3:

Input: "DDI"
Output: [3,2,0,1]

++++++ ANALYSIS ++++++

Assumption:
  String S must have at least 1 Char

Restriction:

*/

 
/**
 * @param {string} S
 * @return {number[]}
 */

const diStringMatch = (S) => {
  let high = S.length;
  let low = 0;
  let solution = [];
  
  for(let char of S){
      if(char === "I"){
          solution.push(low);
          low++
      }else{
          solution.push(high);
          high--
      }
  }
  solution.push(low);
  return solution;
};
 

console.log(diStringMatch('IDID'));