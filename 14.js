// 14. 最长公共前缀
var longestCommonPrefix = function (strs) {
  const maxLength = Math.min(...strs.map(item => item.length));

  let maxPrevStr = '';
  let currentPrevStr = '';
  for (let i = 1; i <= maxLength; i++) {
    currentPrevStr = strs[0].slice(0, i);
    const reg = new RegExp(`^${currentPrevStr}`);
    const checkArr = strs.filter(item => reg.test(item));
    if (checkArr.length != strs.length) {
      return maxPrevStr;
    }
    maxPrevStr = currentPrevStr;

  }
  return maxPrevStr;
};