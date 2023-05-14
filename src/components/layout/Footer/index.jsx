import React from 'react';

import styles from './style.module.scss';
import { Col, Row, Space, Typography } from 'antd';
import {
  RightOutlined,
  TwitterOutlined,
  FacebookOutlined,
  GooglePlusOutlined,
  YuqueOutlined,
  HomeOutlined,
  PhoneFilled,
  MailFilled,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Text, Title } = Typography;

export default function Footer() {
  return (
    <Row className={styles.wrapper}>
      <Col span={24} className={styles.top}>
        <Row className={`container`}>
          <Col className={styles.logoWrap}>
            <img
              src='https://cdn.shopify.com/s/files/1/1811/9799/files/footer-logo_400x_10a45027-2bea-4763-a52f-4a341e855e9e_x70@2x.png?v=1634535014'
              alt='shoe zone'
              className={styles.logo}
            />
          </Col>
          <Col className={styles.inputWrap}>
            <Space size={8}>
              <input type='text' placeholder='Your email address' className={styles.input} />
              <RightOutlined className={`${styles.icon}`} />
            </Space>
          </Col>
          <Col className={styles.social}>
            <Space size={30} wrap>
              <Link to='/'>
                <TwitterOutlined className={styles.icon} />
              </Link>
              <Link to='/'>
                <FacebookOutlined className={styles.icon} />
              </Link>
              <Link to='/'>
                <GooglePlusOutlined className={styles.icon} />
              </Link>
              <Link to='/'>
                <YuqueOutlined className={styles.icon} />
              </Link>
            </Space>
          </Col>
        </Row>
      </Col>
      <Col span={24} className={styles.middle}>
        <div className='container'>
          <Row gutter={[70, 30]}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 6 }} className={styles.colItem}>
              <Title className={styles.title} level={4}>
                Contact us
              </Title>
              <Row gutter={[0, 15]}>
                <Col span={24}>
                  <Space size={10} align='top'>
                    <HomeOutlined className={styles.icon} />
                    <Text className={styles.text}>
                      Học viện Kỹ thuật Mật mã, 141 Chiến Thắng, Tân Triều, Thanh Trì, Hà Nội
                    </Text>
                  </Space>
                </Col>
                <Col span={24}>
                  <Space size={10} align='top'>
                    <PhoneFilled className={styles.icon} />
                    <Text className={styles.text}>0345508678</Text>
                  </Space>
                </Col>
                <Col span={24}>
                  <Space size={10} align='top'>
                    <MailFilled className={styles.icon} />
                    <Text className={styles.text}>info@gmail.com</Text>
                  </Space>
                </Col>
              </Row>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 6 }} className={styles.colItem}>
              <Title className={styles.title} level={4}>
                Info
              </Title>
              <Row gutter={[0, 15]}>
                <Col span={24}>
                  <Link to='/'>
                    <Space size={10} className={styles.hoverItem}>
                      <RightOutlined className={styles.arrow} />
                      <Text className={styles.text}>Search Terms</Text>
                    </Space>
                  </Link>
                </Col>
                <Col span={24}>
                  <Link to='/'>
                    <Space size={10} className={styles.hoverItem}>
                      <RightOutlined className={styles.arrow} />
                      <Text className={styles.text}>Advanced Search</Text>
                    </Space>
                  </Link>
                </Col>
                <Col span={24}>
                  <Link to='/'>
                    <Space size={10} className={styles.hoverItem}>
                      <RightOutlined className={styles.arrow} />
                      <Text className={styles.text}>Orders and Returns</Text>
                    </Space>
                  </Link>
                </Col>
                <Col span={24}>
                  <Link to='/'>
                    <Space size={10} className={styles.hoverItem}>
                      <RightOutlined className={styles.arrow} />
                      <Text className={styles.text}>Consultant</Text>
                    </Space>
                  </Link>
                </Col>
                <Col span={24}>
                  <Link to='/'>
                    <Space size={10} className={styles.hoverItem}>
                      <RightOutlined className={styles.arrow} />
                      <Text className={styles.text}>Help & FAQs</Text>
                    </Space>
                  </Link>
                </Col>
              </Row>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 6 }} className={styles.colItem}>
              <Title className={styles.title} level={4}>
                Help
              </Title>
              <Row gutter={[0, 15]}>
                <Col span={24}>
                  <Link to='/'>
                    <Space size={10} className={styles.hoverItem}>
                      <RightOutlined className={styles.arrow} />
                      <Text className={styles.text}>About</Text>
                    </Space>
                  </Link>
                </Col>
                <Col span={24}>
                  <Link to='/'>
                    <Space size={10} className={styles.hoverItem}>
                      <RightOutlined className={styles.arrow} />
                      <Text className={styles.text}>Contact</Text>
                    </Space>
                  </Link>
                </Col>
                <Col span={24}>
                  <Link to='/'>
                    <Space size={10} className={styles.hoverItem}>
                      <RightOutlined className={styles.arrow} />
                      <Text className={styles.text}>Privacy Policy</Text>
                    </Space>
                  </Link>
                </Col>
                <Col span={24}>
                  <Link to='/'>
                    <Space size={10} className={styles.hoverItem}>
                      <RightOutlined className={styles.arrow} />
                      <Text className={styles.text}>Best sellers</Text>
                    </Space>
                  </Link>
                </Col>
                <Col span={24}>
                  <Link to='/'>
                    <Space size={10} className={styles.hoverItem}>
                      <RightOutlined className={styles.arrow} />
                      <Text className={styles.text}>Support</Text>
                    </Space>
                  </Link>
                </Col>
              </Row>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 6 }} className={styles.colItem}>
              <Title className={styles.title} level={4}>
                Support
              </Title>
              <Row gutter={[0, 15]}>
                <Col span={24}>
                  <Link to='/'>
                    <Space size={10} className={styles.hoverItem}>
                      <RightOutlined className={styles.arrow} />
                      <Text className={styles.text}>Search Terms</Text>
                    </Space>
                  </Link>
                </Col>
                <Col span={24}>
                  <Link to='/'>
                    <Space size={10} className={styles.hoverItem}>
                      <RightOutlined className={styles.arrow} />
                      <Text className={styles.text}>Advanced Search</Text>
                    </Space>
                  </Link>
                </Col>
                <Col span={24}>
                  <Link to='/'>
                    <Space size={10} className={styles.hoverItem}>
                      <RightOutlined className={styles.arrow} />
                      <Text className={styles.text}>Orders and Returns</Text>
                    </Space>
                  </Link>
                </Col>
                <Col span={24}>
                  <Link to='/'>
                    <Space size={10} className={styles.hoverItem}>
                      <RightOutlined className={styles.arrow} />
                      <Text className={styles.text}>Consultant</Text>
                    </Space>
                  </Link>
                </Col>
                <Col span={24}>
                  <Link to='/'>
                    <Space size={10} className={styles.hoverItem}>
                      <RightOutlined className={styles.arrow} />
                      <Text className={styles.text}>Help & FAQs</Text>
                    </Space>
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Col>
      <Col span={24} className={styles.bottom}>
        <Link to='/' className={styles.text}>
          <Text>Search Terms</Text>
        </Link>
        <Link to='/' className={styles.text}>
          <Text>Advanced Search</Text>
        </Link>
        <Link to='/' className={styles.text}>
          <Text>Orders and Returns</Text>
        </Link>
        <Link to='/' className={styles.text}>
          <Text>Consultant</Text>
        </Link>
        <Link to='/' className={styles.text}>
          <Text>Help& FAQs</Text>
        </Link>
      </Col>
      <Col span={24} className={styles.add}>
        <div className='container'>
          <Text className={styles.text}>© 2023 Shoes Design and Developed by KMA</Text>
        </div>
      </Col>
    </Row>
  );
}
