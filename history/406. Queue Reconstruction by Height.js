/*
QUESTION 406

Suppose you have a random list of people standing in a queue. Each person is described by a pair of integers (h, k), where h is the height of the person and k is the number of people in front of 
this person who have a height greater than or equal to h. Write an algorithm to reconstruct the queue.
*/

/**
 * @param {number[][]} people
 * @return {number[][]}
 */

const reconstructQueue = (people) => {
  let solution =[];
  //height should be greatest to lowest
  //while k should be lowest to greatest
  people
    .sort((a,b)=> (a[0] === b[0]) ? a[1] - b[1] : b[0] - a[0])
    .forEach((value)=>{solution.splice(value[1], 0, value)});
  return solution;
};