import { Button, Col, Form, Input, Row } from 'antd';

import BreadcrumbPage from '@src/components/elements/BreadcrumbPage';
import { useMutationLogin } from '@src/queries/hooks';
import { Link, useNavigate } from 'react-router-dom';
import styles from './style.module.scss';

export default function Login() {
  const navigate = useNavigate();

  const { mutate: Login } = useMutationLogin();
  const onSubmit = (values) => {
    Login(values, {
      onSuccess: () => {
        navigate('/');
      },
    });
  };
  return (
    <Row className={styles.wrapper}>
      <BreadcrumbPage title='Login' className={styles.breadCrumb} />
      <Col span={24} className={styles.form}>
        <div className='container'>
          <Form onFinish={onSubmit} layout='vertical'>
            <Row gutter={[0, 30]}>
              <Col span={24}>
                <Form.Item name='username'>
                  <Input placeholder='Email' />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item name='password'>
                  <Input.Password placeholder='Password' />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Button type='primary' htmlType='submit'>
                  SIGN IN
                </Button>
              </Col>
            </Row>
          </Form>
          <div className={styles.bottom}>
            <Row gutter={[30, 0]}>
              <Col span={8}>
                <Link className={styles.link} to='/'>
                  Forgot your password?
                </Link>
              </Col>
              <Col span={8}>
                <Link className={styles.link} to='/register'>
                  Create account
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
