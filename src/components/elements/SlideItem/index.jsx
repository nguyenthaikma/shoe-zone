import { Col, Row, Typography } from 'antd';

import styles from './style.module.scss';
import { useNavigate } from 'react-router-dom';

const { Title, Text } = Typography;

export default function SlideItem({ data }) {
  const navigate = useNavigate();
  return (
    <Row className={styles.wrapper}>
      <img alt='carousel' className={styles.image} src={data?.image} />
      <img alt='carousel' className={styles.mobile} src={data?.mobile} />
      {data?.type === 1 && (
        <Row gutter={[0, 15]} className={styles.slide_1}>
          <Col span={24}>
            <Title className={styles.title} level={2}>
              ZEN VIVID 15
            </Title>
          </Col>
          <Col span={24}>
            <Text className={styles.subTitle}>The best Sellers from $99.00</Text>
          </Col>
          <Col span={24}>
            <button onClick={() => navigate('/collections/gym')} className={styles.btn}>
              SHOP NOW
            </button>
          </Col>
        </Row>
      )}
      {data?.type === 2 && (
        <Row gutter={[0, 15]} className={styles.slide_2}>
          <Col span={24}>
            <Title className={styles.title} level={2}>
              STARTS FROM
            </Title>
          </Col>
          <Col span={24}>
            <Text className={styles.subTitle}>$ 745</Text>
          </Col>
          <Col span={24}>
            <button onClick={() => navigate('/collections')} className={styles.btn}>
              View collection
            </button>
          </Col>
        </Row>
      )}
      {data?.type === 3 && (
        <Row gutter={[0, 15]} className={styles.slide_3}>
          <Col span={24}>
            <Text className={styles.subTitle}>summer canvas</Text>
          </Col>
          <Col span={24}>
            <Title className={styles.title} level={2}>
              FROM THE SUMMER
            </Title>
          </Col>
          <Col span={24}>
            <Text className={styles.subTitle}>
              Ullamcorper eget nulla facilisi etiam dignissim. Quis eleifend quam adipiscing vitae proin sagittis nisl
              rhoncus mattis. Scelerisque eu ultrices
            </Text>
          </Col>
          <Col span={24}>
            <button onClick={() => navigate('/collections/sport')} className={styles.btn}>
              Shop now
            </button>
          </Col>
        </Row>
      )}
    </Row>
  );
}
