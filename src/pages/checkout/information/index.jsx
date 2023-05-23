import { Button, Col, Form, Input, Row, Typography } from 'antd';
import styles from './style.module.scss';
import { Link, useNavigate, useParams } from 'react-router-dom';

const { Title, Text } = Typography;

export default function Information() {
  const navigate = useNavigate();
  const { idProduct } = useParams();
  return (
    <Form layout='vertical'>
      <Row gutter={[0, 32]} className={styles.wrapper}>
        <Col span={24}>
          <div className={styles.titleGr}>
            <Title level={5}>Contact</Title>
            <Text>
              Already have an account? <Link to='/login'>Login</Link>
            </Text>
          </div>
          <Form.Item name='email'>
            <Input placeholder='Email' />
          </Form.Item>
        </Col>
        <Col span={24}>
          <div className={styles.titleGr}>
            <Title level={5}>Contact</Title>
          </div>
          <Row gutter={[14, 14]}>
            <Col span={12}>
              <Form.Item name='firstName'>
                <Input placeholder='First name' />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name='lastName'>
                <Input placeholder='Last name' />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item name='address'>
                <Input placeholder='Address' />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item name='apartment'>
                <Input placeholder='Apartment, suit, etc. (optional)' />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name='city'>
                <Input placeholder='City' />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name='postalCode'>
                <Input placeholder='Postal code' />
              </Form.Item>
            </Col>
          </Row>
        </Col>
        <Col style={{ textAlign: 'right' }} span={24}>
          <Button onClick={() => navigate(`/checkouts/shipping?product=${idProduct}`)} type='primary' size='large'>
            Continue to shipping
          </Button>
        </Col>
      </Row>
    </Form>
  );
}
