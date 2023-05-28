import { Button, Col, Form, Input, Row } from 'antd';

import BreadcrumbPage from '@src/components/elements/BreadcrumbPage';
import styles from './style.module.scss';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <Row className={styles.wrapper}>
      <BreadcrumbPage className={styles.breadCrumb} />
      <Col span={24} className={styles.form}>
        <div className='container'>
          <Form onFinish={onSubmit} layout='vertical'>
            <Row gutter={[0, 30]}>
              <Col span={24}>
                <Form.Item name='email'>
                  <Input placeholder='Email' />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item name='password'>
                  <Input placeholder='Password' type='password' />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Button onClick={() => navigate('/admin')} type='primary' htmlType='submit'>
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
