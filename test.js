// 防抖动
function fn(callback, delay) {
  let timer = null;
  return function () {
    if (timer) {
      clearTimeout(timer);
    };
    timer = setTimeout(callback, delay);
  }
}

// 节流
function fn2(callback, delay) {
  let flag = true;
  return function () {
    if (!flag) return false;
    callback();
    flag = false;
    setTimeout(() => { flag = true; }, delay)
  }
}