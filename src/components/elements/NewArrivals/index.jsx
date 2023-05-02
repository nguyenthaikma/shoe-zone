import { Col, Row, Typography } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import styles from './style.module.scss';

const { Title, Text } = Typography;

export default function NewArrivals({ data }) {
  return (
    <Row className={styles.wrapper}>
      <Col className={styles.thumbnailWrap} span={24}>
        <img src={data?.image} alt={data?.name} className={styles.thumbnail} />
      </Col>
      <Col span={24} className={styles.content}>
        <Row gutter={[0, 6]}>
          <Col span={24}>
            <Title className={styles.title} level={5}>
              {data?.name}
            </Title>
          </Col>
          <Col span={24}>
            <Text className={styles.price}>${data?.price}</Text>
          </Col>
          <Col span={24}>
            <Row justify='space-between' align='center'>
              <Col className={styles.rate}>
                <Row>
                  {Array.from({ length: 5 }, (_, index) => index + 1).map((_) => {
                    if (_ <= data?.rate) {
                      return (
                        <Col key={_}>
                          <svg
                            width='13'
                            height='13'
                            viewBox='0 0 39 38'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M20.2989 0.799735L25.4441 11.6847L36.949 13.4332C37.4674 13.5113 37.8983 13.8902 38.0603 14.4104C38.2222 14.9306 38.087 15.5017 37.7117 15.8832L29.385 24.3493L31.3504 36.3159C31.4389 36.8551 31.2266 37.3999 30.8028 37.7215C30.379 38.043 29.8172 38.0856 29.3535 37.8311L19.0647 32.19L8.77413 37.8363C8.31004 38.0896 7.74861 38.0463 7.32515 37.7246C6.9017 37.4029 6.6894 36.8584 6.77724 36.3193L8.74269 24.3597L0.415967 15.8936C0.0406219 15.5121 -0.0945389 14.941 0.0674006 14.4208C0.22934 13.9006 0.660243 13.5217 1.17866 13.4436L12.6835 11.6864L17.8288 0.801463C18.061 0.31096 18.5394 0.000366807 19.0633 3.24665e-07C19.5872 -0.000366158 20.0661 0.309557 20.2989 0.799735Z'
                              fill='#1a1a1a'
                            />
                          </svg>
                        </Col>
                      );
                    }
                    return (
                      <Col key={_}>
                        <svg width='13' height='13' viewBox='0 0 39 38' fill='none' xmlns='http://www.w3.org/2000/svg'>
                          <path
                            d='M21.1709 0.799735L26.3162 11.6847L37.8211 13.4332C38.3395 13.5113 38.7704 13.8902 38.9323 14.4104C39.0943 14.9306 38.9591 15.5017 38.5838 15.8832L30.257 24.3493L32.2225 36.3159C32.3109 36.8551 32.0986 37.3999 31.6749 37.7215C31.2511 38.043 30.6893 38.0856 30.2256 37.8311L19.9367 32.19L9.6462 37.8363C9.18211 38.0896 8.62068 38.0463 8.19722 37.7246C7.77377 37.403 7.56147 36.8584 7.6493 36.3193L9.61476 24.3597L1.28804 15.8936C0.912692 15.5121 0.777531 14.941 0.939471 14.4208C1.10141 13.9006 1.53231 13.5217 2.05073 13.4436L13.5556 11.6864L18.7009 0.801463C18.933 0.31096 19.4115 0.000366807 19.9354 3.24665e-07C20.4593 -0.000366158 20.9381 0.309557 21.1709 0.799735Z'
                            fill='#CCD9E9'
                          />
                        </svg>
                      </Col>
                    );
                  })}
                </Row>
              </Col>
              <Col>
                <ShoppingCartOutlined className={styles.cart} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
