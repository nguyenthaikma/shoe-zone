import { media } from '@src/assets/images/media';
import { getUrlPaymentVNP } from '@src/configs/vnpay';
import { checkAuth, getStoredAuth } from '@src/libs/localStorage';
import { useMutationPaymentTT, useQueryDetailShoes } from '@src/queries/hooks';
import { regexEmail, regexPhone } from '@src/utils/regex';
import { Badge, Button, Col, Form, Input, QRCode, Row, Space, Typography } from 'antd';
import { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import styles from './style.module.scss';
import { REACT_APP_VNP_URL } from '@src/configs/api';
import { decryptionQRValue, decryptOrder, encryptionQRValue } from '@src/configs/sqrc-handle';

const { Title, Text } = Typography;

export default function Information() {
  const accessToken = checkAuth();
  const [searchParams] = useSearchParams();
  const params = {};
  for (const entry of searchParams.entries()) {
    const [param, value] = entry;
    params[param] = value;
  }
  const profile = getStoredAuth();

  const [url, setUrl] = useState();
  const { data: fetchProduct } = useQueryDetailShoes(params.product);
  const data = useMemo(() => fetchProduct?.data, [fetchProduct]);

  const { mutate: payment, isLoading } = useMutationPaymentTT(accessToken);

  const onFinish = async (values) => {
    payment(
      {
        description: {
          ...values,
        },
        quantity: Number(params.quantity),
        shoesId: Number(params.product),
        size: Number(params.size),
      },
      {
        onSuccess: async (res) => {
          console.log('🚀🚀🚀🚀 ~ onSuccess: ~ res:', res);

          // const url = await (
          //   await getUrlPaymentVNP((params.quantity * data?.price + 20) * 23000, data?.name)
          // ).getPaymentUrl(res.data.id);
          // setUrl(url);
        },
      }
    );
  };

  // const dataaa =
  //   'f64a2f7f3189c91e9daa51ba27104540:5ceed67f70bac3e370311678cc0b676d9d79623e9ebe1ea5a7a7ac266f6f108cb6dc45bd3bfa77093c99e33ee562fc24127387cfb8c8401aae86a7e21da77a91a0b19b4fc24459a3963cf78c1c20a80ccb9979b537c2cd7c6d2370ec1613ccd0b402a47ab74673cba0771847c941d8c45fc7609cc0b0915f7e5e11fbaaeedc097151bd45feca6bc1732daf5353ef2c7f8e695f6577163b77599e4aaaf21d56a0c6464447f134cb2ef826b222aa74b0bd383d44e62d6a462d51842c59fdb4ca47a096ec32d5bbf23be8639bf8dee13638b20c01be5e8160827909b42f1b5ee9980ba5bf0d15b17d93a16e2be543182c1c94b660df19fb2e95f7cea4dad0086caaf457a46b3e1bd942125f852b6e66112b9c8d467b29c601abed2f5b2a44cf126081589496c7e8669be01d4a9018956f021885b82269854463e9da9594f8816c92ccfe35dc2bbcfd682be1aee0217374348f0aa2b8f411abd887eaa26ee0955baa9b23a71e982508eca91d3509ca54dbae4d07071b99c882950ea5b3ecf93fd2691258d5bcf92f81d6114417c9114ba941324bdc2e16509cab49667b4efbd765b0aabfab3c3f9db915042f0a443dbff8cdc334667006ba62d91594d16c81672519ace41e60c284581c16f62f1b2afd2e1020807dc585fd4d6a1992b62172011d458a7d949f30912a7417a955fb22c1ed1b0e2e7de4109395579a4dafdb7cb8c1b77c5c3e263be0dbc62188f77d81aecff7b1757139030ef7f43c3a5142d5bb829c51818fe222e960b4cfb9c3247a2cba1f275546ccf50d6f4e011b68a173184dab746efffe4ef5b9b0a7f0cfa3d8b94092792f3a75b9a9e5bb4b1d47e18df19fb91dcf45df8591ab1fec042dd1e9f03ebf3219341580c5cf301d00245791b83410ab1871c77d13223c01ad950f1f31624c67c3f404353bfee918c01c0e0af392014f6a543b45952ea023b6f0328646a03f3f194aa51a7c2f5392fff12dbd51dd66911d48d836d4d2368de5dc24dca6932b70f5bdb7b45f3028ddd1aa360859d2079980559e6fdc564618027673925e2ca5a19c0ff4730cd2ec72793435267d2de34f07866e1cb0d96002697f1742de6538d86a2bd34d83cff0e7f6b9260155af83f9b45d0f07b14abbd5bebfc2019b2d8a93bf20ba5e5a3087f85ab8c0ed149886b52e7bde08f3bb6fb464fc3d813340be287934fae28618c511f7afb68906c2ef9675061b31cb175b1bdc6e5c02b831e5';

  // useEffect(() => {
  //   decryptOrder(dataaa);
  // }, []);
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
              {url ? (
                <Col span={24}>
                  <Space size={20} direction='vertical' style={{ width: '100%' }}>
                    <Button type='link' onClick={() => setUrl(null)}>
                      Go back
                    </Button>
                    <div className={styles.qrWrap}>
                      <QRCode size={230} value={url} />
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
                        Create QR code
                      </Button>
                    </Col>
                  </Row>
                </Form>
              )}

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
                      $0
                    </Text>
                  </Col>
                  <Col className={styles.colValue} span={24}>
                    <Text className={styles.total} strong>
                      Total
                    </Text>
                    <Text className={styles.totalValue} strong>
                      ${params.quantity * data?.price + 0}
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
