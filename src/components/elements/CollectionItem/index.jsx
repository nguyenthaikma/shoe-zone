import React from 'react';

import styles from './style.module.scss';
import { Col, Row, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Title, Text } = Typography;

export default function CollectionItem({ data }) {
  const navigate = useNavigate();

  return (
    <Row onClick={() => navigate(`/collections/${data?.id}`)} className={styles.wrapper} gutter={[0, 30]}>
      <Col span={24}>
        <img src={data?.image} alt={data?.title} className={styles.thumbnail} />
      </Col>
      <Col span={24}>
        <Row gutter={[0, 15]}>
          <Col span={24}>
            <Title className={styles.title} level={5}>
              {data?.title}
            </Title>
          </Col>
          <Col span={24}>
            <Text className={styles.total} level={5}>
              {data?.total}
            </Text>
          </Col>
          <Col span={24}>
            <button onClick={() => navigate(`/collections/${data?.id}`)}  className={styles.btn}>
              shop now
            </button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
