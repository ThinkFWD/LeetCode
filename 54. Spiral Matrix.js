/*
Question 54.

Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.
*/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = (matrix) => {
  const solution = [];
  if(!matrix.length) return solution;
  
  let totalValues = matrix.length * matrix[0].length;
  let xPosition = 0;
  let yPosition = 0;
  let xIncrease = 1;
  let yIncrease = 0;
  let direction = 'Right';

  while(totalValues > 0){

    solution.push(matrix[yPosition][xPosition]);
    matrix[yPosition][xPosition] = null;
    totalValues--;

    xPosition += xIncrease;
    yPosition += yIncrease;

    if(!matrix[yPosition] || !matrix[yPosition][xPosition]){
      if(direction === 'Right'){
        xPosition--; //move back one position
        direction = 'Down';
        xIncrease = 0;
        yIncrease = 1;
        yPosition += yIncrease; //move to next element
      }else if (direction === 'Down'){
        yPosition--;
        direction = 'Left';
        xIncrease = -1;
        xPosition += xIncrease;
        yIncrease = 0;
      }else if (direction === 'Left'){
        xPosition++;
        direction = 'Up';
        xIncrease = 0;
        yIncrease = -1;
        yPosition += yIncrease;
      }else if (direction ==='Up'){
        yPosition++;
        direction = 'Right';
        xIncrease = 1;
        xPosition += xIncrease;
        yIncrease = 0;
      }
    }
  }
  return solution;
};