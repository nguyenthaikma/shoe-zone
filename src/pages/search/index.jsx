import { Button, Col, Form, InputNumber, Row, Select, Space, Spin, Typography } from 'antd';

import BreadcrumbPage from '@src/components/elements/BreadcrumbPage';
import ProductItem from '@src/components/elements/ProductItem';
import { useQueryListProduct } from '@src/queries/hooks';
import Search from 'antd/es/input/Search';
import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styles from './style.module.scss';

const { Text } = Typography;

export default function SearchProduct() {
  const _breadcrumbs = [{ title: 'Home', href: '/' }];

  const [searchParams] = useSearchParams();
  const query = {};
  for (const entry of searchParams.entries()) {
    const [param, value] = entry;
    query[param] = value;
  }

  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [size, setSize] = useState();

  const baseParams = {};
  const [params, setParams] = useState();
  const { data: listProduct, isLoading } = useQueryListProduct({ ...params, id: 'list' });

  const navigate = useNavigate();
  return (
    <Row className={styles.wrapper}>
      <BreadcrumbPage title='SEARCH' className={styles.breadCrumb} items={_breadcrumbs} />
      <Col span={24} className={styles.listProduct}>
        <div className='container'>
          <Row gutter={[30, 30]}>
            <Col md={{ span: 18 }} span={14}>
              <Row gutter={[0, 30]}>
                <Col span={24} className={styles.sort}>
                  <Search
                    allowClear
                    onSearch={(value) => setParams({ ...params, nameProduct: value })}
                    placeholder='Search product'
                    style={{ maxWidth: 500 }}
                  />
                  <Space align='center' size={4}>
                    <Text>Sort by</Text>
                    <Select
                      value={params?.sort_by}
                      onChange={(value) => setParams({ ...params, sort_by: value })}
                      style={{ minWidth: 200 }}
                      defaultValue={null}
                    >
                      <Select.Option value={null}>Feature</Select.Option>
                      <Select.Option value='title-ascending'>Alphabetically, A-Z</Select.Option>
                      <Select.Option value='title-descending'>Alphabetically, Z-A</Select.Option>
                      <Select.Option value='price-ascending'>Price, low to high</Select.Option>
                      <Select.Option value='price-descending'>Price, high to low</Select.Option>
                      <Select.Option value='created-ascending'>Date, old to new</Select.Option>
                      <Select.Option value='created-descending'>Date, new to old</Select.Option>
                    </Select>
                  </Space>
                </Col>

                <Col span={24}>
                  {isLoading ? (
                    <Col style={{ display: 'flex' }}>
                      <Spin style={{ margin: 'auto' }} />
                    </Col>
                  ) : (
                    <Row gutter={[30, 30]}>
                      {listProduct?.data?.map((item) => (
                        <Col xl={{ span: 8 }} md={{ span: 12 }} span={24}>
                          <ProductItem data={item} key={item.id} />
                        </Col>
                      ))}
                    </Row>
                  )}
                </Col>
              </Row>
            </Col>
            <Col md={{ span: 6 }} span={10} className={styles.filter}>
              <Row gutter={[0, 40]}>
                <Col span={24}>
                  <Row gutter={[0, 30]}>
                    <Col span={24}>
                      <Text className={styles.title}>Sizes</Text>
                    </Col>
                    <Col span={24}>
                      <Select
                        value={size}
                        onChange={(value) => setSize(value)}
                        placeholder='Choose your size'
                        style={{ width: '100%' }}
                      >
                        <Select.Option value={39}>39</Select.Option>
                        <Select.Option value={40}>40</Select.Option>
                        <Select.Option value={41}>41</Select.Option>
                        <Select.Option value={42}>42</Select.Option>
                        <Select.Option value={43}>43</Select.Option>
                        <Select.Option value={44}>44</Select.Option>
                        <Select.Option value={45}>45</Select.Option>
                      </Select>
                    </Col>
                    <Col span={24}>
                      <Space size={8}>
                        <Button
                          onClick={() => {
                            setSize(undefined);
                            setParams(baseParams);
                          }}
                          type='primary'
                        >
                          CLEAR
                        </Button>
                        <Button onClick={() => setParams({ ...params, size })} type='primary'>
                          APPLY
                        </Button>
                      </Space>
                    </Col>
                  </Row>
                </Col>
                <Col span={24}>
                  <Row gutter={[0, 30]}>
                    <Col span={24}>
                      <Text className={styles.title}>Price</Text>
                    </Col>
                    <Col span={24}>
                      <Text>
                        The highest price is <Text strong>$389</Text>
                      </Text>
                      <Space style={{ marginTop: 12 }} size={20} direction='vertical'>
                        <Space size={15} direction='vertical'>
                          <Form.Item style={{ marginBottom: 0 }} labelCol={{ span: 24 }} label='From $'>
                            <InputNumber style={{width: '100%'}} value={from} onChange={(event) => setFrom(event.target.value)} placeholder='0' />
                          </Form.Item>
                          <Form.Item style={{ marginBottom: 0 }} labelCol={{ span: 24 }} label='To $'>
                            <InputNumber style={{width: '100%'}} value={to} onChange={(event) => setTo(event.target.value)} placeholder='389' />
                          </Form.Item>
                        </Space>
                      </Space>
                    </Col>
                    <Col span={24}>
                      <Space size={8}>
                        <Button
                          onClick={() => {
                            setFrom(undefined);
                            setTo(undefined);
                            setParams(baseParams);
                          }}
                          type='primary'
                        >
                          CLEAR
                        </Button>
                        <Button onClick={() => setParams({ ...params, from, to })} type='primary'>
                          APPLY
                        </Button>
                      </Space>
                    </Col>
                  </Row>
                </Col>
                <Col span={24}>
                  <Button
                    onClick={() => {
                      setFrom(undefined);
                      setTo(undefined);
                      setSize(undefined);
                      setParams(baseParams);
                    }}
                    type='primary'
                    size='large'
                    block
                  >
                    CLEAR ALL
                  </Button>
                </Col>
                <Col span={24}>
                  <Row gutter={[0, 30]}>
                    <Col span={24}>
                      <Text className={styles.title}>Hot Deals</Text>
                    </Col>
                    <Col span={24}>
                      <img
                        src='https://cdn.shopify.com/s/files/1/1811/9799/files/breadcrumb-4.jpg?v=1635497688'
                        alt='category'
                        width='100%'
                        height='100%'
                      />
                    </Col>
                    <Col span={24}>
                      <Button type='primary' size='large' onClick={() => navigate('/collections')}>
                        SHOP NOW
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
}
