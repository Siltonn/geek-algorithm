/**
 * 题目链接：https://leetcode-cn.com/problems/lemonade-change/
 */

/**
 * 题解：钱的数目可以看出都是倍数关系，可以直接使用贪心算法（5可直接收下，10需要找5，20需要找10+5或者5+5+5）
 * 时间复杂度：O(n)
 * 空间复杂度: O(1)
 */

/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  let fiveCount = 0, tenCount = 0, twentyCount = 0
  for (let bill of bills) {
      switch (bill) {
          case 5:
              fiveCount++
              continue
          case 10:
              if (fiveCount > 0) {
                  fiveCount--
                  tenCount++
                  continue
              }
              return false
          case 20:
              if (fiveCount > 0 && tenCount > 0) {
                  fiveCount--
                  tenCount--
                  twentyCount++
                  continue
              } else if (fiveCount > 2) {
                  fiveCount-=3
                  twentyCount++
                  continue
              }
              return false
      }
  }
  return true
};