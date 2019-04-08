/*
Question 140. 
Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, 
add spaces in s to construct a sentence where each word is a valid dictionary word. 
Return all such possible sentences.


*/


//BRUTE FORCE
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
  let solution = [];
  const phrase = (size, word, partial, counter) =>{
      if(size === s.length+1){
          if(counter === s.length){
            solution.push(partial.trim())
          }
          return
      }      
      if(wordDict.includes(word) ){
          phrase(size+1, s[size], partial+word+" ", counter+word.length)
      }
      phrase(size+1, word+s[size], partial, counter)
  }
  phrase(0,"","", 0);
  return solution;
};