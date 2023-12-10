import { Button, Col, InputNumber, Row, Space, Typography } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

import { media } from '@src/assets/images/media';
import { useMutationPlusCart, useMutationRemoveCart } from '@src/queries/hooks/cart';
import styles from './style.module.scss';
import { useMemo } from 'react';
import { checkAuth } from '@src/libs/localStorage';

const { Text } = Typography;

export default function CartItemSmall({ data }) {
  const token = checkAuth();
  const shoes = useMemo(() => data?.shoes, [data]);

  const { mutate: plusInCart, isLoading: isLoadingPlusCart } = useMutationPlusCart(token, data?.id);
  const handleChangeQuantity = (quantity) => {
    plusInCart(quantity);
  };

  const { mutate: deleteCart } = useMutationRemoveCart(token);
  const handleDelete = () => {
    deleteCart(data?.id);
  };

  return (
    <Row gutter={[0, 21]} className={styles.row}>
      <Col xl={{ span: 20 }} span={24}>
        <Row gutter={[20, 14]} className={styles.content}>
          <Col>
            <div className={styles.imgWrap}>
              <img
                src={media.find((item) => item.key === shoes?.image)?.value}
                alt={shoes?.name}
                className={styles.img}
              />
            </div>
          </Col>
          <Col flex={1} style={{ display: 'flex' }}>
            <Row gutter={[0, 6]}>
              <Col span={24}>
                <div className={styles.content}>
                  <Space size={0} direction='vertical'>
                    <Text className={styles.name}>{shoes?.name}</Text>
                    <Text className={styles.property}>Size: {data?.size}</Text>
                  </Space>
                </div>
              </Col>
              <Col span={24}>
                <Text strong>${shoes?.price}</Text>
              </Col>
              <Col span={24}>
                <InputNumber
                  style={{ width: 100 }}
                  controls={false}
                  size='small'
                  addonBefore={
                    <Button
                      disabled={isLoadingPlusCart}
                      onClick={() => handleChangeQuantity(-1)}
                      block
                      type='primary'
                      size='small'
                    >
                      -
                    </Button>
                  }
                  addonAfter={
                    <Button
                      disabled={isLoadingPlusCart}
                      onClick={() => handleChangeQuantity(+1)}
                      block
                      type='primary'
                      size='small'
                    >
                      +
                    </Button>
                  }
                  min={0}
                  value={data?.quantity}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
      <Col
        style={{ justifyContent: 'flex-end', display: 'flex', alignItems: 'flex-start', cursor: 'pointer' }}
        xl={{ span: 4 }}
        span={24}
        onClick={handleDelete}
      >
        <DeleteOutlined style={{ color: 'red', fontSize: 16 }} />
      </Col>
    </Row>
  );
}
