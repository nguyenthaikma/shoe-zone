import { Col, Row } from 'antd';

import BreadcrumbPage from '@src/components/elements/BreadcrumbPage';
import CollectionItem from '@src/components/elements/CollectionItem';
import { listCollection } from '@src/configs/const';
import styles from './style.module.scss';

export default function Order() {
  const _breadcrumbs = [{ title: 'Home', href: '/' }, { title: 'Order' }];

  return (
    <Row className={styles.wrapper}>
      <BreadcrumbPage title='Order' className={styles.breadCrumb} items={_breadcrumbs} />
      <Col span={24} className={styles.listCollection}>
        <div className='container'>
          <Row gutter={[30, 30]}>
            {listCollection.map((collection) => (
              <Col key={collection.id} span={24} md={{ span: 12 }} xl={{ span: 6 }}>
                <CollectionItem data={collection} />
              </Col>
            ))}
          </Row>
        </div>
      </Col>
    </Row>
  );
}
