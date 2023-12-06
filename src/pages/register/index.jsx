import { Button, Col, Form, Input, Row } from 'antd';

import BreadcrumbPage from '@src/components/elements/BreadcrumbPage';
import styles from './style.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useMutationRegister } from '@src/queries/hooks';

export default function Register() {
  const navigate = useNavigate();

  const { mutate: Register, isLoading } = useMutationRegister();
  const onSubmit = (values) => {
    Register(
      { ...values },
      {
        onSuccess: () => {
          navigate('/login');
        },
      }
    );
  };

  return (
    <Row className={styles.wrapper}>
      <BreadcrumbPage title='Register' className={styles.breadCrumb} />
      <Col span={24} className={styles.form}>
        <div className='container'>
          <Form onFinish={onSubmit} layout='vertical'>
            <Row gutter={[0, 30]}>
              <Col span={24}>
                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: 'Username is required!',
                    },
                  ]}
                  name='username'
                >
                  <Input placeholder='Username' />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: 'First name is required!',
                    },
                  ]}
                  name='firstName'
                >
                  <Input placeholder='First name' />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: 'Last name is required!',
                    },
                  ]}
                  name='lastName'
                >
                  <Input placeholder='Last name' />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: 'Password is required!',
                    },
                  ]}
                  name='password'
                >
                  <Input.Password placeholder='Password' type='password' />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: 'Confirm password is required!',
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(new Error('Password not match'));
                      },
                    }),
                  ]}
                  u
                  name='passwordConfirm'
                >
                  <Input.Password placeholder='Confirm password' type='password' />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Button loading={isLoading} type='primary' htmlType='submit'>
                  CREATE
                </Button>
              </Col>
            </Row>
          </Form>
          <div className={styles.bottom}>
            <Row gutter={[30, 0]}>
              <Col span={8}>
                <Link className={styles.link} to='/login'>
                  Login
                </Link>
              </Col>
              <Col span={8}>
                <Link className={styles.link} to='/'>
                  Return to Store
                </Link>
              </Col>
            </Row>
          </div>
        </div>
      </Col>
    </Row>
  );
}
