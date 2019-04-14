/* 
++++++ QUESTION ++++++ 

There are two sorted arrays nums1 and nums2 of size m and n respectively.
Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

You may assume nums1 and nums2 cannot be both empty.

++++++ EXAMPLE ++++++

Example 1:

nums1 = [1, 3]
nums2 = [2]

The median is 2.0
Example 2:

nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5

++++++ ANALYSIS ++++++

Assumption: 
  Sorted Arrays
  Nums1 and nums2 cannot be BOTH empty (meaning one can be)

Time Complexity = O(log (m+n))
Space Complexity = 
*/

// Even Number = middle two number add and divide by 2
// Odd Number = div2 round up and get number

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
    let [totalLength, steps] = [0,0];

    if(nums1.length <= 0){
      totalLength = nums2.length;
      steps = Math.round( totalLength / 2);
      //even number
      return nums2[steps-1];

    } else if (nums2.length <= 0){
      totalLength = nums1.length;
      steps = Math.round( totalLength / 2);
      //even number
      return nums1[steps-1];

    } else {
      totalLength = (nums1.length + nums2.length);
      steps = Math.round( totalLength / 2);
      //even or odd number
      return "YAY";
    }

};

console.log(findMedianSortedArrays([], [4,5,7,6]));
