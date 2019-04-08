/*
Question 695

Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

Find the maximum area of an island in the given 2D array. (If there is no island, the maximum area is 0.)

*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxAreaOfIsland = (grid) => {
  let maxiumLength = 0;
  let counter = 0;
  
  const checkLength = (colIndex,rowIndex) =>{    
      if(!grid[colIndex] || !grid[colIndex][rowIndex]) return;        
      grid[colIndex][rowIndex] = 0;
      counter++        
      checkLength(colIndex, rowIndex+1); // check right
      checkLength(colIndex, rowIndex-1); // check left
      checkLength(colIndex+1, rowIndex); // check top
      checkLength(colIndex-1, rowIndex); // check bottom
  };
  grid.forEach((column, cIndex) => {
      column.forEach((row, rIndex)=>{
          if(row){
              checkLength(cIndex,rIndex);
          }
          maxiumLength = Math.max(maxiumLength, counter);
          counter = 0;
      });
  });
  return maxiumLength;
};