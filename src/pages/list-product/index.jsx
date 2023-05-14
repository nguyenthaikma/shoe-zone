import { Button, Col, Form, Input, Row, Select, Space, Typography } from 'antd';
import { Radio } from 'antd';

import BreadcrumbPage from '@src/components/elements/BreadcrumbPage';
import styles from './style.module.scss';
import ProductItem from '@src/components/elements/ProductItem';
import { useNavigate } from 'react-router-dom';

const { Text } = Typography;

const listNewArrivals = [
  {
    id: 1,
    image:
      'https://cdn.shopify.com/s/files/1/1811/9799/products/shoe9_8a5e5186-31f5-47cb-a8cf-fecf2349bed7_600x.jpg?v=1494325511',
    name: 'elevator shoes',
    price: 389,
    rate: 4,
  },
  {
    id: 2,
    image: 'https://cdn.shopify.com/s/files/1/1811/9799/products/shoe11_600x.jpg?v=1494314260',
    name: 'boat shoes',
    price: 389,
    rate: 4,
  },
  {
    id: 3,
    image:
      'https://cdn.shopify.com/s/files/1/1811/9799/products/shoe12_d236d83f-7f25-4d9e-b156-5131fead58c6_600x.jpg?v=1494317456',
    name: 'adidas kampung',
    price: 389,
    rate: 4,
  },
  {
    id: 4,
    image: 'https://cdn.shopify.com/s/files/1/1811/9799/products/shoe13_600x.jpg?v=1494317190',
    name: 'fashion boot',
    price: 389,
    rate: 4,
  },
  {
    id: 5,
    image:
      'https://cdn.shopify.com/s/files/1/1811/9799/products/shoe9_0926fd04-01c0-4c74-b158-0fc24171828f_600x.jpg?v=1494317646',
    name: 'roger dubuis',
    price: 389,
    rate: 4,
  },
];

export default function ListProduct() {
  const _breadcrumbs = [{ title: 'Home', href: '/' }, { title: 'Collections', href: '/collections' }, { title: '1' }];

  const navigate = useNavigate();
  return (
    <Row className={styles.wrapper}>
      <BreadcrumbPage className={styles.breadCrumb} items={_breadcrumbs} />
      <Col span={24} className={styles.listProduct}>
        <div className='container'>
          <Row gutter={[30, 30]}>
            <Col md={{ span: 18 }} span={14}>
              <Row gutter={[0, 30]}>
                <Col span={24} className={styles.sort}>
                  <Space align='center' size={4}>
                    <Text>Pagination by</Text>
                    <Select style={{ minWidth: 120 }} defaultValue={9}>
                      <Select.Option value={9}>9</Select.Option>
                      <Select.Option value={12}>12</Select.Option>
                      <Select.Option value={16}>16</Select.Option>
                      <Select.Option value={20}>20</Select.Option>
                    </Select>
                  </Space>
                  <Space align='center' size={4}>
                    <Text>Sort by</Text>
                    <Select style={{ minWidth: 120 }} defaultValue='feature'>
                      <Select.Option value='feature'>Feature</Select.Option>
                      <Select.Option value='price'>Price</Select.Option>
                    </Select>
                  </Space>
                </Col>
                <Col span={24}>
                  <Row gutter={[30, 30]}>
                    {listNewArrivals.map((item) => (
                      <Col xl={{ span: 8 }} md={{ span: 12 }} span={24}>
                        <ProductItem data={item} key={item.id} />
                      </Col>
                    ))}
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col md={{ span: 6 }} span={10} className={styles.filter}>
              <Row gutter={[0, 40]}>
                <Col span={24}>
                  <Row gutter={[0, 30]}>
                    <Col span={24}>
                      <Text className={styles.title}>Availability</Text>
                    </Col>
                    <Col span={24}>
                      <Space size={20} direction='vertical'>
                        <Space size={15} direction='vertical'>
                          <Radio value='1'>In stock</Radio>
                          <Radio value='2'>Out of stock</Radio>
                        </Space>
                      </Space>
                    </Col>
                    <Col span={24}>
                      <Space size={8}>
                        <Button type='primary'>CLEAR</Button>
                        <Button type='primary'>APPLY</Button>
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
                            <Input placeholder='0' />
                          </Form.Item>
                          <Form.Item style={{ marginBottom: 0 }} labelCol={{ span: 24 }} label='To $'>
                            <Input placeholder='389' />
                          </Form.Item>
                        </Space>
                      </Space>
                    </Col>
                    <Col span={24}>
                      <Space size={8}>
                        <Button type='primary'>CLEAR</Button>
                        <Button type='primary'>APPLY</Button>
                      </Space>
                    </Col>
                  </Row>
                </Col>
                <Col span={24}>
                  <Button type='primary' size='large' block>
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
