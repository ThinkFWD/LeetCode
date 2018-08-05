/*
QUESTION 17

Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.
A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

    1: ['*'],
    2: ['a','b','c'],
    3: ['d','e','f'],
    4: ['g','h','i'],
    5: ['j','k','l'],
    6: ['m','n','o'],
    7: ['p','q','r','s'],
    8: ['t','u','v'],
    9: ['w','x','y','z'],
*/
/**
 * @param {string} digits
 * @return {string[]}
 */

 //input: string {yes: must be number 2-9}
 //output: string[] 
 //problemType: combination, unique combo of chars of length same to input

const letterCombinations = (digits) => {
  const numDic = {
    1: ['*'],
    2: ['a','b','c'],
    3: ['d','e','f'],
    4: ['g','h','i'],
    5: ['j','k','l'],
    6: ['m','n','o'],
    7: ['p','q','r','s'],
    8: ['t','u','v'],
    9: ['w','x','y','z'],
  }
  const solution = [];
  const generateCombo = (size, index, partial) => {
    if(size === digits.length){
      //prefent [''] being pushed in 
      if(partial){
        solution.push(partial);
      }
      return;
    }
    let charSet = numDic[digits[index]];
    //For each set of chars, recurs the solution
    for(let i = 0; i < charSet.length; i++){
      //size of strings that are generated, index indicates what set of data to work on
      generateCombo(size+1, index+1, partial+charSet[i]);
    }
  }
  return solution;
};

//example:
//===> letterCombination ('23'); // ["ad","ae","af","bd","be","bf","cd","ce","cf"] 
