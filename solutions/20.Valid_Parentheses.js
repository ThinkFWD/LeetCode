/* 
++++++ QUESTION ++++++ 
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.
++++++ EXAMPLE ++++++

Example 1:

Input: "()"
Output: true
Example 2:

Input: "()[]{}"
Output: true
Example 3:

Input: "(]"
Output: false
Example 4:

Input: "([)]"
Output: false
Example 5:

Input: "{[]}"
Output: true

++++++ ANALYSIS ++++++

Time Complexity =
Space Complexity =

*/

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
  if(s.length < 1) return true;
  if(s.length === 1) return false;
  
  const ref = { ']': '[', '}': '{', ')':'('}
  const stack = [];
  let solution = true;
  
  for (const char of s){
      if(!ref[char]){
          stack.push(char);
      }else{
          if(stack.length < 1 || ref[char] !== stack[stack.length-1]){
              solution = false;
              break;
          }
          stack.pop();
          
      }
  }
  return (stack.length > 0) ? false : solution;
};