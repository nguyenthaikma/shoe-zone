import { media } from '@src/assets/images/media';
import { getStoredAuth } from '@src/libs/localStorage';
import { useMutationPaymentTT, useQueryDetailProduct } from '@src/queries/hooks';
import { Badge, Button, Col, Form, Input, Row, Space, Typography } from 'antd';
import moment from 'moment';
import { useMemo } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import styles from './style.module.scss';
import { regexEmail, regexPhone } from '@src/utils/regex';

const { Title, Text } = Typography;

export default function Information() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const params = {};
  for (const entry of searchParams.entries()) {
    const [param, value] = entry;
    params[param] = value;
  }
  const profile = getStoredAuth();

  const { data: fetchProduct } = useQueryDetailProduct(params.product);
  const data = useMemo(() => fetchProduct?.data[0], [fetchProduct]);

  const { mutate: payment } = useMutationPaymentTT();

  const onFinish = (values) => {
    payment(
      {
        ...values,
        userID: profile.userID,
        createdAt: moment().format('YYYY-MM-DD'),
        totalAmount: params.quantity * data?.price + 20,
        productID: params.product,
        size: Number(params.size),
        number: Number(params.quantity),
        price: data?.price,
      },
      {
        onSuccess: () => {
          navigate('/');
        },
      }
    );
  };

  return (
    <Row className={styles.wrapper}>
      <Col span={24} xl={{ span: 14 }}>
        <div className='container'>
          <div className='wrapper'>
            <Row className={styles.contentWrap}>
              <Col span={24} style={{ marginBottom: 26 }}>
                <Link to='/'>
                  <img
                    src='https://cdn.shopify.com/s/files/1/1811/9799/files/shoe-logo-new_x320.png?v=1613157234'
                    alt='shoe-shop'
                    width={131}
                    height={60}
                    objectFit='contain'
                  />
                </Link>
              </Col>
              <Form layout='vertical' onFinish={onFinish}>
                <Row gutter={[0, 32]} className={styles.wrapper}>
                  <Col span={24}>
                    <div className={styles.titleGr}>
                      <Title level={5}>Contact</Title>
                      <Text>
                        Already have an account? <Link to='/login'>Login</Link>
                      </Text>
                    </div>
                    <Form.Item
                      rules={[
                        {
                          required: true,
                          message: 'Email is required!',
                        },
                        {
                          pattern: regexEmail,
                          message: 'Email is invalid!',
                        },
                      ]}
                      name='shipEmail'
                    >
                      <Input placeholder='Email' />
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <div className={styles.titleGr}>
                      <Title level={5}>Information</Title>
                    </div>
                    <Row gutter={[14, 14]}>
                      <Col span={24}>
                        <Form.Item
                          rules={[
                            {
                              required: true,
                              message: 'Name is required!',
                            },
                          ]}
                          name='shipName'
                        >
                          <Input placeholder='Name' />
                        </Form.Item>
                      </Col>
                      <Col span={24}>
                        <Form.Item
                          rules={[
                            {
                              required: true,
                              message: 'Address is required!',
                            },
                          ]}
                          name='shipAddress'
                        >
                          <Input placeholder='Address' />
                        </Form.Item>
                      </Col>
                      <Col span={24}>
                        <Form.Item
                          rules={[
                            {
                              required: true,
                              message: 'Phone is required!',
                            },
                            {
                              pattern: regexPhone,
                              message: 'Phone is invalid!',
                            },
                          ]}
                          name='shipMobile'
                        >
                          <Input placeholder='Phone' />
                        </Form.Item>
                      </Col>
                    </Row>
                  </Col>
                  <Col style={{ textAlign: 'right' }} span={24}>
                    <Button htmlType='submit' type='primary' size='large'>
                      Payment
                    </Button>
                  </Col>
                </Row>
              </Form>
              <Col span={24} className={styles.foot}>
                <Text className={styles.text}>All rights reserved Shoes</Text>
              </Col>
            </Row>
          </div>
        </div>
      </Col>
      <Col span={24} xl={{ span: 10 }} className={styles.product}>
        <div className='container'>
          <div className='wrapper'>
            <Row gutter={[0, 21]} className={styles.row}>
              <Col span={24}>
                <Row gutter={[20, 14]}>
                  <Col>
                    <Badge color='var(--color-violet)' count={params.quantity}>
                      <div className={styles.imgWrap}>
                        <img
                          src={media.find((item) => item.key === data?.image)?.value}
                          alt={data?.name}
                          className={styles.img}
                        />
                      </div>
                    </Badge>
                  </Col>
                  <Col flex={1} style={{ display: 'flex' }}>
                    <div className={styles.content}>
                      <Space size={0} direction='vertical'>
                        <Text className={styles.name}>{data?.name}</Text>
                        <Text className={styles.property}>Size: {params?.size}</Text>
                      </Space>
                      <Text strong>${data?.price}</Text>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col span={24}>
                <Row gutter={[0, 12]}>
                  <Col className={styles.colValue} span={24}>
                    <Text className={styles.label}>Subtotal</Text>
                    <Text className={styles.value} strong>
                      ${params.quantity * data?.price}
                    </Text>
                  </Col>
                  <Col className={styles.colValue} span={24}>
                    <Text className={styles.label}>Shipping</Text>
                    <Text className={styles.value} strong>
                      $20
                    </Text>
                  </Col>
                  <Col className={styles.colValue} span={24}>
                    <Text className={styles.total} strong>
                      Total
                    </Text>
                    <Text className={styles.totalValue} strong>
                      ${params.quantity * data?.price + 20}
                    </Text>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </Col>
    </Row>
  );
}
