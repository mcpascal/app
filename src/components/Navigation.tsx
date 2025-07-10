import { Menu } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import { HomeOutlined, ExperimentOutlined, UserOutlined, AudioOutlined } from '@ant-design/icons';

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      key: '/',
      icon: <HomeOutlined />,
      label: '首页',
    },
    {
      key: '/demo',
      icon: <ExperimentOutlined />,
      label: '演示',
      children: [
        {
          key: '/demo/count',
          label: '计数器',
        },
        {
          key: '/demo/store',
          label: 'Store 演示',
        },
        {
          key: '/demo/audio',
          icon: <AudioOutlined />,
          label: '音频播放',
        },
      ],
    },
    {
      key: '/users',
      icon: <UserOutlined />,
      label: '用户管理',
    },
  ];

  const handleMenuClick = ({ key }: { key: string }) => {
    navigate(key);
  };

  return (
    <Menu
      mode="horizontal"
      selectedKeys={[location.pathname]}
      items={menuItems}
      onClick={handleMenuClick}
      style={{ marginBottom: 16 }}
    />
  );
};

export default Navigation; 