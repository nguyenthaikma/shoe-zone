import { Button, Col, Row, Space, Typography } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CartItemSmall from '../CartItemSmall';
import styles from './style.module.scss';
import { onClose } from '@src/redux/actions/drawerReducer';

const { Text } = Typography;

export default function DrawerCart() {
  const navigate = useNavigate();

  const totalPrice = useSelector((state) => state.drawerReducer.totalPrice);
  const dispatch = useDispatch();

  const handleViewCart = () => {
    dispatch(onClose());
    navigate('/cart');
  };

  return (
    <Row gutter={[0, 15]} className={styles.wrapper}>
      <Col span={24}>
        <CartItemSmall />
      </Col>
      <Col span={24}>
        <CartItemSmall />
      </Col>
      <Col span={24}>
        <CartItemSmall />
      </Col>
      <Col span={24}>
        <CartItemSmall />
      </Col>
      <Col span={24}>
        <CartItemSmall />
      </Col>
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
          <Button type='primary' block>
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
