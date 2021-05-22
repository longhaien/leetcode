// 5. 最长回文子串

var expandAroundCenter = (s, index) => {
  let i = 0;

  while (index - i >= 0 && index + right < s.length && s[index - 1] == s[index + i]) {
    i++
  }
  return i;
}

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {

  if (s == null || s.length < 1) { return '' }

  for (let i = 0; i < s.length; i++) {

  }
};



var expandAroundCenter = (s, left, right) => {
  while (left >= 0 && right < s.length && s[left] == s[right]) {
    --left;
    ++right;
  }
  return right - left - 1;
}

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {

  if (s == null || s.length < 1) { return '' }

  let start = 0;
  let end = 0;
  for (let i = 0; i < s.length; i++) {
    // 回文字符串分两种，abcba baab
    let len1 = expandAroundCenter(s, i, i);
    let len2 = expandAroundCenter(s, i, i + 1);
    let len = Math.max(len1, len2);
    if (len > end - start) {
      start = i - ~~((len - 1) / 2);
      end = i + ~~(len / 2);
    }
  }

  return s.slice(start, end + 1);
};