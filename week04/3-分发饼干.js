/**
 * 题目链接：https://leetcode-cn.com/problems/assign-cookies/description/
 */
/**
 * 题解： 贪心算法，用最小的饼干满足胃口最小的孩子
 * 时间复杂度：O(m \log m + n \log n)O(mlogm+nlogn)，其中 mm 和 nn 分别是数组 gg 和 ss 的长度。对两个数组排序的时间复杂度是 O(m \log m + n \log n)O(mlogm+nlogn)，遍历数组的时间复杂度是 O(m+n)O(m+n)，因此总时间复杂度是 O(m \log m + n \log n)O(mlogm+nlogn)。
 */
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  let filledCildren = 0, sIndex = 0
  g = g.sort((a, b) => a-b)
  s = s.sort((a, b) => a-b)
  for (let children of g) {
      while (sIndex < s.length) {
          if (s[sIndex] >= children) {
              sIndex++
              filledCildren++
              break
          } else {
              sIndex++
          }
      }
  }
  return filledCildren
};