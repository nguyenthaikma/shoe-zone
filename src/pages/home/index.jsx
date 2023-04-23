import SlideShowCustom from '@components/widgets/SlideShowCustom';
import { useMemo } from 'react';

import ShoeItem from '@src/components/elements/ShoeItem';
import SlideItem from '@src/components/elements/SlideItem';
import { Col, Row } from 'antd';
import styles from './style.module.scss';

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

export default function Home() {
  const slideElement = useMemo(() => listSlide.map((e, i) => <SlideItem key={i} data={e} />), []);
  const slideElementSecond = useMemo(
    () => [1, 2, 3, 4].map((e) => <div style={{ background: 'red', width: '100%' }}>{e}</div>),
    []
  );
  return (
    <Row className={`${styles.wrapper}`}>
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
            <Row gutter={[30, 0]}>
              <Col span={12}>
                <Row gutter={[30, 30]}>
                  <Col span={12}>
                    <ShoeItem />
                  </Col>
                  <Col span={12}>
                    <ShoeItem />
                  </Col>
                  <Col span={12}>
                    <ShoeItem />
                  </Col>
                  <Col span={12}>
                    <ShoeItem />
                  </Col>
                </Row>
              </Col>
              <Col span={12}>
                <SlideShowCustom
                  slideElement={slideElementSecond}
                  isNavigation
                  isPagination={false}
                  slidesPerView={1}
                  spaceBetween={40}
                  slideKey='home-second-slide'
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
