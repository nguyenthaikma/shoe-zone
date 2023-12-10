import { Col, Descriptions, Image, Row, Typography } from 'antd';

import BreadcrumbPage from '@src/components/elements/BreadcrumbPage';
import { useQueryUserOrder } from '@src/queries/hooks';
import { useMemo } from 'react';
import styles from './style.module.scss';
import { media } from '@src/assets/images/media';

const { Title } = Typography;

export default function Order() {
  const _breadcrumbs = [{ title: 'Home', href: '/' }, { title: 'Order' }];

  const { data: fetchOrder } = useQueryUserOrder();
  const listOrder = useMemo(() => fetchOrder?.data?.data, [fetchOrder]);

  return (
    <Row className={styles.wrapper}>
      <BreadcrumbPage title='Order' className={styles.breadCrumb} items={_breadcrumbs} />
      <Col span={24}>
        <div className={styles.listCollection}>
          <div style={{ marginBottom: 20 }}>
            <Title level={5}>List order</Title>
          </div>
          {listOrder?.map((item, index) => (
            <Descriptions column={6} style={{ marginBottom: 20 }} key={index} layout='vertical' bordered>
              <Descriptions.Item label='ID'>{item?.id}</Descriptions.Item>
              <Descriptions.Item label='Image'>
                <Image
                  style={{ width: 40, height: 40 }}
                  src={media.find((media) => media.key === item?.shoes?.image)?.value}
                />
              </Descriptions.Item>
              <Descriptions.Item label='Shoes'>{item?.shoes?.name}</Descriptions.Item>
              <Descriptions.Item label='Status'>{item?.isVerify ? 'Verified' : 'Not verified'}</Descriptions.Item>
              <Descriptions.Item label='Total price'>{item?.amount}$</Descriptions.Item>
            </Descriptions>
          ))}
        </div>
      </Col>
    </Row>
  );
}
