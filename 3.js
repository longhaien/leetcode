// 3. 无重复字符的最长子串

var lengthOfLongestSubstring = function (str) {
  if (!str.length) return 0;
  const subStrArr = [];

  for (let i = 0; i < str.length; i++) {
    subStrArr[i] = [str[i]];
    for (let j = i + 1; j < str.length; j++) {
      if (!subStrArr[i].includes(str[j])) {
        subStrArr[i].push(str[j]);
      } else {
        break;
      }
    }
  }
  const _subStrArr = subStrArr.sort((a, b) => {
    return b.length - a.length
  })
  return _subStrArr[0].length;
};