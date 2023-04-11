# 从零开始实现一个 mini-Vuex

## 1. Vuex是什么？

Vuex 是一个专门为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。Vuex
的核心是 store，它基本上就是一个容器，它包含着你的应用中大部分的状态 (state)。Vuex 和单纯的全局对象有以下两点不同：

1. Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。
2. 你不能直接改变 store 中的状态。改变 store 中的状态的唯一途径就是显式地提交 (commit)
   mutation。这样使得我们可以方便地跟踪每一个状态的变化，从而让我们能够实现一些工具帮助我们更好地了解我们的应用。
3. 为了更好地实现状态管理，Vuex 也提供了一些辅助函数，比如 mapState、mapGetters、mapActions、mapMutations 等。
4. Vuex 还提供了一个插件系统，可以自定义一些功能，比如日志记录、状态快照、状态回放等。
5. Vuex 还提供了一个严格模式，可以保证状态只能通过 mutation 来改变，而不能直接改变。
6. Vuex 还提供了一个模块系统，可以将 store 分割成模块，每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块——从上至下进行同样方式的分割。
7. Vuex 还提供了一个辅助函数 createNamespacedHelpers，用来生成带有命名空间的辅助函数，以简化在带命名空间的模块中调用。

## 2. Vuex的基本使用

挂上一个文档

## 3. mini-Vuex的实现

#### 3.1. 创建store实例：createStore

#### 3.2. vue使用插件：app.use

#### 3.3. 获取Vuex中的数据：store.state

#### 3.4. 修改Vuex中的数据：store.commit

#### 3.5. 异步修改Vuex中的数据：store.dispatch

#### 3.6. 计算属性：store.getters

#### 3.7. 支持composition API：useStore

#### 3.8. 支持模块化：store.registerModule
