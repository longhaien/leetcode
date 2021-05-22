// 1. 两数之和

var twoSum = function (nums, target) {
  let result = [];

  // 弄个Map减速，加快检索速度
  const numsMap = {};
  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    numsMap[curr] = i;
  }

  for (let i = 0; i < nums.length; i++) {
    const left = target - nums[i];
    if (numsMap[left] && numsMap[left] != i) {
      result = [i, numsMap[left]];
      break;
    }
  }

  return result;
};