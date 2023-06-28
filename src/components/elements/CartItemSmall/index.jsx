import { Button, Col, InputNumber, Row, Space, Typography } from 'antd';

import { media } from '@src/assets/images/media';
import { useMutationPlusCart, useMutationRemoveCart } from '@src/queries/hooks/cart';
import styles from './style.module.scss';

const { Text } = Typography;

export default function CartItemSmall({ data }) {
  const { mutate: plusInCart } = useMutationPlusCart();
  const handlePlusCart = () => {
    plusInCart({ cartID: data?.cartID });
  };

  const { mutate: deleteCart } = useMutationRemoveCart();

  const handleDelete = () => {
    deleteCart({ cartID: data?.cartID });
  };

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
                    <Button onClick={handleDelete} block type='primary' size='small'>
                      -
                    </Button>
                  }
                  addonAfter={
                    <Button onClick={handlePlusCart} block type='primary' size='small'>
                      +
                    </Button>
                  }
                  min={0}
                  value={data?.number}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
