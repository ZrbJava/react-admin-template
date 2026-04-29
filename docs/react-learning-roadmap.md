# React Learning Roadmap

## 目标定位

你已经有 8 年前端开发经验，并且长期使用 Vue 技术栈开发 Web 项目。

这意味着你的学习重点不是从零入门前端，而是完成以下迁移：

- 从 Vue 的响应式和模板思维，迁移到 React 的状态驱动和 JSX 思维
- 从会看文档，迁移到能独立落地 React 项目
- 从只会使用 API，迁移到理解 React 核心机制、工程实践和面试表达

建议把目标拆成三个阶段：

1. 能写：能够独立完成 React 中小型项目开发
2. 能做好：能够掌握工程化、状态管理、性能优化和组件设计
3. 能面试：能够清晰表达 React 原理、生态选型和项目经验

---

## 总体学习策略

结合你当前背景，最适合的学习方式不是先把所有知识点学完，而是采用下面这条主线：

`基础 API -> 小项目实践 -> 补原理 -> 做完整项目 -> 整理面试表达`

核心原则：

- 不要只看文档，必须尽快上手项目
- 每学一个知识点，都尽量和 Vue 做对比
- 每做完一个模块，都整理成自己的面试话术
- 学习顺序以“项目落地价值”为优先，而不是以知识点完整性为优先

---

## 学习阶段规划

## 第一阶段：React 基础落地

这一阶段的目标是先把 React 项目开发最常用的能力打通。

### 需要掌握的内容

- JSX 语法
- 函数组件
- props / state
- 条件渲染
- 列表渲染
- 事件处理
- 表单处理
- 受控组件与非受控组件
- 组件拆分
- 组件通信
- Hook 基础

### 必学 Hook

- `useState`
- `useEffect`
- `useRef`
- `useMemo`
- `useCallback`
- `useReducer`
- 自定义 Hook

### 这一阶段必须真正理解的问题

- React 为什么强调声明式 UI
- 状态变化是如何驱动视图更新的
- 组件为什么会重新渲染
- `useEffect` 本质上是为了解决什么问题
- 为什么 Hook 只能在组件顶层调用

### 建议产出

- Todo List
- 用户管理列表
- 带筛选条件的表格页
- 表单录入与校验 Demo

---

## 第二阶段：React 项目基础设施

这一阶段的目标是具备独立搭建 React 项目的能力。

### 需要掌握的内容

- `Vite`
- `TypeScript`
- `ESLint`
- `Prettier`
- `Husky`
- `lint-staged`
- 环境变量管理
- 路径别名
- API 请求封装
- 错误处理
- 项目目录结构设计

### 需要掌握的项目能力

- 封装请求模块
- 封装通用表格和表单逻辑
- 规范代码风格和提交质量
- 组织清晰的目录结构
- 根据环境切换配置

### 建议产出

- 一个可以直接作为项目模板使用的 React + TypeScript 初始化工程

---

## 第三阶段：React 生态核心能力

这一阶段的目标是把项目真正做起来。

### 1. 路由

重点学习：

- `React Router`
- 嵌套路由
- 动态路由
- 路由懒加载
- 路由权限控制思路

### 2. 状态管理

建议学习顺序：

1. `useState` / `useReducer`
2. `Context`
3. `Redux Toolkit`
4. `Zustand` 作为补充了解

重点理解：

- 本地状态和全局状态的边界
- Context 为什么不完全等于状态管理方案
- Redux Toolkit 为什么比传统 Redux 更适合现代 React 项目

### 3. 服务端状态管理

建议重点学习：

- `TanStack Query`

必须掌握：

- 请求缓存
- 请求状态管理
- 重试机制
- 失效与刷新
- 分页与无限加载
- 预取
- 乐观更新

这一块非常重要，因为它已经是现代 React 项目里非常高频的实践能力。

### 4. UI 组件库

中后台项目优先建议：

- `Ant Design`

可选补充：

- `MUI`
- `shadcn/ui`

### 5. 样式方案

建议掌握以下主流方案：

- `CSS Modules`
- `Sass`
- `Tailwind CSS`

如果是中后台项目，优先掌握传统工程样式组织方式；如果是现代应用或营销页面，再重点补 `Tailwind CSS`。

---

## 第四阶段：React 原理与性能优化

这一阶段决定你能不能做到“精通”和“能面试说透”。

### 需要掌握的核心原理

- JSX 编译结果是什么
- 虚拟 DOM 的作用
- Diff 的基本思路
- key 为什么重要
- React 渲染流程
- Fiber 架构解决了什么问题
- 状态更新与批量更新
- 闭包陷阱
- 状态快照
- 副作用执行时机
- React 18 的并发更新基础概念

### 性能优化必须会的内容

- 什么时候需要 `memo`
- 什么时候需要 `useMemo`
- 什么时候需要 `useCallback`
- 如何减少不必要渲染
- 列表渲染优化
- 组件拆分策略
- 懒加载和代码分割
- 大表格、大表单场景优化

### 学习建议

这一阶段不建议一开始就硬啃源码。

更高效的方式是：

1. 先通过文章和官方文档理解机制
2. 在自己的项目中观察渲染和状态问题
3. 再带着问题补源码和底层实现思路

---

## 第五阶段：测试与工程质量

如果你希望在实际项目和面试中更有竞争力，这部分不能跳过。

### 需要掌握的内容

- 单元测试
- 组件测试
- 基本集成测试思路
- Mock 数据
- 关键业务流程测试

### 推荐技术

- `Vitest` 或 `Jest`
- `React Testing Library`

### 重点能力

- 测试组件交互
- 测试表单行为
- 测试异步请求后的 UI 变化
- 测试自定义 Hook

---

## 第六阶段：Next.js 与现代 React 全栈认知

如果你的目标是提升 React 技术栈完整度，或者未来想接触更现代的前端岗位，Next.js 很值得学习。

### 需要掌握的内容

- 路由系统
- Layout
- Client Component / Server Component 基本认知
- 数据获取方式
- SSR / SSG / CSR 的区别
- SEO 基础
- 部署方式

### 学习重点

- 不一定一开始就追求全栈
- 但要理解 Next.js 为什么成为 React 主流框架之一
- 至少能够完成一个基础的 Next.js 项目

---

## 技术栈学习清单

下面这套是比较适合“React 实战 + 面试”的主线技术栈：

### 基础语言与工程

- `JavaScript`
- `TypeScript`
- `ES Modules`
- `Git`
- `Vite`
- `ESLint`
- `Prettier`
- `Husky`
- `lint-staged`

### React 核心

- `React`
- `JSX`
- `Hooks`
- `Custom Hooks`
- `React.memo`
- `Suspense` 基础

### React 生态

- `React Router`
- `Redux Toolkit`
- `Zustand`
- `TanStack Query`
- `Axios`
- `Ant Design`
- `Tailwind CSS`

### 测试

- `Vitest` / `Jest`
- `React Testing Library`

### 进阶框架

- `Next.js`

### 补充建议

可以了解但不必一开始重投入的内容：

- `Webpack` 深水区
- React 源码实现细节
- Node.js 服务端开发
- 微前端
- React Native

---

## Vue 到 React 的迁移对照

你已经有 Vue 经验，学习时强烈建议通过对照法建立认知。

### 思维差异

- Vue 更偏模板和响应式表达
- React 更偏函数式和状态驱动表达

### 常见对照

- Vue `template` 对应 React `JSX`
- Vue `data / reactive / ref` 对应 React `state`
- Vue `computed` 对应 React 中的派生数据与 `useMemo`
- Vue `watch / mounted / updated` 对应 React `useEffect`
- Vue `props + emit` 对应 React `props + 回调函数`
- Vue Router 对应 `React Router`
- Pinia / Vuex 对应 `Redux Toolkit` / `Zustand`

### 迁移时最容易踩的坑

- 用 Vue 的生命周期思维硬套 `useEffect`
- 把所有值都想做成“自动响应式”
- 低估闭包和依赖数组问题
- 对组件重复渲染缺乏感知

---

## 项目实战路线

只看文档很难真正掌握 React，建议按三个项目逐步推进。

## 项目 1：基础中后台项目

### 推荐技术栈

- `React`
- `TypeScript`
- `Vite`
- `React Router`
- `Ant Design`
- `Axios`
- `Redux Toolkit` 或 `Zustand`

### 建议模块

- 登录页
- 布局页
- 菜单与路由
- 用户列表
- 新增/编辑表单
- 分页与筛选
- 基础权限控制

### 目标

- 跑通 React 项目开发主流程
- 建立组件拆分和页面组织习惯
- 掌握中后台高频开发场景

---

## 项目 2：业务型进阶项目

### 方向建议

- 商品管理系统
- 任务协作平台
- 博客管理后台
- 低代码表单平台

### 重点练习

- 复杂表单
- 组件抽象
- 业务 hooks
- 权限模型
- 表格性能优化
- 弹窗流转
- 多模块状态管理

### 目标

- 形成真正可讲的项目经验
- 能总结技术选型、难点和优化成果

---

## 项目 3：现代 React 项目

### 推荐技术栈

- `Next.js`
- `TypeScript`
- `TanStack Query`
- `Tailwind CSS`

### 重点练习

- SSR / CSR 选择
- SEO
- 数据获取方案
- 页面加载体验
- 现代前端部署流程

### 目标

- 补齐现代 React 技术栈认知
- 提高简历项目竞争力

---

## 12 周学习计划

假设每周可投入 10 到 15 小时，可以按下面的节奏推进。

## 第 1-2 周：React 核心入门

学习内容：

- JSX
- 函数组件
- `useState`
- `useEffect`
- `useRef`
- 组件通信
- 表单处理

产出：

- 2 到 3 个小 Demo

目标：

- 能够独立写基础页面和简单交互

## 第 3-4 周：工程化与路由状态管理入门

学习内容：

- `Vite`
- `TypeScript`
- `React Router`
- 请求封装
- `Context`
- `Redux Toolkit`

产出：

- 一个带登录、列表、详情的小项目

目标：

- 具备基础项目组织能力

## 第 5-8 周：完整中后台项目实践

学习内容：

- 模块化目录设计
- 权限控制
- 表单封装
- 表格封装
- 错误处理
- 通用 hooks
- 性能优化基础

产出：

- 一个可展示、可面试讲解的完整项目

目标：

- 真正打通 React 落地开发能力

## 第 9-10 周：测试与优化

学习内容：

- `Vitest` / `Jest`
- `React Testing Library`
- 懒加载
- 代码分割
- 渲染优化

产出：

- 为已有项目补关键测试
- 为重点页面做性能优化

目标：

- 让项目具备更强工程说服力

## 第 11-12 周：Next.js 与面试准备

学习内容：

- `Next.js`
- SSR / SSG / CSR
- SEO 基础
- React 原理总结
- 面试题整理

产出：

- 一个轻量 Next.js 项目
- 一份 React 面试题与项目总结

目标：

- 具备 React 中高级面试表达能力

---

## 面试必学清单

如果你的目标是“能落地，也能面试”，下面这些内容要重点准备。

### React 基础与原理

- React 和 Vue 的核心区别
- JSX 的本质
- 组件通信方式
- 受控组件与非受控组件
- `useState` 和 `useRef` 的区别
- `useEffect` 的执行时机
- `useMemo` / `useCallback` 的使用场景
- key 为什么不能随便写
- React 如何做性能优化
- Fiber 是什么
- React 18 有哪些变化
- 虚拟 DOM 和 Diff 的核心思路

### 工程实践

- React 项目如何做请求封装
- React 项目如何做权限控制
- 如何设计公共组件
- 如何封装业务 Hook
- 如何做错误边界和异常处理
- 如何做路由懒加载与代码分割

### 生态选型

- 为什么选择 Redux Toolkit
- Context 的优缺点
- TanStack Query 解决了什么问题
- Next.js 和 Vite 项目的区别与适用场景

### 项目表达

面试时不只要会写，还要能讲清楚：

- 项目背景是什么
- 你负责哪些核心模块
- 技术栈为什么这样选
- 最大难点是什么
- 如何优化性能和可维护性
- 最后取得了什么效果

---

## 学习资料建议

建议按下面顺序使用资料：

1. React 官方文档
2. 官方生态文档，如 React Router、Redux Toolkit、TanStack Query、Next.js
3. 完整项目实践
4. 高质量项目源码参考
5. 面试题整理
6. 最后再补源码级知识

---

## 当前阶段的执行建议

对你来说，最有价值的起步方式不是继续泛读文档，而是立即进入“边做边学”的状态。

建议你从下面这条路线开始执行：

1. 先用 `React + TypeScript + Vite + React Router + Ant Design + Redux Toolkit` 搭一个中后台项目骨架
2. 用这个项目完成登录、布局、菜单、列表、表单、权限这些基础模块
3. 在过程中补齐 Hook、状态管理、请求封装和组件设计
4. 项目完成后再集中梳理 React 原理、性能优化和面试题
5. 最后补一个 `Next.js` 项目，形成完整 React 技术栈闭环

---

## 判断自己是否学会的标准

如果你能做到下面这些，说明已经真正进入 React 实战阶段：

- 能独立从 0 搭建一个 React 项目
- 能独立完成中后台常见业务模块
- 能解释清楚常用 Hook 的原理和使用边界
- 能完成状态管理、路由、请求、权限等项目基础设施搭建
- 能发现并优化常见渲染性能问题
- 能把项目经验整理成有说服力的面试表达

---

## 下一步建议

这份路线图适合作为总纲。后续可以继续在 `docs` 下补充以下专题文档：

- `react-project-roadmap.md`
- `react-interview-outline.md`
- `react-vs-vue-migration-notes.md`
- `react-project-architecture.md`

如果要继续推进，下一步最适合直接落地的是：

- 产出一个详细的 React 练手项目方案
- 搭建第一个 React 项目骨架
- 整理一份按周执行的任务清单
