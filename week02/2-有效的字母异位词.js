/**
 * 题目链接： https://leetcode-cn.com/problems/valid-anagram/description/
 */


 /**
  * 题解一： 可以将字符串拆分成数组后按ASCII码从小到大排序，将排序后的结果再链接城一个字符串比较是否相等
  * 时间复杂度： O(nlogn)
  * 空间复杂度： O(n)
  */
 /**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  return s.split('').sort().toString() === t.split('').sort().toString()
};


/**
 * 题解二： 可以遍历字符串，将出现的自次数以哈希的形式存储起来；
 *          遍历第二个字符串的时候对哈希里对应的字母做减法，如果出现哈希中不存在的字母或遍历后哈希中还存在次数不为0的字母，则说明不是字母异位词
 * 时间复杂度: O(n)
 * 空间复杂度: O(n)
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  const map = new Map()
  for (let i of s) {
      const origin = map.get(i)
      map.set(i, origin ? origin + 1 : 1)
  }
  for (let i of t) {
      const origin = map.get(i)
      if (!origin) {
          return false
      } else {
          map.set(i, origin - 1)
      }
  }
  return Array.from(map.values()).every(m => m === 0);
};