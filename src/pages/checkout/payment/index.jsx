import { Button, Col, Descriptions, Form, Input, Row, Space, Typography } from 'antd';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { LockOutlined, QuestionCircleOutlined } from '@ant-design/icons';

import styles from './style.module.scss';
import Swal from 'sweetalert2';

const { Text, Title } = Typography;

export default function Payment() {
  const { idProduct } = useParams();
  const navigate = useNavigate();

  const handlePay = () => {
    Swal.fire({
      icon: 'success',
      title: 'Payment success',
      confirmButtonText: 'Back home',
      footer: '<a href="/collections">Continue shopping</a>',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        navigate('/');
      }
    });
  };
  return (
    <Row gutter={[0, 38]} className={styles.wrapper}>
      <Col span={24} style={{ border: '1px solid #eee', padding: 12, paddingTop: 12, borderRadius: 8 }}>
        <Descriptions>
          <Descriptions.Item contentStyle={{ textAlign: 'right', display: 'block' }} span={24} label='Contact'>
            nguyenthai9cc@gmail.com
          </Descriptions.Item>
          <Descriptions.Item contentStyle={{ textAlign: 'right', display: 'block' }} span={24} label='Ship to'>
            Hoc vien Ky thuat mat ma
          </Descriptions.Item>
          <Descriptions.Item contentStyle={{ textAlign: 'right', display: 'block' }} span={24} label='Method'>
            International Shipping <Text strong>$20</Text>
          </Descriptions.Item>
        </Descriptions>
      </Col>
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
        <Link to={`/checkouts/shipping/${idProduct}`}>Return to shipping</Link>
        <Button onClick={handlePay} type='primary' size='large'>
          Pay now
        </Button>
      </Col>
    </Row>
  );
}
