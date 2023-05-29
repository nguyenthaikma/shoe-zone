import { LoginOutlined, UserOutlined } from '@ant-design/icons';
import { clearStoredAuth, getStoredAuth } from '@libs/localStorage';
import { Avatar, Button, Dropdown, Row, Space, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';

import styles from './style.module.scss';

const { Text } = Typography;

function UserDropdownAuth({ color = '#fff', size = 36 }) {
  const profile = getStoredAuth();
  const navigate = useNavigate();

  const onLogout = (e) => {
    e.preventDefault();
    clearStoredAuth();
    navigate('/login');
  };

  const items = [
    {
      key: '1',
      label: (
        <Button size='small' onClick={onLogout}>
          <Space size={10} align='center'>
            <LoginOutlined />
            <Text>Logout</Text>
          </Space>
        </Button>
      ),
    },
  ];

  return (
    <Row style={{ height: 'fit-content' }} className='user-dropdown'>
      {profile && (
        <Dropdown menu={{ items }} placement='topRight'>
          <Space className={styles.space} style align='center'>
            <Avatar size={size} icon={<UserOutlined />} src={profile?.avatar?.location} />
            <Typography.Paragraph style={{ color, margin: 0 }} className='user-label' ellipsis={{ rows: 1 }}>
              Hi, {profile.username}
            </Typography.Paragraph>
          </Space>
        </Dropdown>
      )}
    </Row>
  );
}

export default UserDropdownAuth;
