import { Badge, Col, Row, Space, Typography } from 'antd';
import React, { useMemo } from 'react';
import styles from './style.module.scss';
import { media } from '@src/assets/images/media';

const { Text } = Typography;

export default function Item({ data }) {
  const shoes = useMemo(() => data?.shoes, [data]);
  return (
    <Col span={24}>
      <Row gutter={[20, 14]}>
        <Col>
          <Badge color='var(--color-violet)' count={data.number}>
            <div className={styles.imgWrap}>
              <img
                src={media.find((item) => item.key === shoes?.image)?.value}
                alt={shoes?.name}
                className={styles.img}
              />
            </div>
          </Badge>
        </Col>
        <Col flex={1} style={{ display: 'flex' }}>
          <div className={styles.content}>
            <Space size={0} direction='vertical'>
              <Text className={styles.name}>{shoes?.name}</Text>
              <Text className={styles.property}>Size: {data?.size}</Text>
            </Space>
            <Text strong>${shoes?.price}</Text>
          </div>
        </Col>
      </Row>
    </Col>
  );
}
