import { LockOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Row, Space, Typography } from 'antd';
import Title from 'antd/es/skeleton/Title';
import styles from './style.module.scss';

const { Text } = Typography;

export default function Credit() {
  return (
    <>
      <Col span={24}>
        <Row gutter={[0, 14]}>
          <Col span={24}>
            <Space direction='vertical' size={5}>
              <Title level={5}>Payment</Title>
              <Text style={{ color: '#707070', fontSize: 13 }}>All transactions are secure and encrypted.</Text>
            </Space>
          </Col>
          <Col span={24}>
            <div className={styles.creditCard}>
              <div className={styles.titleGroup}>
                <Text strong>Credit card</Text>
                <img src='https://cdn.shopify.com/shopifycloud/checkout-web/assets/f9cb6714da64e73281df.svg' alt='' />
              </div>
              <div className={styles.form}>
                <Form>
                  <Row gutter={[14, 14]}>
                    <Col span={24}>
                      <Form.Item name='cardNumber'>
                        <Input placeholder='Card number' suffix={<LockOutlined />} />
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Form.Item name='name'>
                        <Input placeholder='Name on card' />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item name='expried'>
                        <Input placeholder='Expiration date(MM/YY)' />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item name='code'>
                        <Input placeholder='Security code' suffix={<QuestionCircleOutlined />} />
                      </Form.Item>
                    </Col>
                  </Row>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Col>
      <Col style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} span={24}>
        <Button type='primary' size='large'>
          Pay now
        </Button>
      </Col>
    </>
  );
}
