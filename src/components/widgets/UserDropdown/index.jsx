import { LoginOutlined, UserOutlined } from '@ant-design/icons';
import { checkAuth, clearStoredAuth } from '@libs/localStorage';
import { Avatar, Button, Dropdown, Row, Space, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';

import { useQueryProfile } from '@src/queries/hooks';
import styles from './style.module.scss';

const { Text } = Typography;

function UserDropdownAuth({ color = '#fff', size = 36 }) {
  const navigate = useNavigate();
  const accessToken = checkAuth();

  const { data: profile } = useQueryProfile(accessToken);

  const onLogout = (e) => {
    e.preventDefault();
    clearStoredAuth();
    navigate('/login');
  };

  const items = [
    {
      key: '1',
      label: (
        <Button block type='link' size='small' onClick={onLogout}>
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
      {/* <Modal
        isLoading
        okText='Done'
        onOk={() => form.submit()}
        onCancel={() => setVisible(false)}
        open={visible}
        title='Change password'
      >
        <Form form={form} onFinish={onSubmit} layout='vertical'>
          <Row gutter={[0, 12]}>
            <Col span={24}>
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: 'Please enter current password',
                  },
                ]}
                name='oldPassword'
              >
                <Input.Password placeholder='Current password' />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: 'Please enter new password',
                  },
                ]}
                name='newPassword'
              >
                <Input.Password placeholder='New password' />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: 'Please confirm password',
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('newPassword') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('Password not match'));
                    },
                  }),
                ]}
                name='newPasswordAgain'
              >
                <Input.Password placeholder='Confirm password' />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal> */}
      <Dropdown menu={{ items }} trigger='click' overlayStyle={{ position: 'fixed' }} placement='bottomRight'>
        <Space className={styles.space} style align='center'>
          <Avatar size={size} icon={<UserOutlined />} src={profile?.avatar?.location} />
          <Typography.Paragraph style={{ color, margin: 0 }} className='user-label' ellipsis={{ rows: 1 }}>
            Hi, {profile?.data?.username || 'Admin'}
          </Typography.Paragraph>
        </Space>
      </Dropdown>
    </Row>
  );
}

export default UserDropdownAuth;
