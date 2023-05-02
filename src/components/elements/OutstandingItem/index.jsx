import React from 'react';
import { Col, Row, Typography } from 'antd';

import styles from './style.module.scss';

const { Title, Text } = Typography;

export default function OutstandingStoreItem({ data }) {
  return (
    <Row className={styles.wrapper}>
      <img src={data?.image} alt={data?.title} className={styles.thumbnail} />
      <Col span={24} className={styles.content}>
        <Row className={styles.titleGroup}>
          <Col span={24}>
            <Title level={4} className={styles.title}>
              {data?.title}
            </Title>
          </Col>
          <Col span={24}>
            <Text className={styles.subTitle}>{data?.subTitle}</Text>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
