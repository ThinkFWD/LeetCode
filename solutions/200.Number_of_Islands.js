
/* 
++++++ QUESTION ++++++ 

Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed 
by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

++++++ EXAMPLE ++++++

Example 1:
Input:
11110
11010
11000
00000

Output: 1

Example 2:

Input:
11000
11000
00100
00011

Output: 3


++++++ ANALYSIS ++++++

Assumption: 


Time Complexity = O(y*x)
Space Complexity = O(y*x)
*/


/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = (grid) => {
  let solution = 0;
  for(let y = 0; y < grid.length; y++){
      for(let x = 0; x < grid[0].length; x++){
          if(grid[y][x] === '1'){
              solution++;
              convertIsland (y, x, grid);
          }
      }
  }
  return solution;
};

const convertIsland = (yCo, xCo, mapR) => {
  if(!mapR[yCo] || !mapR[yCo][xCo]) return;
  if(mapR[yCo][xCo] === '0') return;
    mapR[yCo][xCo] = '0';
    convertIsland(yCo+1, xCo, mapR);
    convertIsland(yCo-1, xCo, mapR);
    convertIsland(yCo, xCo+1, mapR);
    convertIsland(yCo, xCo-1, mapR);  
 
};