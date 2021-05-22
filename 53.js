// 53. 最大子序和
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let max = -Infinity;
  let index = 0;
  let maxLength = 0;
  for (let i = 0; i < nums.length; i++) {
    let current = 0;
    for (let j = i; j < nums.length; j++) {
      current += nums[j];
      if (current > max) {
        max = current;
        index = i;
        maxLength = j - i;
      }
    }
  }
  console.log(nums.splice(index, maxLength + 1));
  return max;
};

nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]


// 方法二
var maxSubArray = function (nums) {
  let pre = 0, maxAns = nums[0];
  console.log(`pre: ${pre}, maxAns: ${maxAns}`)

  nums.forEach((x) => {
    pre = Math.max(pre + x, x);
    maxAns = Math.max(maxAns, pre);
    console.log(`pre: ${pre}, maxAns: ${maxAns},x:${x}`)
  });
  return maxAns;
};