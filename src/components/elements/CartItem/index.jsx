import { DeleteOutlined } from '@ant-design/icons';
import { Button, Col, InputNumber, Row, Space, Typography } from 'antd';
import { useMemo } from 'react';

import { media } from '@src/assets/images/media';
import { useMutationPlusCart, useMutationRemoveCart } from '@src/queries/hooks/cart';
import styles from './style.module.scss';
import { checkAuth } from '@src/libs/localStorage';

const { Text } = Typography;

export default function CartItem({ data: dataCart }) {
  const shoes = useMemo(() => dataCart?.shoes, [dataCart]);
  const token = checkAuth();

  const { mutate: plusInCart, isLoading: isLoadingPlusCart } = useMutationPlusCart(token, dataCart?.id);
  const handleChangeQuantity = (quantity) => {
    plusInCart(quantity);
  };

  const { mutate: deleteCart } = useMutationRemoveCart(token);
  const handleDelete = () => {
    deleteCart(dataCart?.id);
  };

  return (
    <Row gutter={[0, 21]} className={styles.row}>
      <Col xl={{ span: 24 }} span={24}>
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
          <Col style={{ display: 'flex', alignItems: 'center', marginRight: 'auto' }}>
            <Row gutter={[0, 12]} style={{ height: 'fit-content' }}>
              <Col span={24}>
                <div className={styles.content}>
                  <Space size={0} direction='vertical'>
                    <Text className={styles.name}>{shoes?.name}</Text>
                    <Text className={styles.property}>Size: {dataCart?.size}</Text>
                  </Space>
                </div>
              </Col>
              <Col span={24}>
                <Text className={styles.total} strong>
                  ${shoes?.price}
                </Text>
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
                  value={dataCart?.quantity}
                />
              </Col>
            </Row>
          </Col>
          <Col
            onClick={handleDelete}
            flex={1}
            style={{
              display: 'flex',
              cursor: 'pointer',
              justifyContent: 'flex-end',
              alignItems: 'center',
              marginLeft: 'auto',
            }}
          >
            <DeleteOutlined style={{ color: 'red', fontSize: 20 }} />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
