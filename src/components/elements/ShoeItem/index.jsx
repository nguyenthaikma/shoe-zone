import { Col, Row, Typography } from 'antd';
import React from 'react';
import styles from './style.module.scss';
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;

export default function ShoeItem({ data }) {
  const navigate = useNavigate();
  return (
    <Row onClick={() => navigate(`/collections/${data.id}`)} className={styles.wrapper}>
      <Col span={24}>
        <img src={data?.image} alt={data?.title} className={styles.thumbnail} />
        <Title className={styles.title} level={4}>
          {data?.title}
        </Title>
      </Col>
    </Row>
  );
}
