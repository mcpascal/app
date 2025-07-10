// 用户模块 - 使用 Zustand
import { create } from 'zustand'
import api from '@/api'

interface UserInfo {
  id: number
  name: string
  username: string
}

interface UserStore {
  userInfo: UserInfo
  profile: () => Promise<void>
  setUserInfo: (userInfo: UserInfo) => void
  clearUserInfo: () => void
}

const useUserStore = create<UserStore>((set, get) => ({
  userInfo: {
    id: 0,
    name: '',
    username: '',
  },
  
  profile: async () => {
    try {
      const res = await api.user.profile()
      const { id, name, username } = res.data
      set({
        userInfo: {
          id,
          name,
          username,
        }
      })
    } catch (error) {
      console.error('获取用户信息失败:', error)
    }
  },
  
  setUserInfo: (userInfo: UserInfo) => {
    set({ userInfo })
  },
  
  clearUserInfo: () => {
    set({
      userInfo: {
        id: 0,
        name: '',
        username: '',
      }
    })
  }
}))

export default useUserStore
