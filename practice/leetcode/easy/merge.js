/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    
    let i = m - 1; // pointer for nums1
  let j = n - 1; // pointer for nums2
  let k = m + n - 1; // pointer for merged array
  
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }
  
  // Copy any remaining elements from nums2 to nums1
  nums1.splice(0, j + 1, ...nums2.slice(0, j + 1));
}