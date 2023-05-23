import BreadcrumbPage from '@src/components/elements/BreadcrumbPage';
import { Button, Col, Row, Space, Typography } from 'antd';
import React from 'react';

import styles from './style.module.scss';
import { useSelector } from 'react-redux';
import CartItem from '@src/components/elements/CartItem';
import { useNavigate } from 'react-router-dom';

const { Text } = Typography;

export default function Cart() {
  const navigate = useNavigate();
  const totalPrice = useSelector((state) => state.drawerReducer.totalPrice);

  return (
    <Row className={styles.wrapper}>
      <BreadcrumbPage title='YOUR SHOPPING CART' className={styles.breadCrumb} />
      <Col span={24}>
        <div style={{ display: 'flex' }} className='container'>
          <div className={styles.cart}>
            <Row gutter={[40, 30]}>
              <Col span={24} lg={{ span: 16 }}>
                <Text className={styles.head}>Products</Text>
                <Row gutter={[0, 30]}>
                  <Col span={24}>
                    <CartItem />
                  </Col>
                  <Col span={24}>
                    <CartItem />
                  </Col>
                  <Col span={24}>
                    <CartItem />
                  </Col>
                  <Col span={24}>
                    <CartItem />
                  </Col>
                  <Col span={24}>
                    <CartItem />
                  </Col>
                </Row>
              </Col>
              <Col style={{ position: 'sticky', top: 130 , height: 'fit-content'}} span={24} lg={{ span: 8 }}>
                <Text className={styles.head}>Order Summary</Text>
                <Space direction='vertical' size={12}>
                  <Text strong style={{ color: 'var(--color-violet)' }}>
                    Sub total: ${totalPrice}
                  </Text>
                  <Text fontSize='xs'>Shipping, taxes, and discounts will be calculated at checkout.</Text>
                  <Button onClick={() => navigate('/checkouts/information')} type='primary' block>
                    PROCEED TO CHECKOUT
                  </Button>
                </Space>
              </Col>
            </Row>
          </div>
        </div>
      </Col>
    </Row>
  );
}
