import { useState } from 'react'
import { Input, Button, List, Checkbox, Space, Typography, Card } from 'antd'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import useTodoStore from '@/store/todo'

const { TextArea } = Input
const { Title, Text } = Typography

const TodoList = () => {
  const [newTodoText, setNewTodoText] = useState('')
  const [editingId, setEditingId] = useState<number | null>(null)
  const [editingText, setEditingText] = useState('')

  const {
    todos,
    addTodo,
    toggleTodo,
    removeTodo,
    updateTodo,
    clearCompleted,
    getCompletedTodos,
    getActiveTodos
  } = useTodoStore()

  const handleAddTodo = () => {
    if (newTodoText.trim()) {
      addTodo(newTodoText)
      setNewTodoText('')
    }
  }

  const handleEdit = (todo: any) => {
    setEditingId(todo.id)
    setEditingText(todo.text)
  }

  const handleSaveEdit = () => {
    if (editingId && editingText.trim()) {
      updateTodo(editingId, editingText)
      setEditingId(null)
      setEditingText('')
    }
  }

  const handleCancelEdit = () => {
    setEditingId(null)
    setEditingText('')
  }

  const completedCount = getCompletedTodos().length
  const activeCount = getActiveTodos().length

  return (
    <Card style={{ maxWidth: 600, margin: '20px auto' }}>
      <Title level={2}>Todo List</Title>
      
      {/* 添加新 Todo */}
      <Space.Compact style={{ width: '100%', marginBottom: 16 }}>
        <Input
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          onPressEnter={handleAddTodo}
          placeholder="添加新的待办事项..."
        />
        <Button type="primary" onClick={handleAddTodo}>
          添加
        </Button>
      </Space.Compact>

      {/* 统计信息 */}
      <div style={{ marginBottom: 16 }}>
        <Text>总计: {todos.length} | 已完成: {completedCount} | 未完成: {activeCount}</Text>
        {completedCount > 0 && (
          <Button 
            size="small" 
            onClick={clearCompleted}
            style={{ marginLeft: 8 }}
          >
            清除已完成
          </Button>
        )}
      </div>

      {/* Todo 列表 */}
      <List
        dataSource={todos}
        renderItem={(todo) => (
          <List.Item
            actions={[
              <Button
                key="edit"
                type="text"
                icon={<EditOutlined />}
                onClick={() => handleEdit(todo)}
                disabled={editingId !== null}
              />,
              <Button
                key="delete"
                type="text"
                danger
                icon={<DeleteOutlined />}
                onClick={() => removeTodo(todo.id)}
                disabled={editingId !== null}
              />
            ]}
          >
            <List.Item.Meta
              avatar={
                <Checkbox
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                  disabled={editingId !== null}
                />
              }
              title={
                editingId === todo.id ? (
                  <Space.Compact>
                    <Input
                      value={editingText}
                      onChange={(e) => setEditingText(e.target.value)}
                      onPressEnter={handleSaveEdit}
                    />
                    <Button size="small" onClick={handleSaveEdit}>
                      保存
                    </Button>
                    <Button size="small" onClick={handleCancelEdit}>
                      取消
                    </Button>
                  </Space.Compact>
                ) : (
                  <span style={{ 
                    textDecoration: todo.completed ? 'line-through' : 'none',
                    color: todo.completed ? '#999' : '#000'
                  }}>
                    {todo.text}
                  </span>
                )
              }
              description={`创建时间: ${todo.createdAt.toLocaleString()}`}
            />
          </List.Item>
        )}
      />
    </Card>
  )
}

export default TodoList