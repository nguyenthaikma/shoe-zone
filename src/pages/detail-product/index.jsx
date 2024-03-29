import { useMemo, useState } from 'react';

import { media } from '@src/assets/images/media';
import BreadcrumbPage from '@src/components/elements/BreadcrumbPage';
import { checkAuth } from '@src/libs/localStorage';
import { useQueryDetailShoes } from '@src/queries/hooks';
import { useMutationAddCart } from '@src/queries/hooks/cart';
import { Button, Col, InputNumber, Row, Space, Typography, notification } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './style.module.scss';

const { Title, Text } = Typography;

export default function DetailProduct() {
  const navigate = useNavigate();
  const accessToken = checkAuth();
  const [active, setActive] = useState();
  const { idProduct } = useParams();

  const [available, setAvailable] = useState(1);
  const [quantity, setQuantity] = useState(1);

  const { data: fetchProduct } = useQueryDetailShoes(idProduct);
  const detailProduct = useMemo(() => fetchProduct?.data, [fetchProduct]);

  const { mutate: addCart } = useMutationAddCart(accessToken);
  const handleAdd = () => {
    if (!accessToken) {
      notification.error({ message: 'Please login to continue!' });
      return navigate('/login');
    }

    if (active && quantity) {
      addCart(
        {
          quantity,
          shoesId: detailProduct?.id,
          size: active,
        },
        { onSuccess: () => navigate('/cart') }
      );
    } else {
      notification.error({ message: 'Please choose size and quantity!' });
    }
  };

  const handleBuy = () => {
    if (!accessToken) {
      notification.error({ message: 'Please login to continue!' });
      return navigate('/login');
    }

    if (active && quantity) {
      navigate(`/checkouts/information?product=${detailProduct?.id}&size=${active}&quantity=${quantity}`);
    } else {
      notification.error({ message: 'Please choose size and quantity!' });
    }
  };

  return (
    <Row className={styles.wrapper}>
      <BreadcrumbPage />
      <Col span={24} className={styles.detailProduct}>
        <div className='container'>
          <Row gutter={[0, 50]}>
            <Col span={24}>
              <Row gutter={[60, 30]}>
                <Col span={12}>
                  <img
                    src={media.find((item) => item.key === detailProduct?.image)?.value}
                    alt={detailProduct?.name}
                    width={505}
                    height={505}
                    style={{ objectFit: 'cover' }}
                  />
                </Col>
                <Col span={12}>
                  <Row gutter={[0, 40]}>
                    <Col span={24}>
                      <Title level={1}>{detailProduct?.name}</Title>
                    </Col>
                    <Col span={24}>
                      <Row gutter={[0, 20]}>
                        <Col span={24}>
                          <Row>
                            <Col span={6} className={styles.labelWrap}>
                              <Text className={styles.label}>Price:</Text>
                            </Col>
                            <Col span={18}>
                              <Text style={{ color: 'var(--color-violet)', fontSize: 16 }} strong>
                                ${detailProduct?.price}
                              </Text>
                            </Col>
                          </Row>
                        </Col>
                        <Col span={24}>
                          <Row>
                            <Col span={6} className={styles.labelWrap}>
                              <Text className={styles.label}>Size:</Text>
                            </Col>
                            <Col span={18}>
                              <Space size={10}>
                                {detailProduct?.refSizes?.map((item, index) => (
                                  <div
                                    key={index}
                                    className={`${styles.size} ${active === item.size && styles.active}`}
                                    onClick={() => {
                                      setAvailable(item.quantity);
                                      setActive(item.size);
                                    }}
                                  >
                                    {item.size}
                                  </div>
                                ))}
                              </Space>
                            </Col>
                          </Row>
                        </Col>
                        <Col span={24}>
                          <Row>
                            <Col span={6} className={styles.labelWrap}>
                              <Text className={styles.label}>Material:</Text>
                            </Col>
                            <Col span={18} className={styles.labelWrap}>
                              <Text style={{ fontSize: 12 }}>{detailProduct?.material || '__'}</Text>
                            </Col>
                          </Row>
                        </Col>
                        <Col span={24}>
                          <Row>
                            <Col span={6} className={styles.labelWrap}>
                              <Text className={styles.label}>Vendor:</Text>
                            </Col>
                            <Col span={18} className={styles.labelWrap}>
                              <Text style={{ fontSize: 12 }}>{detailProduct?.vendor || '__'}</Text>
                            </Col>
                          </Row>
                        </Col>
                        <Col span={24}>
                          <Row>
                            <Col span={6} className={styles.labelWrap}>
                              <Text className={styles.label}>Type:</Text>
                            </Col>
                            <Col span={18} className={styles.labelWrap}>
                              <Text style={{ fontSize: 12 }}>{detailProduct?.category?.name}</Text>
                            </Col>
                          </Row>
                        </Col>
                        <Col span={24}>
                          <Row>
                            <Col span={6} className={styles.labelWrap}>
                              <Text className={styles.label}>Availability:</Text>
                            </Col>
                            <Col span={18} className={styles.labelWrap}>
                              <Text style={{ fontSize: 12, color: available ? '#4F8A10' : 'red' }}>
                                {available ? `${available} (In stock)` : 'Out stock!'}
                              </Text>
                            </Col>
                          </Row>
                        </Col>
                        <Col span={24}>
                          <Row>
                            <Col span={6} className={styles.labelWrap}>
                              <Text className={styles.label}>Quantity:</Text>
                            </Col>
                            <Col span={18} className={styles.labelWrap}>
                              <InputNumber
                                onChange={(value) => setQuantity(value)}
                                defaultValue={1}
                                min={1}
                                max={available}
                              />
                            </Col>
                          </Row>
                        </Col>
                        <Col span={24}>
                          <Space size={16}>
                            <Button disabled={!available} onClick={handleAdd} type='primary' size='large'>
                              ADD TO CART
                            </Button>
                            <Button disabled={!available} onClick={handleBuy} type='primary' size='large'>
                              BUY IT NOW
                            </Button>
                          </Space>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col span={24} className={styles.desc}>
              <Space size={24} direction='vertical'>
                <Title level={2} className={styles.title}>
                  Product description
                </Title>
                <Text className={styles.text}>
                  <p>
                    Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam
                    dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique
                    des commodo pharetras loremos.Donec pretium egestas sapien et mollis
                  </p>
                  <p className={styles.titleText}>Lorem ipsum dolor sit amet</p>
                  <p>
                    Sonsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur.
                  </p>
                  <p className={styles.titleText}>Busey ipsum dolor sit amet</p>
                  <p>
                    Tortor at auctor urna nunc id cursus metus aliquam. Odio tempor orci dapibus ultrices. Tortor
                    condimentum lacinia quis vel eros donec ac odio. Velit euismod in pellentesque massa placerat duis
                    ultricies lacus. Scelerisque purus semper eget duis at tellus at urna condimentum. Eu facilisis sed
                    odio morbi quis commodo odio aenean urpis massa sed elemen.
                  </p>
                  <p className={styles.titleText}>Vestibulum sit amet ipsum</p>
                  <p>
                    Praesent vestibulum congue tellus at fringilla. Curabitur vitae semper sem, eu convallis est. Cras
                    felis nunc commodo eu convallis vitae interdum non nisl. Maecenas ac est sit amet augue pharetra
                    convallis nec danos dui. Cras suscipit quam et turpis eleifend vitae malesuada magna congue. Damus
                    id ullamcorper neque. Sed vitae mi a mi pretium aliquet ac sed elit. Pellentesque nulla eros
                    accumsan quis justo at tincidunt lobortis denimes loremous. Suspendisse vestibulum lectus in lectus
                    volutpat, ut dapibus purus pulvinar. Vestibulum sit amet auctor ipsum.
                  </p>
                </Text>
              </Space>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
}
