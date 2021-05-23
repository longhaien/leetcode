// 20. 有效的括号
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (str) {
  const stack = [];
  const matchMap = {
    '}': '{',
    ']': '[',
    ')': '('
  }
  const valueArr = Object.values(matchMap);
  const keyArr = Object.keys(matchMap);
  for (let i = 0; i < str.length; i++) {
    const item = str[i];
    if (valueArr.includes(item)) {
      stack.push(item)
    }
    if (keyArr.includes(item)) {
      const pop = stack.pop();
      if (pop !== matchMap[item]) return false;
    }
  }

  if (stack.length > 0) return false;

  return true;
};