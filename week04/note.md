# 小结
> 本周涉及到的DFS，BFS，贪心算法和二分查找，大部分此类问题可以直接套用模版完成

## DFS
```python
visited = set()
def DFS (node, visited) 
  if node in visited
    return
  visited.add(node)

  # process current node
  #logic here
  ...

  DFS(node.left)
  DFS(node.right)
}
```

## BFS
```python
def BFS (graph, start, end) {
  queue = []
  queue.append(start)
  visited.add(start)

  while (queue) {
    node = queue.popLeft()
    visited.add(node)

    process(node)
    nodes = generate_related_nodes(node)
    queue.push(nodes)
  }

  # other processing work
  ...
}

```

## 贪心算法
使用贪心算法的场景：
简单的说，问题能够分解成子问题来解决，子问题的最优解能够递推到最终问题的最优解，这种子问题最优解被称为最优子结构。

贪心算法和动态规划不同的地方在于它对每个字问题得解决方案都做出选择，不能回退，动态规划则会保存以前的运算结果，并根据以前的结果对当前进行选择，具有回退功能。

## 二分查找
```javascript
let left = 0, right = arr.length -1
while (left <= right) {
  let mid = (left + right) >> 1
  if (arr[mid] === target) {/* find target */ return arr[min]
  else if (arr[mid] < target) left = mid + 1
  else right = mid -1
  }
}
```
