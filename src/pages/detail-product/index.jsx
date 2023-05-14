import React, { useState } from 'react';

import styles from './style.module.scss';
import BreadcrumbPage from '@src/components/elements/BreadcrumbPage';
import { Button, Col, InputNumber, Row, Space, Typography } from 'antd';

const data = {
  id: 1,
  image:
    'https://cdn.shopify.com/s/files/1/1811/9799/products/shoe9_8a5e5186-31f5-47cb-a8cf-fecf2349bed7_600x.jpg?v=1494325511',
  name: 'elevator shoes',
  price: 389,
  rate: 4,
};

const { Title, Text } = Typography;

export default function DetailProduct() {
  const [active, setActive] = useState();

  return (
    <Row className={styles.wrapper}>
      <BreadcrumbPage />
      <Col span={24} className={styles.detailProduct}>
        <div className='container'>
          <Row>
            <Col span={24}>
              <Row gutter={[60, 30]}>
                <Col span={12}>
                  <img src={data.image} alt={data.name} width={505} height={505} style={{ objectFit: 'cover' }} />
                </Col>
                <Col span={12}>
                  <Row gutter={[0, 40]}>
                    <Col span={24}>
                      <Title level={1}>{data.name}</Title>
                    </Col>
                    <Col span={24}>
                      <Row gutter={[0, 20]}>
                        <Col span={24}>
                          <Row>
                            <Col span={6} className={styles.labelWrap}>
                              <Text className={styles.label}>Price:</Text>
                            </Col>
                            <Col span={18}>
                              <Text style={{ color: 'var(--color-violet)', fontSize: 16 }} strong>
                                ${data.price}
                              </Text>
                            </Col>
                          </Row>
                        </Col>
                        <Col span={24}>
                          <Row>
                            <Col span={6} className={styles.labelWrap}>
                              <Text className={styles.label}>Size:</Text>
                            </Col>
                            <Col span={18}>
                              <Space size={10}>
                                {[7, 8, 9].map((item) => (
                                  <div
                                    key={item}
                                    className={`${styles.size} ${active === item && styles.active}`}
                                    onClick={() => setActive(item)}
                                  >
                                    {item}
                                  </div>
                                ))}
                              </Space>
                            </Col>
                          </Row>
                        </Col>
                        <Col span={24}>
                          <Row>
                            <Col span={6} className={styles.labelWrap}>
                              <Text className={styles.label}>Color:</Text>
                            </Col>
                            <Col span={18} className={styles.labelWrap}>
                              <Text style={{ fontSize: 12 }}>Violet</Text>
                            </Col>
                          </Row>
                        </Col>
                        <Col span={24}>
                          <Row>
                            <Col span={6} className={styles.labelWrap}>
                              <Text className={styles.label}>Material:</Text>
                            </Col>
                            <Col span={18} className={styles.labelWrap}>
                              <Text style={{ fontSize: 12 }}>ruber</Text>
                            </Col>
                          </Row>
                        </Col>
                        <Col span={24}>
                          <Row>
                            <Col span={6} className={styles.labelWrap}>
                              <Text className={styles.label}>Vendor:</Text>
                            </Col>
                            <Col span={18} className={styles.labelWrap}>
                              <Text style={{ fontSize: 12 }}>Havaianas</Text>
                            </Col>
                          </Row>
                        </Col>
                        <Col span={24}>
                          <Row>
                            <Col span={6} className={styles.labelWrap}>
                              <Text className={styles.label}>Type:</Text>
                            </Col>
                            <Col span={18} className={styles.labelWrap}>
                              <Text style={{ fontSize: 12 }}>shoes</Text>
                            </Col>
                          </Row>
                        </Col>
                        <Col span={24}>
                          <Row>
                            <Col span={6} className={styles.labelWrap}>
                              <Text className={styles.label}>Availability:</Text>
                            </Col>
                            <Col span={18} className={styles.labelWrap}>
                              <Text style={{ fontSize: 12, color: '#4F8A10' }}>In stock!</Text>
                            </Col>
                          </Row>
                        </Col>
                        <Col span={24}>
                          <Row>
                            <Col span={6} className={styles.labelWrap}>
                              <Text className={styles.label}>Quantity:</Text>
                            </Col>
                            <Col span={18} className={styles.labelWrap}>
                              <InputNumber defaultValue={1} min={1} />
                            </Col>
                          </Row>
                        </Col>
                        <Col span={24}>
                          <Space size={16}>
                            <Button type='primary' size='large'>
                              ADD TO CART
                            </Button>
                            <Button type='primary' size='large'>
                              BUY IT NOW
                            </Button>
                          </Space>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
}
