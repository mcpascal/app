# Zustand 状态管理

本项目使用 Zustand 作为状态管理库，替代了之前的 MobX。

## 项目结构

```
src/store/
├── index.ts      # 主入口文件，导出所有 stores
├── user.ts       # 用户状态管理
├── count.ts      # 计数器状态管理
├── todo.ts       # Todo 列表状态管理
└── README.md     # 本文档
```

## 使用方法

### 1. 基本使用

```tsx
import { useUserStore } from '@/store'

const MyComponent = () => {
  const { userInfo, profile } = useUserStore()
  
  return (
    <div>
      <p>用户名: {userInfo.name}</p>
      <button onClick={profile}>获取用户信息</button>
    </div>
  )
}
```

### 2. 多个 Store 组合使用

```tsx
import { useUserStore, useCountStore, useTodoStore } from '@/store'

const MyComponent = () => {
  const { userInfo } = useUserStore()
  const { count, increment } = useCountStore()
  const { todos, addTodo } = useTodoStore()
  
  return (
    <div>
      <p>欢迎, {userInfo.name}!</p>
      <p>计数: {count}</p>
      <p>待办事项: {todos.length}</p>
    </div>
  )
}
```

### 3. 使用统一的 useStore Hook

```tsx
import { useStore } from '@/store'

const MyComponent = () => {
  const { user, count, todo } = useStore()
  
  return (
    <div>
      <p>用户: {user.userInfo.name}</p>
      <p>计数: {count.count}</p>
      <p>待办: {todo.todos.length}</p>
    </div>
  )
}
```

## Store 详解

### User Store (`user.ts`)

管理用户相关信息：

- `userInfo`: 用户信息对象
- `profile()`: 获取用户信息
- `setUserInfo(userInfo)`: 设置用户信息
- `clearUserInfo()`: 清除用户信息

### Count Store (`count.ts`)

简单的计数器功能：

- `count`: 当前计数值
- `increment()`: 增加计数
- `decrement()`: 减少计数
- `reset()`: 重置计数
- `getCount()`: 获取当前计数

### Todo Store (`todo.ts`)

完整的 Todo 管理功能：

- `todos`: Todo 列表
- `addTodo(text)`: 添加新 Todo
- `toggleTodo(id)`: 切换 Todo 完成状态
- `removeTodo(id)`: 删除 Todo
- `updateTodo(id, text)`: 更新 Todo 内容
- `clearCompleted()`: 清除已完成的 Todo
- `getCompletedTodos()`: 获取已完成的 Todo
- `getActiveTodos()`: 获取未完成的 Todo
- `getTodoById(id)`: 根据 ID 获取 Todo

### App Store (`index.ts`)

全局应用状态：

- `isLoading`: 全局加载状态
- `setLoading(loading)`: 设置加载状态

## 特性

### 1. 持久化存储

Todo Store 和 App Store 使用了 Zustand 的 `persist` 中间件，数据会自动保存到 localStorage。

### 2. 开发工具支持

所有 Store 都使用了 `devtools` 中间件，可以在 Redux DevTools 中查看状态变化。

### 3. TypeScript 支持

所有 Store 都有完整的 TypeScript 类型定义。

## 最佳实践

### 1. Store 设计原则

- 每个 Store 专注于一个特定的功能领域
- 使用 TypeScript 接口定义 Store 结构
- 提供清晰的 API 接口

### 2. 组件中使用

- 优先使用具体的 Store hooks（如 `useUserStore`）
- 只在需要多个 Store 时才使用 `useStore`
- 避免在组件中直接修改 Store 状态

### 3. 异步操作

- 在 Store 中处理异步操作
- 使用 try-catch 处理错误
- 提供加载状态管理

### 4. 性能优化

- 使用 Zustand 的选择器功能避免不必要的重渲染
- 合理拆分 Store，避免单个 Store 过大

## 示例页面

访问 `/demo/store` 查看完整的 Zustand 使用示例。

## 迁移指南

从 MobX 迁移到 Zustand：

1. 将 MobX 的 `makeAutoObservable` 替换为 Zustand 的 `create`
2. 将类方法替换为 Store 对象的方法
3. 将 `this.state` 替换为 `set` 和 `get` 函数
4. 更新组件中的使用方式

## 相关链接

- [Zustand 官方文档](https://github.com/pmndrs/zustand)
- [Zustand 中间件](https://github.com/pmndrs/zustand#middleware)
- [TypeScript 支持](https://github.com/pmndrs/zustand#typescript) 