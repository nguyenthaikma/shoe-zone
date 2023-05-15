import React, { useState } from 'react';

import styles from './style.module.scss';
import BreadcrumbPage from '@src/components/elements/BreadcrumbPage';
import { Button, Col, InputNumber, Row, Space, Typography } from 'antd';
import ProductItem from '@src/components/elements/ProductItem';

const data = {
  id: 1,
  image:
    'https://cdn.shopify.com/s/files/1/1811/9799/products/shoe9_8a5e5186-31f5-47cb-a8cf-fecf2349bed7_600x.jpg?v=1494325511',
  name: 'elevator shoes',
  price: 389,
  rate: 4,
};

const listNewArrivals = [
  {
    id: 1,
    image:
      'https://cdn.shopify.com/s/files/1/1811/9799/products/shoe9_8a5e5186-31f5-47cb-a8cf-fecf2349bed7_600x.jpg?v=1494325511',
    name: 'elevator shoes',
    price: 389,
    rate: 4,
  },
  {
    id: 2,
    image: 'https://cdn.shopify.com/s/files/1/1811/9799/products/shoe11_600x.jpg?v=1494314260',
    name: 'boat shoes',
    price: 389,
    rate: 4,
  },
  {
    id: 3,
    image:
      'https://cdn.shopify.com/s/files/1/1811/9799/products/shoe12_d236d83f-7f25-4d9e-b156-5131fead58c6_600x.jpg?v=1494317456',
    name: 'adidas kampung',
    price: 389,
    rate: 4,
  },
  {
    id: 4,
    image: 'https://cdn.shopify.com/s/files/1/1811/9799/products/shoe13_600x.jpg?v=1494317190',
    name: 'fashion boot',
    price: 389,
    rate: 4,
  },
];

const { Title, Text } = Typography;

export default function DetailProduct() {
  const [active, setActive] = useState();

  return (
    <Row className={styles.wrapper}>
      <BreadcrumbPage />
      <Col span={24} className={styles.detailProduct}>
        <div className='container'>
          <Row gutter={[0, 50]}>
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
            <Col span={24} className={styles.desc}>
              <Space size={24} direction='vertical'>
                <Title level={2} className={styles.title}>
                  Product description
                </Title>
                <Text className={styles.text}>
                  <p>
                    Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam
                    dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique
                    des commodo pharetras loremos.Donec pretium egestas sapien et mollis
                  </p>
                  <p className={styles.titleText}>Lorem ipsum dolor sit amet</p>
                  <p>
                    Sonsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur.
                  </p>
                  <p className={styles.titleText}>Busey ipsum dolor sit amet</p>
                  <p>
                    Tortor at auctor urna nunc id cursus metus aliquam. Odio tempor orci dapibus ultrices. Tortor
                    condimentum lacinia quis vel eros donec ac odio. Velit euismod in pellentesque massa placerat duis
                    ultricies lacus. Scelerisque purus semper eget duis at tellus at urna condimentum. Eu facilisis sed
                    odio morbi quis commodo odio aenean urpis massa sed elemen.
                  </p>
                  <p className={styles.titleText}>Vestibulum sit amet ipsum</p>
                  <p>
                    Praesent vestibulum congue tellus at fringilla. Curabitur vitae semper sem, eu convallis est. Cras
                    felis nunc commodo eu convallis vitae interdum non nisl. Maecenas ac est sit amet augue pharetra
                    convallis nec danos dui. Cras suscipit quam et turpis eleifend vitae malesuada magna congue. Damus
                    id ullamcorper neque. Sed vitae mi a mi pretium aliquet ac sed elit. Pellentesque nulla eros
                    accumsan quis justo at tincidunt lobortis denimes loremous. Suspendisse vestibulum lectus in lectus
                    volutpat, ut dapibus purus pulvinar. Vestibulum sit amet auctor ipsum.
                  </p>
                </Text>
              </Space>
            </Col>
            <Col span={24} className={styles.recommend}>
              <Title level={3} className={styles.title}>
                Recommended products
              </Title>
              <Row gutter={[30, 30]}>
                {listNewArrivals.map((item) => (
                  <Col span={24} md={{ span: 12 }} xl={{ span: 6 }}>
                    <ProductItem key={item.id} data={item} />
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
}
