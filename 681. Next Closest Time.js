/*
Question 681
Given a time represented in the format "HH:MM", form the next closest time by reusing the current digits. There is no limit on how many times a digit can be reused.

You may assume the given input string is always valid. For example, "01:34", "12:09" are all valid. "1:34", "12:9" are all invalid.

Example 1:

Input: "19:34"
Output: "19:39"
Explanation: The next closest time choosing from digits 1, 9, 3, 4, is 19:39, which occurs 5 minutes later.  It is not 19:33, because this occurs 23 hours and 59 minutes later.
Example 2:

Input: "23:59"
Output: "22:22"
Explanation: The next closest time choosing from digits 2, 3, 5, 9, is 22:22. It may be assumed that the returned time is next day's time since it is smaller than the input time numerically.

*/

/**
 * @param {string} time
 * @return {string}
 */
const nextClosestTime = (time) => {
  const maxHr = 24;
  const maxMin = 60;
  let hour = parseInt(time.slice(0,2));
  let min = parseInt(time.slice(3,5));
  let allowed = {};
  let allValid = false;
  let tempTime = '';
  for(let chars of time){
      if(chars !== ":"){
          allowed[chars]= true;
      }
  }
  
  while(!allValid){   
      if(min === maxMin-1){
          if(hour === maxHr){
              min = 0;
              hour = 0;
          }else{
              hour +=1;
              min = 0;
          }
      }else{
          min +=1;
      }
      if(hour < 10){
          if(min < 10){
              tempTime = '0'+hour+':'+'0'+min;
          }else{
              tempTime = '0'+hour+':'+min;
          }
      }else{
          if(min < 10){
              tempTime = hour+':'+'0'+min;
          }else{
              tempTime = hour+":"+min;  
          }
          
      }
      if(tempTime.length > 1 && 
         allowed[tempTime[0]] && 
         allowed[tempTime[1]] && 
         allowed[tempTime[3]] && 
         allowed[tempTime[4]]){
          allValid = true;
         } 
  }
  return tempTime;
};