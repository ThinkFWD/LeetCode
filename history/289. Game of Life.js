/*
Question 289. 

According to the Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

Given a board with m by n cells, each cell has an initial state live (1) or dead (0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

Any live cell with fewer than two live neighbors dies, as if caused by under-population.
Any live cell with two or three live neighbors lives on to the next generation.
Any live cell with more than three live neighbors dies, as if by over-population..
Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
Write a function to compute the next state (after one update) of the board given its current state. The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously.

*/

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */


const gameOfLife = (board) => {
  // brute force: iterate through each cell and generate a queue to pre populate   
  let changeInstruction = []; 
  board.forEach((row, y)=>{
      row.forEach((value, x)=>{
          if(value){
              if(checkNeightbors(board, y, x) < 2){
                  changeInstruction.push(0);
              }else if(checkNeightbors(board, y, x) < 4){
                  changeInstruction.push(1);
              }else {
                  changeInstruction.push(0);
              }
          }else{
              if(checkNeightbors(board, y, x) === 3){
                  changeInstruction.push(1);
              }else{
                  changeInstruction.push(0);
              }
          }
      })
  })
  
  for(let i=0; i < board.length; i++){
      board.push(changeInstruction.splice(0, board[0].length));
      board.shift();
  }
};


const checkNeightbors = (board, y, x) => {    
  let count = 0;
if(board[y-1]){
  if(board[y-1][x]) count++
  if(board[y-1][x-1]) count++
  if(board[y-1][x+1]) count++
}
  if(board[y][x-1]) count++
  if(board[y][x+1]) count++
  
if(board[y+1]){
  if(board[y+1][x]) count++
  if(board[y+1][x+1]) count++
  if(board[y+1][x-1]) count++
}
  return count;
};
