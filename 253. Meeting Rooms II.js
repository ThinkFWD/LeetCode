/* 
Question 253. 

Given an array of meeting time intervals consisting of start and end times 
[[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms required.

*/

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
  let newTimes = [];
  let maxTime = 0;
  let counter = 0;

  intervals.forEach((time)=>{
    newTimes.push([time.start,1],[time.end,-1]);
  });

  newTimes.sort((a,b)=>a[0]===b[0] ? a[1]-b[1] : a[0]-b[0])
  newTimes.forEach((slot)=>{
    if(counter>maxTime) maxTime = counter;
    counter +=slot[1];
  })
  return maxTime;
};