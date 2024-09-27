import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import SlideShowCustom from '@components/widgets/SlideShowCustom';
import OutstandingStoreItem from '@src/components/elements/OutstandingItem';
import ProductItem from '@src/components/elements/ProductItem';
import ShoeItem from '@src/components/elements/ShoeItem';
import SlideItem from '@src/components/elements/SlideItem';
import { listCollection } from '@src/configs/const';
import { useQueryListShoes } from '@src/queries/hooks';
import { generateKey } from '@src/utils/genegate-key';
import GenerateSQRC from '@src/utils/generate-sqrc';
import ValidateSQRC from '@src/utils/validate-sqrc';
import { Button, Col, Row, Space, Typography } from 'antd';
import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './style.module.scss';

const { Title, Text } = Typography;

const listSlide = [
  {
    image: 'https://cdn.shopify.com/s/files/1/1811/9799/files/shoe7.jpg?v=1613156880',
    mobile: 'https://cdn.shopify.com/s/files/1/1811/9799/files/shoe7_768x940.jpg?v=1613156880',
    type: 1,
  },
  {
    image: 'https://cdn.shopify.com/s/files/1/1811/9799/files/2021-10-16.jpg?v=1634378303',
    mobile: '//cdn.shopify.com/s/files/1/1811/9799/files/2021-10-16_768x940.jpg?v=1634378303',
    type: 2,
  },
  {
    image: 'https://cdn.shopify.com/s/files/1/1811/9799/files/shoe9.jpg?v=1613156880',
    mobile: '//cdn.shopify.com/s/files/1/1811/9799/files/shoe9_768x940.jpg?v=1613156880',
    type: 3,
  },
];

const listStoreOutstanding = [
  {
    id: 1,
    title: 'Signs',
    subTitle: 'make this season yours',
    image: 'https://cdn.shopify.com/s/files/1/1811/9799/files/Shoe_3.jpg?v=1613157025',
  },
  {
    id: 2,
    title: 'Cosmos stores',
    subTitle: 'make this season yours',
    image: 'https://cdn.shopify.com/s/files/1/1811/9799/files/dropdown_3_menu_image_3.jpg?v=1613524987',
  },
  {
    id: 3,
    title: 'Sneek peek',
    subTitle: 'sports edition * * discount available',
    image: 'https://cdn.shopify.com/s/files/1/1811/9799/files/Shoe_2.jpg?v=16131570257',
  },
];

export default function Home() {
  const navigate = useNavigate();
  const [qrCodeData, setQrCodeData] = useState('');

  const slideElement = useMemo(() => listSlide.map((e, i) => <SlideItem key={i} data={e} />), []);
  const slideElementSecond = useMemo(
    () => listStoreOutstanding.map((e) => <OutstandingStoreItem key={e?.id} data={e} />),
    []
  );

  const { data: listProduct } = useQueryListShoes();

  const newArrivals = useMemo(() => listProduct?.data?.data?.filter((x) => x.isNewArrival), [listProduct]);
  const slideElementNewArrivals = useMemo(
    () => newArrivals?.map((e) => <ProductItem data={e} key={e?.id} />),
    [newArrivals]
  );
  const bestSeller = useMemo(() => listProduct?.data?.data?.filter((x) => x.isNewArrival), [listProduct]);

  const { secretKey, privateKey, publicKey } = useMemo(() => generateKey(), []);

  useEffect(() => {
    GenerateSQRC({ privateData: 'private', publicData: '123321123321', secretKey, privateKey }).then((res) => {
      setQrCodeData(res);
    });
  }, [privateKey, secretKey]);

  return (
    <Row className={`${styles.wrapper}`}>
      {qrCodeData && (
        <div>
          <h3>Your SQRC:</h3>
          <img src={qrCodeData.qrCodeUrl} alt='SQRC' />
        </div>
      )}

      <ValidateSQRC data={qrCodeData.qrData} publicKey={publicKey} secretKey={secretKey} />

      <Col span={24}>
        <Row gutter={[0, 20]} className='container'>
          <Col span={24}>
            <SlideShowCustom
              slideElement={slideElement}
              isNavigation
              isPagination={false}
              slidesPerView={1}
              spaceBetween={40}
              slideKey='home-first-slide'
              prevStyle={{
                width: 40,
                height: 40,
                left: 20,
              }}
              nextStyle={{ width: 40, height: 40, right: 20 }}
            />
          </Col>
          <Col span={24}>
            <Row gutter={[30, 30]}>
              <Col lg={{ span: 14 }} span={24}>
                <Row gutter={[30, 30]}>
                  {listCollection.map((category, index) => (
                    <Col key={index} span={24} sm={{ span: 12 }}>
                      <ShoeItem data={category} />
                    </Col>
                  ))}
                </Row>
              </Col>
              <Col lg={{ span: 10 }} span={24}>
                <SlideShowCustom
                  className={styles.outstandingSlide}
                  slideElement={slideElementSecond}
                  isNavigation
                  isPagination={false}
                  slidesPerView={1}
                  spaceBetween={40}
                  slideKey='home-second-slide'
                  prevStyle={{
                    width: 40,
                    height: 40,
                    right: 45,
                    top: 20,
                    left: 'unset',
                  }}
                  nextStyle={{ width: 40, height: 40, right: 0, top: 20 }}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
      <Col className={styles.newArrivals} span={24}>
        <Row gutter={[0, 50]} className='container'>
          <Col span={24}>
            <Row className={styles.titleGroup} gutter={[0, 10]}>
              <Col span={24} className={styles.titleWrap}>
                <Title className={styles.title} level={2}>
                  New arrivals
                </Title>
                <Space size={10}>
                  <Button
                    className={`tw-button-navigation button-prev-third-slide ${styles.navigation} ${styles.navigationPrev}`}
                    shape='circle'
                  >
                    <LeftOutlined className={styles.iconNavigation} />
                  </Button>
                  <Button
                    className={`tw-button-navigation button-next-third-slide ${styles.navigation} ${styles.navigationNext}`}
                    shape='circle'
                  >
                    <RightOutlined className={styles.iconNavigation} />
                  </Button>
                </Space>
              </Col>
              <Col span={24}>
                <Text className={styles.subTitle}>Just in now</Text>
              </Col>
            </Row>
          </Col>
          <Col span={24}>
            <SlideShowCustom
              slideElement={slideElementNewArrivals}
              isPagination={false}
              slidesPerView={3}
              spaceBetween={25}
              slideKey='home-third-slide'
              style={{ padding: 10 }}
              breakpoints={{
                2000: {
                  slidesPerView: 4,
                },
                992: {
                  slidesPerView: 3,
                },
                575: {
                  slidesPerView: 2,
                },
                1: {
                  slidesPerView: 1,
                },
              }}
              navigation={{
                nextEl: `.button-next-third-slide`,
                prevEl: `.button-prev-third-slide`,
              }}
            />
          </Col>
        </Row>
      </Col>
      <Col className={styles.bannerWrap} span={24}>
        <img
          src='https://cdn.shopify.com/s/files/1/1811/9799/files/about1.jpg?v=1613156884'
          className={styles.banner}
          alt='banner'
        />
        <Row gutter={[0, 130]} className={styles.content}>
          <Col span={24}>
            <Row gutter={[0, 20]}>
              <Col span={24}>
                <Text className={styles.head}>the season begings</Text>
              </Col>
              <Col span={24}>
                <Title level={3}>
                  promotion <Text className={styles.titleColor}>sale of 50%</Text>
                </Title>
              </Col>
              <Col span={24}>
                <button onClick={() => navigate('/collections/4')} className={styles.btn}>
                  SHOP NOW
                </button>
              </Col>
            </Row>
          </Col>
          <Col span={24}>
            <Row gutter={[0, 20]}>
              <Col span={24}>
                <Title className={styles.ends} level={3}>
                  before offer ends
                </Title>
              </Col>
              <Col span={24}>
                <Text>Expired</Text>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
      <Col className={styles.bestSeller} span={24}>
        <Row gutter={[0, 60]} className={`container  ${styles.content}`}>
          <Col span={24} className={styles.titleGroup}>
            <Row gutter={[0, 10]}>
              <Col span={24}>
                <Title level={2} className={styles.title}>
                  Best seller
                </Title>
              </Col>
              <Col span={24}>
                <Text className={styles.subTitle}>Just in now</Text>
              </Col>
            </Row>
          </Col>
          <Col span={24}>
            <Row gutter={[30, 30]}>
              {bestSeller?.map((bestSellerItem) => (
                <Col key={bestSellerItem.id} span={24} md={{ span: 12 }} xxl={{ span: 6 }}>
                  <ProductItem data={bestSellerItem} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Col>
      <Col className={`${styles.foot}`} span={24}>
        <Row className='container'>
          <Col span={24}>
            <Row gutter={[30, 30]}>
              <Col span={24} sm={{ span: 12 }} lg={{ span: 6 }} className={styles.footItem}>
                <Space align='center' size={30}>
                  <img src={require('@src/assets/images/home/plane.png')} alt='plane icon' className={styles.icon} />
                  <Text className={styles.text}>
                    Free <br /> Delivery
                  </Text>
                </Space>
              </Col>
              <Col span={24} sm={{ span: 12 }} lg={{ span: 6 }} className={styles.footItem}>
                <Space size={30}>
                  <img
                    src={require('@src/assets/images/home/headphone.png')}
                    alt='plane icon'
                    className={styles.icon}
                  />
                  <Text className={styles.text}>
                    Clients <br /> Discounts
                  </Text>
                </Space>
              </Col>
              <Col span={24} sm={{ span: 12 }} lg={{ span: 6 }} className={styles.footItem}>
                <Space size={30}>
                  <img src={require('@src/assets/images/home/exchange.png')} alt='plane icon' className={styles.icon} />
                  <Text className={styles.text}>
                    Return <br /> of goods
                  </Text>
                </Space>
              </Col>
              <Col span={24} sm={{ span: 12 }} lg={{ span: 6 }} className={styles.footItem}>
                <Space size={30}>
                  <img src={require('@src/assets/images/home/sketch.png')} alt='plane icon' className={styles.icon} />
                  <Text className={styles.text}>
                    Many <br /> Brands
                  </Text>
                </Space>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
