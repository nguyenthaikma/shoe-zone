import { Button, Col, InputNumber, Row, Space, Typography } from 'antd';
import { useEffect, useState } from 'react';

import styles from './style.module.scss';
import { useDispatch } from 'react-redux';
import { addItemAction } from '@src/redux/actions/drawerReducer';

const { Text } = Typography;

const data = {
  id: 1,
  image:
    'https://cdn.shopify.com/s/files/1/1811/9799/products/shoe9_8a5e5186-31f5-47cb-a8cf-fecf2349bed7_600x.jpg?v=1494325511',
  name: 'elevator shoes',
  price: 389,
  rate: 4,
};

export default function CartItem() {
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);
  const [price] = useState(100);

  useEffect(() => {
    dispatch(addItemAction(price));
  }, [quantity, price, dispatch]);

  return (
    <Row gutter={[0, 21]} className={styles.row}>
      <Col span={24}>
        <Row gutter={[20, 14]} className={styles.content}>
          <Col>
            <div className={styles.imgWrap}>
              <img src={data?.image} alt={data?.name} className={styles.img} />
            </div>
          </Col>
          <Col style={{ display: 'flex', alignItems: 'center', marginRight: 'auto' }}>
            <Row gutter={[0, 12]} style={{ height: 'fit-content' }}>
              <Col span={24}>
                <div className={styles.content}>
                  <Space size={0} direction='vertical'>
                    <Text className={styles.name}>{data?.name}</Text>
                    <Text className={styles.property}>8 / green / rubber</Text>
                  </Space>
                </div>
              </Col>
              <Col span={24}>
                <Text className={styles.total} strong>
                  ${price * quantity}
                </Text>
              </Col>
              <Col span={24}>
                <InputNumber
                  style={{ width: 100 }}
                  controls={false}
                  size='small'
                  addonBefore={
                    <Button
                      disabled={quantity === 0}
                      onClick={() => {
                        if (quantity > 0) {
                          setQuantity(quantity - 1);
                        }
                      }}
                      block
                      type='primary'
                      size='small'
                    >
                      -
                    </Button>
                  }
                  addonAfter={
                    <Button onClick={() => setQuantity(quantity + 1)} block type='primary' size='small'>
                      +
                    </Button>
                  }
                  min={0}
                  value={quantity}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
