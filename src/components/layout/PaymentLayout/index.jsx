import { Badge, Breadcrumb, Col, Row, Space, Typography } from 'antd';

import styles from './style.module.scss';

const { Text } = Typography;

const product = {
  id: 1,
  image:
    'https://cdn.shopify.com/s/files/1/1811/9799/products/shoe9_8a5e5186-31f5-47cb-a8cf-fecf2349bed7_600x.jpg?v=1494325511',
  name: 'elevator shoes',
  price: 389,
  rate: 4,
};

export default function PaymentLayout({ data = product, children }) {
  const _breadcrumbs = [{ title: 'Infomation' }, { title: 'Shipping' }, { title: 'Payment' }];
  return (
    <Row className={styles.wrapper}>
      <Col span={12}>
        <div className='container'>
          <div className='wrapper'>
            <Row className={styles.contentWrap}>
              <Col span={24} style={{ marginBottom: 26 }}>
                <img
                  src='https://cdn.shopify.com/s/files/1/1811/9799/files/shoe-logo-new_x320.png?v=1613157234'
                  alt='shoe-shop'
                  width={131}
                  height={60}
                  objectFit='contain'
                />
                <Breadcrumb style={{ marginTop: 12 }} items={_breadcrumbs} />
              </Col>
              {children}
              <Col span={24} className={styles.foot}>
                <Text className={styles.text}>All rights reserved Shoes</Text>
              </Col>
            </Row>
          </div>
        </div>
      </Col>
      <Col span={12} className={styles.product}>
        <div className='container'>
          <div className='wrapper'>
            <Row gutter={[0, 21]} className={styles.row}>
              <Col span={24}>
                <Row gutter={[20, 14]}>
                  <Col>
                    <Badge color='var(--color-violet)' count={1}>
                      <div className={styles.imgWrap}>
                        <img src={data?.image} alt={data?.name} className={styles.img} />
                      </div>
                    </Badge>
                  </Col>
                  <Col flex={1} style={{ display: 'flex' }}>
                    <div className={styles.content}>
                      <Space size={0} direction='vertical'>
                        <Text className={styles.name}>{data?.name}</Text>
                        <Text className={styles.property}>8 / green / rubber</Text>
                      </Space>
                      <Text strong>$900</Text>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col span={24}>
                <Row gutter={[0, 12]}>
                  <Col className={styles.colValue} span={24}>
                    <Text className={styles.label}>Subtotal</Text>
                    <Text className={styles.value} strong>
                      $900
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
                      $920
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
