import { getLocalStored } from '@src/libs/localStorage';
import { useQueryListCart } from '@src/queries/hooks/cart';
import { onClose } from '@src/redux/actions/drawerReducer';
import { Button, Col, Row, Space, Typography } from 'antd';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import CartItemSmall from '../CartItemSmall';
import styles from './style.module.scss';

const { Text } = Typography;

export default function DrawerCart() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleViewCart = () => {
    dispatch(onClose());
    navigate('/cart');
  };

  const signature = getLocalStored('signature');
  const { data: listCart } = useQueryListCart(signature?.userID);
  const totalPrice = useMemo(() => listCart?.data?.reduce((total, item) => (total += item.price), 0), [listCart]);

  return (
    <Row gutter={[0, 15]} className={styles.wrapper}>
      {listCart?.data?.map((item, index) => (
        <Col span={24} key={index}>
          <CartItemSmall data={item} />
        </Col>
      ))}
      {listCart?.data?.length === 0 && (
        <Text>
          You have no items in your shopping cart!!{'  '}
          <Link to='/collections'>Buy now</Link>
        </Text>
      )}
      <Col span={24} className={styles.total}>
        <Row justify='space-between' align='center'>
          <Col>
            <Text strong>Total</Text>
          </Col>
          <Col>
            <Text strong>${totalPrice}</Text>
          </Col>
        </Row>
      </Col>
      <Col span={24}>
        <Text>Shipping, taxes, and discounts will be calculated at checkout.</Text>
      </Col>
      <Col span={24}>
        <Space style={{ width: '100%' }} size={8} direction='vertical'>
          <Button
            onClick={() => {
              dispatch(onClose());
              navigate('/checkouts/payment');
            }}
            disabled={!(listCart?.data?.length > 0)}
            type='primary'
            block
          >
            PROCEED TO CHECKOUT
          </Button>
          <Button onClick={handleViewCart} type='primary' block>
            VIEW CART
          </Button>
        </Space>
      </Col>
    </Row>
  );
}
