// 22. 括号生成

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let result = ['()']
  if (~~n <= 0) return [];
  if (n == 1) return result;

  for (let i = 1; i < n; i++) {
    let next = [];
    for (let j = 0; j < result.length; j++) {
      const curItem = result[j];
      next = [...next, ...[`()${curItem}`, `${curItem}()`, `(${curItem})`]]
    }
    result = [...new Set(next)];
  }

  return result;
};