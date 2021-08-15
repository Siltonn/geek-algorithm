/**
 * 题目链接：https://leetcode-cn.com/problems/n-ary-tree-preorder-traversal/submissions/
 */

/**
 * 题解一：递归解法
 * 时间复杂度：O(n)
 * 空间复杂度: O(n)
 */
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root, result = []) {
  if (!root) {
      return []
  }
  result.push(root.val)
  root.children.forEach(c => preorder(c, result))
  return result
};

/**
 * 题解二：迭代解法
 * 时间复杂度: O(n)
 * 空间复杂度: O(n)
 */
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
  const result = []
  if (!root) return result
  const stack = []
  stack.push(root)
  while (stack.length) {
      const top = stack.pop()
      result.push(top.val)
      for (let i = top.children.length -1; i>=0; i--) {
          stack.push(top.children[i])
      }
  }
  return result
};