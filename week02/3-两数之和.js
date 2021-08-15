/**
 * 题目链接：https://leetcode-cn.com/problems/two-sum/submissions/
 */

/**
 * 题解一： 暴力求解，双循环
 * 时间复杂度： O(n^2)
 * 空间复杂度： O(n)
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for(let i = 0; i<nums.length; i++) {
      for(let c = i+1; c<nums.length;c++) {
          if ((nums[i] + nums[c]) === target) return [i, c]
      }
  }
};


/**
 * 题解二： 用哈希记录已经遍历过的数字的下标，这样一次循环就能搞定
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
      if (!map.has(target-nums[i])) {
          map.set(nums[i], i)
      } else {
          return [map.get(target-nums[i]), i]
      }
  }
};