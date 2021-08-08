/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * 时间复杂度 O(n)
 * 空间复杂度 O(1)
 */
var removeDuplicates = function(nums) {
  if (!nums.length) return 0
  let left = 0
  let right = 1
  while (right < nums.length) {
      if (nums[right] !== nums[left]) {
          nums[++left] = nums[right]
      }
      right++
  }
  return left + 1
};