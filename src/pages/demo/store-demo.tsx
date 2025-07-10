import { Card, Space, Button, Typography, Divider } from 'antd'
import { useUserStore, useCountStore, useTodoStore } from '@/store'
import TodoList from '@/components/todoList'

const { Title, Text } = Typography

const StoreDemo = () => {
  // 使用各个 store
  const { userInfo, profile, setUserInfo, clearUserInfo } = useUserStore()
  const { count, increment, decrement, reset } = useCountStore()
  const { todos, addTodo, clearCompleted } = useTodoStore()

  const handleSetUserInfo = () => {
    setUserInfo({
      id: 1,
      name: '测试用户',
      username: 'testuser'
    })
  }

  const handleAddSampleTodo = () => {
    addTodo(`示例任务 ${Date.now()}`)
  }

  return (
    <div style={{ padding: '20px' }}>
      <Title level={1}>Zustand Store 演示</Title>
      
      {/* 用户 Store 演示 */}
      <Card title="用户 Store" style={{ marginBottom: 16 }}>
        <Space direction="vertical" style={{ width: '100%' }}>
          <div>
            <Text strong>用户信息:</Text>
            <pre>{JSON.stringify(userInfo, null, 2)}</pre>
          </div>
          <Space>
            <Button type="primary" onClick={profile}>
              获取用户信息
            </Button>
            <Button onClick={handleSetUserInfo}>
              设置测试用户
            </Button>
            <Button danger onClick={clearUserInfo}>
              清除用户信息
            </Button>
          </Space>
        </Space>
      </Card>

      {/* 计数 Store 演示 */}
      <Card title="计数 Store" style={{ marginBottom: 16 }}>
        <Space direction="vertical" style={{ width: '100%' }}>
          <div>
            <Text strong>当前计数: </Text>
            <Text style={{ fontSize: '24px', fontWeight: 'bold' }}>{count}</Text>
          </div>
          <Space>
            <Button onClick={decrement}>-1</Button>
            <Button type="primary" onClick={increment}>+1</Button>
            <Button onClick={reset}>重置</Button>
          </Space>
        </Space>
      </Card>

      {/* Todo Store 演示 */}
      <Card title="Todo Store" style={{ marginBottom: 16 }}>
        <Space direction="vertical" style={{ width: '100%' }}>
          <div>
            <Text strong>Todo 数量: </Text>
            <Text>{todos.length}</Text>
          </div>
          <Space>
            <Button type="primary" onClick={handleAddSampleTodo}>
              添加示例 Todo
            </Button>
            <Button onClick={clearCompleted}>
              清除已完成
            </Button>
          </Space>
        </Space>
      </Card>

      <Divider />

      {/* 完整的 Todo 列表组件 */}
      <Card title="完整的 Todo 列表">
        <TodoList />
      </Card>
    </div>
  )
}

export default StoreDemo 