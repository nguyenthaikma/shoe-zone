import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Button, Col, Empty, Row } from 'antd';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './style.module.scss';

function SlideShowCustom({
  isPagination = false,
  isNavigation = false,
  isPaginationAbsolute = false,
  slideElement,
  slideKey,
  customPadding,
  nextStyle = {},
  prevStyle = {},
  ...props
}) {
  return (
    <Row gutter={[0, 30]} className={styles.wrapper}>
      {slideElement && slideElement?.length > 0 ? (
        <>
          <Col span={24} className={styles.swiper}>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={0}
              slidesPerView={1}
              className={customPadding ? styles.slide : ''}
              navigation={
                isNavigation
                  ? {
                      nextEl: `.button-next-${slideKey}`,
                      prevEl: `.button-prev-${slideKey}`,
                    }
                  : false
              }
              pagination={isPagination ? { clickable: true, el: `.pagination-${slideKey}` } : false}
              {...props}
            >
              {slideElement?.map((e, index) => (
                <SwiperSlide key={index}>{e}</SwiperSlide>
              ))}
            </Swiper>
            {isNavigation && (
              <>
                <Button
                  style={prevStyle}
                  className={`tw-button-navigation ${styles.navigation} ${styles.navigationPrev} button-prev-${slideKey}`}
                  shape='circle'
                >
                  <LeftOutlined className={styles.iconNavigation} />
                </Button>
                <Button
                  style={nextStyle}
                  className={`tw-button-navigation ${styles.navigation} ${styles.navigationNext} button-next-${slideKey}`}
                  shape='circle'
                >
                  <RightOutlined className={styles.iconNavigation} />
                </Button>
              </>
            )}
          </Col>
          {isPagination && (
            // eslint-disable-next-line react/self-closing-comp
            <Col
              span={24}
              className={`tw-pagination ${styles.pagination} ${
                isPaginationAbsolute ? styles.paginationAbsolute : ''
              } pagination-${slideKey}`}
            ></Col>
          )}
        </>
      ) : (
        <Col span={24}>
          <Empty description='Không có dữ liệu' />
        </Col>
      )}
    </Row>
  );
}

export default SlideShowCustom;
