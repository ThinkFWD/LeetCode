/* 
++++++ QUESTION ++++++ 

Given a string, find the length of the longest substring without repeating characters.

++++++ EXAMPLE ++++++

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

++++++ ANALYSIS ++++++

Assumption: 
No repeated substring

Time Complexity = O(N)
Space Complexity = O(N)
*/

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
if(s.length === 0) return 0;
let solution = 0;
let refObj = {};
let chars = [...s];
let [startIndex, endIndex] = [0,0];

for(let i = 0; i < chars.length; i++){
  if(refObj[chars[i]] === undefined){
    endIndex = i;
    refObj[chars[endIndex]] = i;
  } else {
    if(refObj[chars[i]]>= startIndex){
      solution = (endIndex-startIndex+1 > solution) ? endIndex-startIndex+1 : solution;
      startIndex = refObj[chars[i]]+1;
      refObj[chars[i]]=i;
    }else{
      refObj[chars[i]] = i;
      endIndex = i;
    }
  }
}
  solution = (endIndex-startIndex+1 > solution) ? endIndex-startIndex+1 : solution;
  return solution;
};

console.log(lengthOfLongestSubstring('bingo'));