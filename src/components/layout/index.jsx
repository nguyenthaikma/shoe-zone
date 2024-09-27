import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { ScanOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import QRScanner from '../widgets/QrScanner';
import { useDispatch } from 'react-redux';
import { onOpenScanner } from '@src/redux/actions/scannerReducer';

export default function MainLayout(props) {
  const { children, className } = props;

  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <Header />
      <main style={{ position: 'relative' }} className='site' id='page'>
        <div className={`main ${className || ''}`}>{children}</div>
        <Button
          onClick={() => {
            dispatch(onOpenScanner());
          }}
          style={{ position: 'fixed', right: 12, bottom: 80, zIndex: 99999, background: '#571f7c' }}
        >
          <ScanOutlined style={{ color: 'white' }} />
        </Button>
      </main>
      <Footer />
      <QRScanner />
    </React.Fragment>
  );
}
