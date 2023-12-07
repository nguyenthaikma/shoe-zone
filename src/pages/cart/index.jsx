import BreadcrumbPage from '@src/components/elements/BreadcrumbPage';
import { Button, Col, Row, Space, Typography } from 'antd';
import { useMemo } from 'react';

import CartItem from '@src/components/elements/CartItem';
import { checkAuth } from '@src/libs/localStorage';
import { useQueryListCart } from '@src/queries/hooks/cart';
import { Link, useNavigate } from 'react-router-dom';
import styles from './style.module.scss';

const { Text } = Typography;

export default function Cart() {
  const navigate = useNavigate();
  const accessToken = checkAuth();

  const { data: listCart } = useQueryListCart(accessToken);
  const totalPrice = useMemo(() => listCart?.data?.reduce((total, item) => (total += item.amount), 0), [listCart]);

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
                  {listCart?.data?.map((item, index) => (
                    <Col key={index} span={24}>
                      <CartItem data={item} />
                    </Col>
                  ))}
                  {listCart?.data?.length === 0 && (
                    <Text>
                      You have no items in your shopping cart!!{'  '}
                      <Link to='/collections'>Buy now</Link>
                    </Text>
                  )}
                </Row>
              </Col>
              <Col style={{ position: 'sticky', top: 130, height: 'fit-content' }} span={24} lg={{ span: 8 }}>
                <Text className={styles.head}>Order Summary</Text>
                <Space direction='vertical' size={12}>
                  <Text strong style={{ color: 'var(--color-violet)' }}>
                    Sub total: ${totalPrice}
                  </Text>
                  <Text fontSize='xs'>Shipping, taxes, and discounts will be calculated at checkout.</Text>
                  <Button
                    disabled={!(listCart?.data?.length > 0)}
                    onClick={() => navigate('/checkouts/payment')}
                    type='primary'
                    block
                  >
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
