/**
 * 题目链接：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/
 */

/**
 * 题解1: 贪心算法，逢低谷买，高谷卖
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0
  for (let i = 1; i < prices.length; i++) {
      profit += Math.max(0, prices[i] - prices[i-1])
  }
  return profit
}

/**
 * 题解2：动态规划，每一天只有有股票和没有股票两种状态
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const dp = []
  // 0 - 没有股票 1 - 有股票
  dp[0] = []
  dp[0][0] = 0
  dp[0][1] = -prices[0]
  for (let i = 1; i < prices.length; i++) {
      dp[i] = []
      dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i])
      dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0] - prices[i])
  }
  return dp[prices.length - 1][0]
}