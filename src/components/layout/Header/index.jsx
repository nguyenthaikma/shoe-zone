import { useEffect, useState } from 'react';

import {
  MailFilled,
  MenuOutlined,
  PhoneFilled,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { listCategory } from '@src/configs/const';
import { onOpen } from '@src/redux/actions/drawerReducer';
import { Col, Drawer, Row, Space, Typography } from 'antd';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import styles from './style.module.scss';

const { Text } = Typography;

export default function Header() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const onClose = () => {
    setOpenDrawer(false);
  };
  const location = useLocation();

  const [y, setY] = useState(0);
  useEffect(() => {
    const handleScroll = (event) => {
      const window = event.currentTarget;

      setY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [y]);

  const dispatch = useDispatch();
  const handleOpen = () => {
    dispatch(onOpen());
  };
  return (
    <Row className={`${styles.wrapper}`}>
      <Drawer placement='right' width={300} onClose={onClose} open={openDrawer}>
        <Row gutter={[30, 0]} align='center' className={styles.row}>
          {listCategory.map((category) => (
            <Col className={styles.inDrawer} span={24} key={category.id}>
              <Link
                className={`${location?.pathname === category.href && styles.active} ${styles.linkItem} ${
                  styles.drawer
                }`}
                to={category.href}
              >
                {category.name}
              </Link>
            </Col>
          ))}
        </Row>
      </Drawer>
      <div className={`${styles.top}`}>
        <div className={`container ${styles.topWrap}`}>
          <Space size={10} wrap>
            <Space size={3} className='hoverColor'>
              <PhoneFilled />
              <Text>0345508678</Text>
            </Space>
            <Space size={3} className='hoverColor'>
              <MailFilled />
              <Text> info@somedomain.com</Text>
            </Space>
          </Space>
          <Space size={10} wrap>
            <Link to='/' className='hoverColor'>
              Store Location
            </Link>
            <Link to='/' className='hoverColor'>
              Track Your Order
            </Link>
          </Space>
        </div>
      </div>
      <div className={`container ${styles.bottomWrap} ${y > 300 && styles.fix}`}>
        <Col span={24}>
          <Row className={styles.bottom}>
            <Col className={styles.logoWrap}>
              <Link to='/'>
                <img
                  src='https://cdn.shopify.com/s/files/1/1811/9799/files/shoe-logo-new_300x300.png?v=1613157234'
                  alt='SHOE ZONE'
                  className={styles.logo}
                />
              </Link>
            </Col>
            <Col className={styles.category}>
              <Row gutter={[30, 0]} align='center' className={styles.row}>
                {listCategory.map((category) => (
                  <Col key={category.id}>
                    <Link
                      className={`${location?.pathname === category.href && styles.active} ${styles.linkItem}`}
                      to={category.href}
                    >
                      {category.name}
                    </Link>
                  </Col>
                ))}
              </Row>
            </Col>
            <Col className={styles.action}>
              <Space size={20}>
                <Space onClick={() => setOpenDrawer(true)} align='center' size={8} className={`${styles.menu}`}>
                  <MenuOutlined className={styles.icon} />
                  <Text className={styles.text}>Menu</Text>
                </Space>
                <Link to='/'>
                  <SearchOutlined className={styles.icon} />
                </Link>
                <Link to='/login'>
                  <UserOutlined className={styles.icon} />
                </Link>
                <ShoppingCartOutlined onClick={handleOpen} className={styles.icon} />
              </Space>
            </Col>
          </Row>
        </Col>
      </div>
    </Row>
  );
}
