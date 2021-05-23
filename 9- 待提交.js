// 9. 回文数

/**
 * @param {string} number
 * @return {number}
 */
var romanToInt = function (number) {
  if (number < 0) return false;
  if (number < 10) return true;

  const numToStr = `${number}`;
  const half = ~~(numToStr.length / 2);
  if (numToStr.length % 2) {
    for (let i = 1; i <= half; i++) {
      if (numToStr[half - i] !== numToStr[half + i]) {
        return false;
      }
    }
  } else {
    for (let i = 0; i < half; i++) {
      if (numToStr[half - i - 1] !== numToStr[half + i]) {
        return false;
      }
    }
  }

  return true;
};



// 第二种解法
// 回文左右两边相同
/**
 * @param {string} number
 * @return {number}
 */
var romanToInt = function (number) {
  if (number < 0) return false;
  if (number < 10) return true;

  const numToStr = `${number}`;
  const half = ~~(numToStr.length / 2);

  let left = '';
  let right = '';
  if (numToStr.length % 2) {
    left = numToStr.slice(0, half);
    right = numToStr.slice(half + 1);

  } else {
    left = numToStr.slice(0, half);
    right = numToStr.slice(half);
  }

  left = left.split('').reverse().join('');
  return left === right;
};