/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let numberToStr = `${x}`;
  let opera = numberToStr[0] === '-' ? -1 : 1;
  if (opera < 0) {
    numberToStr = numberToStr.slice(1, numberToStr.length)
  }

  numberToStr = numberToStr.split('').reverse().join('').replace(/^0*/g, '');

  if (opera < 0) {
    numberToStr = `-${numberToStr}`
  }

  if (numberToStr != +numberToStr || +numberToStr > Math.pow(2, 31) - 1 || +numberToStr < -1 * Math.pow(2, 31)) {
    return 0;
  }

  return numberToStr;

};