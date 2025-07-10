// 统一的状态管理 - 使用 Zustand
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import useUserStore from './user'
import useCountStore from './count'
import useTodoStore from './todo'

// 导出各个模块的 store
export { default as useUserStore } from './user'
export { default as useCountStore } from './count'
export { default as useTodoStore } from './todo'

// 如果需要统一的状态管理，可以创建一个组合 store
interface AppStore {
  // 可以在这里添加全局状态
  isLoading: boolean
  setLoading: (loading: boolean) => void
}

const useAppStore = create<AppStore>()(
  devtools(
    persist(
      (set) => ({
        isLoading: false,
        setLoading: (loading: boolean) => set({ isLoading: loading }),
      }),
      {
        name: 'app-store',
      }
    )
  )
)

export { useAppStore }

// 为了向后兼容，保留 useStore 函数
// 但建议直接使用具体的 store hooks
export const useStore = () => {
  return {
    user: useUserStore(),
    count: useCountStore(),
    todo: useTodoStore(),
    app: useAppStore(),
  }
}
