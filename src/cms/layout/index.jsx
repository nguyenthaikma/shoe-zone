import { DashboardOutlined, UserOutlined, DropboxOutlined } from '@ant-design/icons';
import Breadcrumb from '@src/components/widgets/BreadCrumb';
import UserDropdownAuth from '@src/components/widgets/UserDropdown';
import { Col, Divider, Layout, Menu, Row } from 'antd';
import { useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import styles from './style.module.scss';

const { Header, Content, Footer, Sider } = Layout;

const getItem = (label, key, icon, children) => {
  return {
    key,
    icon,
    children,
    label,
  };
};

function LayoutApp({ children }) {
  const location = useLocation();

  const [collapsed, setCollapsed] = useState(false);
  const [selectedKeyMenu, setSelectedKeyMenu] = useState(['dashboard']);

  useEffect(() => {
    const pathSnippets = location.pathname.split('/').filter((i) => i);
    if (pathSnippets && pathSnippets?.length > 0) setSelectedKeyMenu(pathSnippets);
  }, [location.pathname]);

  const onSelectMenu = ({ keyPath }) => {
    setSelectedKeyMenu(keyPath);
  };

  const menuItems = useMemo(
    () => [
      getItem(<Link to='/'>Dashboard</Link>, 'dashboard', <DashboardOutlined />),
      getItem('Product', 'productG', <DropboxOutlined />, [
        getItem(<Link to='/product'>List product</Link>, 'product'),
        getItem(<Link to='/create-product'>Create product</Link>, 'create-product'),
      ]),
      getItem('User', 'userG', <UserOutlined />, [
        getItem(<Link to='/user'>List user</Link>, 'user'),
        getItem(<Link to='/create-user'>Create user</Link>, 'create-user'),
      ]),
    ],
    []
  );

  return (
    <Layout style={{ minHeight: '100vh', padding: 0 }}>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          width: '100%',
          paddingLeft: 24,
          paddingRight: 24,
          height: 64,
        }}
        className={styles.wrapper}
      >
        <Col span={24}>
          <Row justify='space-between' align='middle'>
            <Col>
              <Link to='/'>
                <img
                  src='https://cdn.shopify.com/s/files/1/1811/9799/files/shoe-logo-new_300x300.png?v=1613157234'
                  alt='logo'
                  width={120}
                />
              </Link>
            </Col>
            <Col>
              <UserDropdownAuth />
            </Col>
          </Row>
        </Col>
      </Header>
      <Layout style={{ overflow: 'hidden' }}>
        <Sider width={230} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} theme='light'>
          <Menu
            mode='inline'
            style={{ height: '100%', borderRight: 0 }}
            items={menuItems}
            theme='light'
            defaultSelectedKeys={selectedKeyMenu}
            onSelect={onSelectMenu}
          />
        </Sider>
        <Layout style={{ padding: '0 24px 0' }}>
          <Row style={{ margin: '16px 0' }}>
            <Breadcrumb />
          </Row>
          <Divider style={{ margin: 0 }} />
          <Content
            style={{
              paddingTop: 10,
              paddingBottom: 10,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Row>{children}</Row>
          </Content>
          <Footer
            style={{
              paddingTop: 24,
              paddingBottom: 24,
              paddingLeft: 0,
              paddingRight: 0,
              textAlign: 'center',
            }}
          >
            {'Designed and Developer by '}
            <a href='https://twinger.vn/' target='_blank' rel='noreferrer'>
              Twinger
            </a>
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default LayoutApp;
