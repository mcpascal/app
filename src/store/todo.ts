// Todo 模块 - 使用 Zustand
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

export interface Todo {
  id: number
  text: string
  completed: boolean
  createdAt: Date
}

interface TodoStore {
  todos: Todo[]
  addTodo: (text: string) => void
  toggleTodo: (id: number) => void
  removeTodo: (id: number) => void
  updateTodo: (id: number, text: string) => void
  clearCompleted: () => void
  getCompletedTodos: () => Todo[]
  getActiveTodos: () => Todo[]
  getTodoById: (id: number) => Todo | undefined
}

const useTodoStore = create<TodoStore>()(
  devtools(
    persist(
      (set, get) => ({
        todos: [
          {
            id: 1,
            text: "学习 Zustand",
            completed: false,
            createdAt: new Date()
          }
        ],

        addTodo: (text: string) => {
          const newTodo: Todo = {
            id: Date.now(),
            text: text.trim(),
            completed: false,
            createdAt: new Date()
          }
          set((state) => ({
            todos: [...state.todos, newTodo]
          }))
        },

        toggleTodo: (id: number) => {
          set((state) => ({
            todos: state.todos.map(todo =>
              todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
          }))
        },

        removeTodo: (id: number) => {
          set((state) => ({
            todos: state.todos.filter(todo => todo.id !== id)
          }))
        },

        updateTodo: (id: number, text: string) => {
          set((state) => ({
            todos: state.todos.map(todo =>
              todo.id === id ? { ...todo, text: text.trim() } : todo
            )
          }))
        },

        clearCompleted: () => {
          set((state) => ({
            todos: state.todos.filter(todo => !todo.completed)
          }))
        },

        getCompletedTodos: () => {
          return get().todos.filter(todo => todo.completed)
        },

        getActiveTodos: () => {
          return get().todos.filter(todo => !todo.completed)
        },

        getTodoById: (id: number) => {
          return get().todos.find(todo => todo.id === id)
        }
      }),
      {
        name: 'todo-store',
      }
    )
  )
)

export default useTodoStore 