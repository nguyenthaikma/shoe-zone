import QrReader from 'modern-react-qr-reader';
import styles from './styles.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addDataActionScanner, onCloseScanner } from '@src/redux/actions/scannerReducer';
import { useMutationVerifyQr } from '@src/queries/hooks';
import { checkAuth } from '@src/libs/localStorage';
import { useEffect } from 'react';
import { getUrlPaymentVNP } from '@src/configs/vnpay';
import { Spin } from 'antd';

const QRScanner = () => {
  const token = checkAuth();
  const { mutate: verifyQR, isLoading: isLoadingVerify } = useMutationVerifyQr(token);
  const open = useSelector((state) => state.scannerReducer.open);
  const data = useSelector((state) => state.scannerReducer.data);
  const dispatch = useDispatch();

  const handleScan = (data) => {
    const result = JSON.parse(data);
    dispatch(addDataActionScanner({ ...result, publicData: JSON.parse(result.publicData) }));
  };

  useEffect(() => {
    if (data) {
      verifyQR(data, {
        onSuccess: async (res) => {
          const url = await (
            await getUrlPaymentVNP(res.data.quantity * res.data.shoes.price * 24.61, res.data.shoes.name)
          ).getPaymentUrl(res.data.id);

          window.open(url, '_blank');
        },
        onSettled: () => {
          dispatch(onCloseScanner());
        },
      });
    }
  }, [data, verifyQR, dispatch]);

  return (
    <div>
      {open && (
        <div onClick={() => dispatch(onCloseScanner())} className={styles.wrapper}>
          {isLoadingVerify ? (
            <Spin />
          ) : (
            <QrReader
              delay={300}
              onScan={(data) => {
                if (!!data) {
                  handleScan(data);
                }
              }}
              onError={(err) => {
                console.log('🚀🚀🚀🚀 ~ QRScanner ~ err:', err);
              }}
              className={styles.videoContainer}
              style={{ width: 400, height: 400 }}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default QRScanner;
