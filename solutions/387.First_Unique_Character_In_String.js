/* 
++++++ QUESTION ++++++ 
Given a string, find the first non-repeating character in it and return it's index. 
If it doesn't exist, return -1.
++++++ EXAMPLE ++++++

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.

++++++ ANALYSIS ++++++

Time Complexity = O(N)
Space Complexity = O(N)

*/

/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = (s) => {
  let storage = {};
  let solution = -1;
  let counter = 0;
  for (const char of s){
      if(!storage[char]){
          storage[char] = [counter, 1];
      }else{
          storage[char][1] +=1;
      }
      counter ++;
  }
  
  for(const c of s){
      if(storage[c][1] === 1){
          solution = storage[c][0];
          break;
      }
  }
  return solution;
};