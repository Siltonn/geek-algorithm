/**
 * 题解：https://leetcode-cn.com/problems/minimum-path-sum/submissions/
 */

/**
 * 题解1： 动态规划： 一层一层的进行遍历，每一步的最小值在上方和左方之间进行选择
 * 时间复杂度：O(mn)
 * 空间复杂度：O(n)
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  const rowLength = grid.length, colLength = grid[0].length, record = []
  for (let i = 0; i < colLength; i++) {
      record[i] = grid[0][i] + (record[i-1] || 0)
  }
  for (let r = 1; r < rowLength; r++) {
      for (let c = 0; c < colLength; c++) {
          if (c === 0) {
              record[c] = record[c] + grid[r][c]
          } else {

              record[c] = Math.min(record[c] + grid[r][c], record[c-1] + grid[r][c])
          }
      }
  }
  return record[record.length-1]
};