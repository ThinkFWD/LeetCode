/*
Question 387

Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

 */

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let memory = {};
  let solution = -1;
  s.split('').forEach((char,index)=>{
      if(memory[char] === undefined){
          memory[char] = index;
      }else if(memory[char] === 'duplicate'){
          return
      }else{
          memory[char] = 'duplicate';
      }
  })
  
  for(let key in memory){
      if(memory[key] !== 'duplicate'){
          if(solution === -1){
              solution = memory[key];
          }else{
              if(memory[key] < solution){
                  solution = memory[key];
              }
          }
      }
  } 
  return solution; 
};