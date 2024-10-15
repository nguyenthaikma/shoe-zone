import { media } from '@src/assets/images/media';
import { checkAuth, getStoredAuth } from '@src/libs/localStorage';
import { useMutationPaymentTT, useQueryDetailShoes } from '@src/queries/hooks';
import { GenerateSQRCV2 } from '@src/utils/generate-sqrc';
import { regexEmail, regexPhone } from '@src/utils/regex';
import { hashData, signData } from '@src/utils/sqrc';
import { Badge, Button, Col, Form, Input, Row, Space, Typography } from 'antd';
import { useMemo, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import Credit from '../credit';
import styles from './style.module.scss';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';

export const PI_data = {
  cardNumber: '42424242424242',
  nameOnCard: 'Nguyen Hong Thai',
  expried: '08/2030',
  securityCode: 'creditsecurity',
};

const { Title, Text } = Typography;

export default function Information() {
  const navigate = useNavigate();
  const accessToken = checkAuth();
  const isSuccess = useSelector((state) => state.scannerReducer.isSuccess);
  const PI_merchant = useSelector((state) => state.scannerReducer.PI_merchant);
  const [searchParams] = useSearchParams();
  const params = {};
  for (const entry of searchParams.entries()) {
    const [param, value] = entry;
    params[param] = value;
  }
  const profile = getStoredAuth();

  const [url, setUrl] = useState();
  const [paymentData, setPaymentData] = useState();
  const [order, setOrder] = useState();
  const { data: fetchProduct } = useQueryDetailShoes(params.product);
  const data = useMemo(() => fetchProduct?.data, [fetchProduct]);

  const { mutate: payment, isLoading } = useMutationPaymentTT(accessToken);

  const onFinish = async (values) => {
    const OI_data = {
      description: {
        ...values,
      },
      quantity: Number(params.quantity),
      shoesId: Number(params.product),
      size: Number(params.size),
    };

    const PIMD = hashData(PI_data);
    const H = {
      PIMD,
      OI_data,
    };

    const signature = signData(H);

    const requestData = {
      S: signature,
      PIMD,
      OI: OI_data,
    };

    payment(requestData, {
      onSuccess: async (_res) => {
        const res = _res.data;
        setOrder(res.OI);
        const publicData = {
          payment: res.PI_Merchant,
          order: res.OI,
        };
        const privateData = res.PIMD;

        setPaymentData(values);
        GenerateSQRCV2({
          privateData: privateData,
          publicData: JSON.stringify(publicData),
          signature: res.signature,
        }).then((res) => {
          setUrl(res.qrCodeUrl);
        });
      },
    });
  };

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
    <Row className={styles.wrapper}>
      <Col span={24} xl={{ span: 14 }}>
        <div className='container'>
          <div className='wrapper'>
            <Row className={styles.contentWrap}>
              {!isSuccess ? (
                <Row gutter={[0, 38]}>
                  <Col span={24}>
                    <Credit data={{ email: 'nguyenthai9cc@gmail.com', address: 'Hoc vien Ky thuat mat ma' }} />
                  </Col>
                  <Col span={24}>
                    <Row gutter={[0, 14]}>
                      <Col span={24}>
                        <Space direction='vertical' size={5}>
                          <Title level={5}>Merchant</Title>
                        </Space>
                      </Col>
                      <Col span={24}>
                        <Form layout='vertical'>
                          <Row gutter={[14, 14]}>
                            <Col span={24}>
                              <Form.Item label='Card number'>
                                <Input disabled value={PI_merchant.cardNumber} />
                              </Form.Item>
                            </Col>
                            <Col span={24}>
                              <Form.Item label='Name'>
                                <Input disabled value={PI_merchant.nameOnCard} />
                              </Form.Item>
                            </Col>
                            <Col span={24}>
                              <Form.Item initialValue={order?.amount + 20} label='Amount'>
                                <Input />
                              </Form.Item>
                            </Col>
                          </Row>
                        </Form>
                      </Col>
                    </Row>
                  </Col>
                  <Col
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                    span={24}
                  >
                    <Button block onClick={handlePay} type='primary' size='large'>
                      Pay now
                    </Button>
                    <Link style={{ display: 'block', marginTop: 24 }} to={`/`}>
                      Back home
                    </Link>
                  </Col>
                </Row>
              ) : (
                <>
                  {url ? (
                    <Col span={24}>
                      <Space size={20} direction='vertical' style={{ width: '100%' }}>
                        <Button type='link' onClick={() => setUrl(null)}>
                          Go back
                        </Button>
                        <div className={styles.qrWrap}>
                          <img style={{ width: 400, height: 400 }} src={url} alt='SQRC' />
                        </div>
                      </Space>
                    </Col>
                  ) : (
                    <Form layout='vertical' onFinish={onFinish}>
                      <Row gutter={[0, 32]} className={styles.wrapper}>
                        <Col span={24}>
                          <Form.Item
                            initialValue={profile?.email}
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
                            name='email'
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
                                initialValue={profile?.username}
                                rules={[
                                  {
                                    required: true,
                                    message: 'Name is required!',
                                  },
                                ]}
                                name='name'
                              >
                                <Input placeholder='Name' />
                              </Form.Item>
                            </Col>
                            <Col span={24}>
                              <Form.Item
                                initialValue={profile?.address}
                                rules={[
                                  {
                                    required: true,
                                    message: 'Address is required!',
                                  },
                                ]}
                                name='address'
                              >
                                <Input placeholder='Address' />
                              </Form.Item>
                            </Col>
                            <Col span={24}>
                              <Form.Item
                                initialValue={profile?.mobile}
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
                                name='phone'
                              >
                                <Input placeholder='Phone' />
                              </Form.Item>
                            </Col>
                          </Row>
                        </Col>

                        <Col style={{ textAlign: 'right' }} span={24}>
                          <Button loading={isLoading} htmlType='submit' type='primary' size='large'>
                            Payment By QR
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  )}
                </>
              )}

              <Col span={24} className={styles.foot}>
                <Text className={styles.text}>All rights reserved Shoes</Text>
              </Col>
            </Row>
          </div>
        </div>
      </Col>
      <Col span={24} xl={{ span: 10 }} className={styles.product}>
        <div style={{ position: 'sticky', top: 125 }} className='container'>
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
