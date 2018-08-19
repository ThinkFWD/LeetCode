/*
Question #22

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
*/

/**
 * @param {number} n
 * @return {string[]}
 */

 //input: number {no: -1ve, yes: 0}
 //output: string[];
 //Problem type: combination, with well-formed checkers (meaning must end with '()');
 const generateParenthesis = (number) => {
  const solution = [];

  //Note: Recurrsion --> Decision between '(' vs. ')', we will also use closure var to ensure Solution is accessable;
  /** 
  * @param {number} leftPCount, left parenthesis count
  * @param {number} rightPCount, right parenthesis count
  * @param {string} partial, partial structure of solution string
  */
  const generateCombo = (leftPCount, rightPCount, partial) => {
    //To ensure balanced (i.e. ) will not start the string
    if(leftPCount > rightPCount) return;
    //Once both leftPCount and rightPCount === 0, that means string length 6 is complete
    if(!leftPCount && !rightPCount) solution.push(partial);
    //To ensure we don't consider -ve left and right brackets
    if(leftPCount > 0) generateCombo (leftPCount - 1, rightPCount, partial + '(');
    if(rightPCount > 0) generateCombo (leftPCount, rightPCount-1, partial + ')');
  }
  generateCombo(number, number, '');
  return solution;
 };

 //call Stack: 
 /*
generateCombo(3,3,'')
  generateCombo(2,3,'(')
    generateCombo(1,3,'((')
      generateCombo(0,3,'(((')
       generateCOmbo(0,2,'((()')
        generateCOmbo(0,1,'((())')
          generateCOmbo(0,0,'((()))') ---> push to solution
      generateCombo(1,2,'(()')
        generateCombo(0,2,'(()(')
          generateCombo(0,1,'(()()')
            generateCombo(0,0,'(()())') --> push to solution
        generateCombo(1,1,'(())')
          generateCombo(0,1,'(())('); 
            generateCombo(0,0,'(())()') --> push to solution
    generageCombo(2,2,'()')
      generateCombo(1,2,'()(')
        generateCombo(0,2,'()((')
          generateCombo(0,1,'()(()')
            generateCombo(0,0,'()(())') --> push to solution
        generateCombo(1,1,'()()')
          generateCombo(0,1,'()()(');
            generateCombo(0,0,'()()()') --> push to solution

 */

 //exmaple: 
 //==> generateParenthesis(3); //["((()))","(()())","(())()","()(())","()()()"]

