---
# try also 'default' to start simple
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://source.unsplash.com/collection/94734566/1920x1080
# apply any windi css classes to the current slide
class: "text-center"
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: true
# some information about the slides, markdown enabled
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# persist drawings in exports and build
drawings:
  persist: false
---

# Algorithm with JS

[@zhang13pro](https://github.com/zhang13pro)

---

# Before...

- 不要忽视基本算法
- 考虑极端(边界)条件
- 正确本身是相对概念
- 解决问题比没有解决强
- 考虑怎样优化

 <!-- 正确本身是相对概念，空间换时间、预处理信息（排序）、瓶颈处寻找答案 -->

---

# 数组

## 二分查找

```js
// T O(logn) S O(1)
function binarySearch(arr, target) {
  let l = 0,
    r = arr.length - 1;

  while (l < r) {
    let mid = l + (r - l) / 2; // 防止数值溢出bug
    if (arr[mid] === target) return mid;

    if (arr[mid] < target) l = mid + 1;
    else r = mid;
  }

  return -1;
}
```

---

## LeetCode-283

[# 移动零](https://leetcode-cn.com/problems/move-zeroes/)

```js
function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
```

```js
// T O(n) S O(1)
var moveZeroes = function (arr) {
  let k = 0;

  for (let i = 0; i < arr.length; i++)
    if (arr[i])
      if (i !== k) swap(arr, i, k++);
      else k++;
};
```

<!-- swap函数方便复用，还必须得传入数组参数 -->
