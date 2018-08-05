
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

// ++++++++ Recursive Solution
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
  if(digits === '' || digits === undefined) return solution;
  if(digits.length < 2) return numDic[digits];

  const charComboMaker = (size, index, result) => {
    if(size === digits.length){
      if(result){
        solution.push(result);
      }
      return;
    }
    const charactersFromDigit = numDic[digits[index]];
    for(let i = 0; i < charactersFromDigit.length; i++){
      const characterLetter = charactersFromDigit[i];
      charComboMaker(size+1, index+1, result + characterLetter);
    }
  }
  charComboMaker(0,0,'');
  return solution;
};
console.log(letterCombinations('23'));
//["ad","ae","af","bd","be","bf","cd","ce","cf"]