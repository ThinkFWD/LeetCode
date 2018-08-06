/*
QUESTION 200

Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. 
An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. 
You may assume all four edges of the grid are all surrounded by water.
*/

//input: char[][];
//output: number of islands

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let counter = 0;

  grid.forEach((row, index)=>{
    row.forEach((value, i)=>{
      if(value === '1'){
        counter ++;
      
      let convertToZero = (row, col) => {
        if(row < 0 || col < 0 ) return;
        if(row > grid.length-1) return
        if(grid[row][col] === '0'){
          return;
        }         
        if(grid[row][col]){
          grid[row][col] = '0'
          convertToZero(row+1, col);
          convertToZero(row, col+1);
          convertToZero(row-1, col);
          convertToZero(row, col-1);
        }
      }
      convertToZero(index,i);
    }
    })
  })
  return counter;
  
};