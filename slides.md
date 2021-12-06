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

# Run JavaScript

[@zhang13pro](https://github.com/zhang13pro)

---

# this 关键字

`this` 和执行上下文绑定

<div class="flex">
  <img src="/context.png" class="m-20 h-20 rounded shadow left" alt="执行上下文中的this" />

</div>

- 全局调用
- 对象属性(方法)调用
- 显式绑定
- new 构造

<!-- 优先级从上到下 -->

---

# apply

```js
Function.prototype.myApply = function (context, argsArray) {
  if (typeof this !== "function") throw new TypeError("type error");

  let fn = Symbol();
  context = context || window;
  context[fn] = this;

  return context[fn](...argsArray);
};
```

# call

```js
Function.prototype.myCall = function (context, ...args) {
  if (typeof this !== "function") throw new TypeError("type error");

  let fn = Symbol();
  context = context || window;
  context[fn] = this;

  return context[fn](...args);
};
```

---

# bind

```js
Function.prototype.myBind = function (context) {
  if (typeof this !== "function") throw new Error("TypeError");

  let args = [...arguments].slice(1);
  let fn = this;

  return function Fn() {
    return fn.apply(
      this instanceof Fn ? this : context,
      args.concat(...arguments)
    );
  };
};
```

---

# new

```js
function myNew(fn, ...args) {
  let obj = Object.create(fn.prototype);
  let res = fn.call(obj, ...args);
  if (res && (typeof res === "object" || typeof res === "function")) return res;

  return obj;
}
```

# Object.create

```js
function create(obj) {
  function F() {}
  F.prototype = obj;

  return new F();
}
```

<!-- 循环引用了属于是 -->
