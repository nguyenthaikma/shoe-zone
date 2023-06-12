import { Button, Col, InputNumber, Row, Space, Typography } from 'antd';
import { useEffect, useState } from 'react';

import styles from './style.module.scss';
import { useDispatch } from 'react-redux';
import { addItemAction } from '@src/redux/actions/drawerReducer';
import { media } from '@src/assets/images/media';
import { useMutationRemoveCart } from '@src/queries/hooks/cart';

const { Text } = Typography;

export default function CartItemSmall({ data }) {
  const dispatch = useDispatch();

  console.log(data);

  const [quantity, setQuantity] = useState(data?.number);
  useEffect(() => {
    setQuantity(data?.number);
  }, [data]);
  const [price] = useState(100);
  const { mutate: deleteCart } = useMutationRemoveCart();

  const handleDelete = () => {
    deleteCart({ cartID: data?.cartID });
  };

  useEffect(() => {
    dispatch(addItemAction(price));
  }, [quantity, price, dispatch]);

  return (
    <Row gutter={[0, 21]} className={styles.row}>
      <Col span={24}>
        <Row gutter={[20, 14]} className={styles.content}>
          <Col>
            <div className={styles.imgWrap}>
              <img
                src={media.find((item) => item.key === data?.image)?.value}
                alt={data?.name}
                className={styles.img}
              />
            </div>
          </Col>
          <Col flex={1} style={{ display: 'flex' }}>
            <Row gutter={[0, 6]}>
              <Col span={24}>
                <div className={styles.content}>
                  <Space size={0} direction='vertical'>
                    <Text className={styles.name}>{data?.name}</Text>
                    <Text className={styles.property}>Size: {data?.size}</Text>
                  </Space>
                </div>
              </Col>
              <Col span={24}>
                <Text strong>${data?.price}</Text>
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
                        // if (quantity > 0) {
                        //   setQuantity(quantity - 1);
                        // }
                      }}
                      block
                      type='primary'
                      size='small'
                    >
                      -
                    </Button>
                  }
                  addonAfter={
                    <Button block type='primary' size='small'>
                      +
                    </Button>
                  }
                  min={0}
                  value={quantity}
                />
              </Col>
            </Row>
          </Col>
          <Button style={{ color: 'red' }} type='error' onClick={handleDelete}>
            Xoá
          </Button>
        </Row>
      </Col>
    </Row>
  );
}
