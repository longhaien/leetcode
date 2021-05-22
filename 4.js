// 4. 寻找两个正序数组的中位数

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const mergeNums = [...nums1, ...nums2];
  mergeNums.sort((a, b) => a - b);

  if (mergeNums.length % 2) {
    return mergeNums[~~(mergeNums.length / 2)];
  } else {
    const index = mergeNums.length / 2;
    return (mergeNums[index] + mergeNums[index - 1]) / 2
  }
};