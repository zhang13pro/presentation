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

# Browser

[@zhang13pro](https://github.com/zhang13pro)

---

# How Browser Work

![页面渲染流程](url2page.webp)

<!--
1. 浏览器基于HTTP或者HTTPS协议向服务端请求网页资源
2. 将请求得到的 HTML 代码解析、构建成 DOM 树
3. 计算DOM 树上的CSS 属性
4. 对DOM元素逐个渲染，得到内存中的位图
5. 对位图进行合成（可选），极大提高后续绘制速度
6. 绘制到界面
-->

---

# s
