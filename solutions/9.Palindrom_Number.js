
/* 
++++++ QUESTION ++++++ 

Determine whether an integer is a palindrome. 
An integer is a palindrome when it reads the same backward as forward.

++++++ EXAMPLE ++++++

Example 1:

Input: 121
Output: true
Example 2:

Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

++++++ ANALYSIS ++++++

Assumption: 


Time Complexity = 
Space Complexity = 
*/


/**
 * @param {number} x
 * @return {boolean}
 */
function isPalindrome(x) {
  if (x === undefined || x <0 || x%10 === 0) false;
  if (x < 10) true;

  let rev = 0;

  while (x >= 10) {
    let cur = x % 10;
    rev = rev*10 + cur;
    if (x === rev) return true;
    x = ~~(x / 10); // better replace for Math.floor(), bit operator '~' inverts all the bits in your number and in the process converts the number to an int
    if (x === rev) return true; 
    if (x < rev) return false;  
  }
  return;
};


console.log(isPalindrome(5225));

