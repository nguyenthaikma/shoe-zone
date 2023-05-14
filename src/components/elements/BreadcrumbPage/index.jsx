import { Breadcrumb, Col, Row, Typography } from 'antd';

import { pathHeadPage } from '@src/configs/breadcrumb';
import { Link, useLocation } from 'react-router-dom';
import styles from './style.module.scss';

const { Title } = Typography;

export default function BreadcrumbPage() {
  const pathname = useLocation()?.pathname;

  const pathWithoutQuery = pathname.split('?')[0];
  let pathArray = pathWithoutQuery.split('/');
  pathArray = pathArray.filter((path) => path !== '');
  const _breadcrumbs = pathArray
    .map((path, index) => {
      const href = `/${pathArray.slice(0, index + 1).join('/')}`;

      return {
        pathname: href,
        title: pathHeadPage[path],
        prePath: path,
      };
    })
    .filter((d) => d?.title);

  // Thêm home page
  _breadcrumbs.unshift({ pathname: '/', title: 'Home', prePath: '/' });

  const itemRender = (route, param, routes) => {
    const last = routes?.indexOf(route) === routes.length - 1;

    return last ? <span>{route.title}</span> : <Link to={route?.pathname}>{route.title}</Link>;
  };

  return (
    <Col span={24} className={styles.breadCrumbWrap}>
      <img
        src='https://cdn.shopify.com/s/files/1/1811/9799/files/breadcrumb-4.jpg?v=1635497688'
        alt='category'
        className={styles.img}
      />
      <Row className={styles.titleRow} gutter={[0, 15]}>
        <Col span={24}>
          <Title level={1} className={styles.title}>
            COLLECTION
          </Title>
        </Col>
        <Col span={24}>
          <Breadcrumb itemRender={itemRender} className={styles.breadCrumb} items={_breadcrumbs} />
        </Col>
      </Row>
    </Col>
  );
}
