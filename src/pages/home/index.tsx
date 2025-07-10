import { useState } from 'react';
import { Card, Space, Button, Typography } from 'antd';
import { useUserStore, useCountStore } from '@/store';

const { Title, Text } = Typography;

const Index = () => {
    const [name] = useState("tony")
    
    // 使用 Zustand stores
    const { userInfo, profile } = useUserStore()
    const { count, increment, decrement } = useCountStore()
    
    return (
        <div style={{ padding: '20px' }}>
            <Title level={1}>Welcome {name}</Title>
            
            {/* 用户信息展示 */}
            <Card title="用户信息" style={{ marginBottom: 16 }}>
                <Space direction="vertical">
                    <div>
                        <Text strong>用户ID: </Text>
                        <Text>{userInfo.id || '未设置'}</Text>
                    </div>
                    <div>
                        <Text strong>用户名: </Text>
                        <Text>{userInfo.name || '未设置'}</Text>
                    </div>
                    <div>
                        <Text strong>账号: </Text>
                        <Text>{userInfo.username || '未设置'}</Text>
                    </div>
                    <Button type="primary" onClick={profile}>
                        获取用户信息
                    </Button>
                </Space>
            </Card>
            
            {/* 计数器展示 */}
            <Card title="计数器">
                <Space direction="vertical">
                    <div>
                        <Text strong>当前计数: </Text>
                        <Text style={{ fontSize: '20px', fontWeight: 'bold' }}>{count}</Text>
                    </div>
                    <Space>
                        <Button onClick={decrement}>-1</Button>
                        <Button type="primary" onClick={increment}>+1</Button>
                    </Space>
                </Space>
            </Card>
        </div>
    )
}

export default Index