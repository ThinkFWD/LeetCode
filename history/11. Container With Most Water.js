/*
Question 11 
Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container and n is at least 2.
*/

/**
 * @param {number[]} height
 * @return {number}
 */
//2 Pointer solution
const maxArea = (height) => {
  let volume = 0;
  let left = 0;
  let right = height.length-1;
  while(left < right){  
    if(volume < Math.min(height[left],height[right])*(right-left)){
      volume = Math.min(height[left],height[right])*(right-left);
    }
    (height[left] <= height[right]) ? left++ : right--;
  }
  return volume;
};




// BRUTE FORCE RECURRSION

var maxArea = function(height) {
  let volume = 0;
   const calcVol = (size, left, right) => {
       if(size === height.length-1){
           return;
       }
       
       if(volume < Math.min(height[left],height[right])*(right-left)){
           volume = Math.min(height[left],height[right])*(right-left);
       }
       
       calcVol(size+1,left+1, right);
       calcVol(size+1,left, right-1);
   }
   
   calcVol(0,0,height.length-1);
   
  return volume;
};