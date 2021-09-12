/**
 * 题目链接：https://leetcode-cn.com/problems/decode-ways/
 */

/**
 * 题解：动态规划，如果当前是0，则和f(n-2)一样；如果当前是1，则等于f(n-1)+f(n-2);如果前一位是2并且当前小于6，则等于f(n-1)+f(n-2)
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  if (s==='0') return 0
  let curr = 1, pre = 1
  for (let i = 0; i < s.length;i++) {
      const temp = curr
      if (s[i] === '0') {
          if (s[i-1] === '1' || s[i-1] === '2') curr = pre
          else return 0
      } else if ((s[i-1] === '1') || (s[i-1] === '2' && s[i] <= 6)) {
          curr += pre
      }
      pre = temp
  }
  return curr
};