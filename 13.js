// 13. 罗马数字转整数

var romanToInt = function (s) {
  const numberMap = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    const cur = s[i];
    if (i < s.length - 1 && numberMap[cur] < numberMap[s[i + 1]]) {
      result -= numberMap[cur];
    } else {
      result += numberMap[cur];
    }
  }

  return result;
};