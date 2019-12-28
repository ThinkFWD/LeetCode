/* 
++++++ QUESTION ++++++ 
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".
++++++ EXAMPLE ++++++

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

++++++ ANALYSIS ++++++

Time Complexity = O(PN)
Space Complexity = O(N) where P is the length of the prefix

*/

/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {
  let prefix = "";
  if(strs.length === 0){
      return prefix;
  }
  prefix = strs[0];
  for(let word of strs){
      if(prefix.length === 0) return prefix;
      for(let i = 0; i < prefix.length; i++){
          if(prefix[i] !== word[i]){
              prefix = word.slice(0, i);
              break;
          }
      }
  }
  return prefix;
};