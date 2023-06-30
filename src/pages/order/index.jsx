import { Col, Descriptions, Row, Typography } from 'antd';

import BreadcrumbPage from '@src/components/elements/BreadcrumbPage';
import { getStoredAuth } from '@src/libs/localStorage';
import { useQueryUserOrder } from '@src/queries/hooks';
import { useMemo } from 'react';
import styles from './style.module.scss';

const { Title } = Typography;

export default function Order() {
  const _breadcrumbs = [{ title: 'Home', href: '/' }, { title: 'Order' }];
  const profile = getStoredAuth();

  const { data: fetchOrder } = useQueryUserOrder(profile?.userID);
  const listOrder = useMemo(() => fetchOrder?.data, [fetchOrder]);
  console.log(listOrder);

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
              <Descriptions.Item label='ID'>{item?.orderID}</Descriptions.Item>
              <Descriptions.Item label='Status'>{item?.status}</Descriptions.Item>
              <Descriptions.Item label='Address'>{item?.shipAddress}</Descriptions.Item>
              <Descriptions.Item label='Email'>{item?.shipEmail}</Descriptions.Item>
              <Descriptions.Item label='Phone'>{item?.shipMobile}</Descriptions.Item>
              <Descriptions.Item label='Total price'>{item?.totalAmount}$</Descriptions.Item>
            </Descriptions>
          ))}
        </div>
      </Col>
    </Row>
  );
}
