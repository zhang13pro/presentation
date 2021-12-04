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
lineNumbers: false
# some information about the slides, markdown enabled
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# persist drawings in exports and build
drawings:
  persist: false
---

# Webpack 原理

## 模块化的演进

### 文件划分

- 模块直接在全局工作，大量模块成员污染全局作用域
- 没有私有空间，所有模块内的成员都可以在模块外部被访问或者修改
- 一旦模块增多，容易产生命名冲突
- 无法管理模块与模块之间的依赖关系
- 在维护的过程中也很难分辨每个成员所属的模块

### 命名空间

- 解决命名冲突问题

### IIFE

- 解决命名冲突和全局作用域污染

### IIFE 依赖参数

- 明确模块之间的依赖关系

## 模块化规范

### CommonJS

- 同步加载模块

### AMD(Asynchronous Module Definition)

- Require.js

### CMD

- Sea.js

### ES Modules

- 兼容问题
- 多模块文件的频繁请求
- 前端应用的非 JS 模块

## Mode

### production

- 启动内置优化插件，自动优化打包结果，打包速度偏慢

### development

- 自动优化打包速度，添加一些调试过程中的辅助插件

### none

- 运行最原始的打包，不做任何额外处理

## 打包结果运行原理(V5)

### V4

- 生成 IIFE，每个模块对应一个函数直接量（表达式）作为参数数组里的 item 传入

### V5

- **webpack_modules** 变量 保存模块参数[IIFE]

### **webpack_module_cache** 对象 缓存模块

### **webpack_require**(id) 加载指定模块

- 判断缓存是否可用

### IIFE 包裹的工具函数

### 调用**webpack_require**(module_id)

## Loader

### webpack 只解析 JS token

### 实现不同种类资源模块加载的核心

### css-loader

- 本质是将 CSS 脚本字符串 push 到 **_CSS_LOADER_EXPORT_** 数组

### style-loader

- insertStyleElement() 创建 style 标签

### loader 本质是一个处理依赖资源(作为参数传入)的函数，并返回处理结果(标准的 JS 代码字符串)

### loader 返回结果直接被拼接到构建结果，所以得是 JS 代码，不然会报错

## Plugin

### 本质就是钩子机制，往不同节点上挂载不同的任务从而扩展 webpack 的能力

### 写一个插件类

- 定义 apply 方法
- compiler 对象作为参数
- compilation 对象获取依赖模块
- 对模块代码进行操作并返回

### 理论上 loader 能做的事使用 plugin 也能做

### plugin 能完成 loader 的功能吗

- loader 是在加载过程中，拿到源文件内容，再进行一些处理，最后转化成 js 代码。
- plugin 也能够在合适的时机拿到源文件内容，并通过一些操作，最后覆盖源文件。
- 所以理论上是可行的，但不符合 webpack 的设计哲学。

## 运行机制

### 通过 Loader 处理特殊类型资源的加载，例如加载样式、图片；

### 通过 Plugin 实现各种自动化的构建任务，例如自动压缩、自动发布。

### 打包过程

- 根据配置找到指定入口文件
- 根据 import , require 构建依赖关系树
- 遍历依赖交给指定 loader 加载模块
- 加载结果放入打包结果(bundle.js)
- 无法用 JS 表示的资源将对应的访问路径作为这个模块的导出成员暴露给外部

## 工作原理

### 关键环节

- Webpack CLI 启动打包流程
- 载入 Webpack 核心模块，创建 Compiler 对象
- 使用 Compiler 对象开始编译整个项目
- 从入口文件开始，解析模块依赖，形成依赖关系树
- 递归依赖树，将每个模块交给对应的 Loader 处理
- 合并 Loader 处理完的结果，将打包结果输出到 dist 目录

### Webpack CLI

### 创建 Compiler 对象

### 开始构建

### make 阶段
