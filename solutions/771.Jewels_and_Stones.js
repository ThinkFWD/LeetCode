
/* 
++++++ QUESTION ++++++ 

You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".

++++++ EXAMPLE ++++++

Example 1:

Input: J = "aA", S = "aAAbbbb"
Output: 3

Input: J = "z", S = "ZZ"
Output: 0
++++++ ANALYSIS ++++++

Assumption: 

Time Complexity = 
Space Complexity = 
*/

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
const numJewelsInStones = (J, S) => {
  let refJ = arrayToObj(J);
  let solution = 0;
  for(let char of S){
    if(refJ[char]){
      solution +=1;
    }
  } 
  return solution; 
};

const arrayToObj = ( word ) => {
  let convertedArray = {};
  for (let wChar of word){
    if(convertedArray[wChar] === undefined){
      convertedArray[wChar] = true;
    }
  }
  return convertedArray;
}

/* TEST CASE */

console.log(numJewelsInStones('aA','aAAbbbb')); // 3
console.log(numJewelsInStones('z','ZZ')); // 0
console.log(numJewelsInStones('','')); // 0