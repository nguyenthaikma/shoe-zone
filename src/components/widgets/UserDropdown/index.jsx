import { LoginOutlined, UserOutlined, EuroCircleOutlined, LockOutlined } from '@ant-design/icons';
import { checkAuth, clearStoredAuth, getStoredAuth } from '@libs/localStorage';
import { Avatar, Button, Col, Dropdown, Form, Input, Modal, Row, Space, Typography, notification } from 'antd';
import { useNavigate } from 'react-router-dom';

import styles from './style.module.scss';
import { useState } from 'react';
import { useMutationChangePassword } from '@src/queries/hooks';

const { Text } = Typography;

function UserDropdownAuth({ color = '#fff', size = 36 }) {
  const profile = getStoredAuth();
  const navigate = useNavigate();
  const accessToken = checkAuth();
  const [form] = Form.useForm();

  const [visible, setVisible] = useState(false);

  const onLogout = (e) => {
    e.preventDefault();
    clearStoredAuth();
    navigate('/login');
  };

  const { mutate: changePassword } = useMutationChangePassword(accessToken);

  const onSubmit = (values) => {
    changePassword(
      { ...values, userID: profile?.userID },
      {
        onSuccess: () => {
          setVisible(false);
        },
      }
    );
  };

  const items = [
    {
      key: '1',
      label: (
        <Button
          block
          type='link'
          size='small'
          onClick={() => {
            if (!accessToken) {
              notification.error({ message: 'Please login to continue!' });
              return navigate('/login');
            }
            console.log('hiccS');
            navigate('/order');
          }}
        >
          <Space size={10} align='center'>
            <EuroCircleOutlined />
            <Text>Order</Text>
          </Space>
        </Button>
      ),
    },
    {
      key: '2',
      label: (
        <Button block type='link' size='small' onClick={() => setVisible(true)}>
          <Space size={10} align='center'>
            <LockOutlined />
            <Text>Change password</Text>
          </Space>
        </Button>
      ),
    },
    {
      key: '3',
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
      <Modal
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
      </Modal>
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
