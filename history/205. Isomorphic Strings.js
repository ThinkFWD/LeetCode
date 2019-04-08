/*
Question 205

ven two strings s and t, determine if they are isomorphic.

Two strings are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.

Example 1:

Input: s = "egg", t = "add"
Output: true
Example 2:

Input: s = "foo", t = "bar"
Output: false
Example 3:

Input: s = "paper", t = "title"
Output: true
Note:
You may assume both s and t have the same length.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = (s, t) => {
  let mapS = {};
  let mapT = {};
  for(let i = 0; i < s.length; i++){
      if(!mapS[s[i]]) mapS[s[i]] = t[i];
      if(!mapT[t[i]]) mapT[t[i]] = s[i];
      if(mapS[s[i]] !== t[i] || mapT[t[i]] !== s[i]) return false
  }
  return true;
};