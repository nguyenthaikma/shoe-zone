import { checkAuth } from '@src/libs/localStorage';
import { PI_data } from '@src/pages/checkout/information';
import { useMutationVerifyQr } from '@src/queries/hooks';
import { addDataActionScanner, onCloseScanner, updatePiMerchant, updateSuccessActionScanner } from '@src/redux/actions/scannerReducer';
import { hashData, verifySignature } from '@src/utils/sqrc';
import { Spin } from 'antd';
import QrReader from 'modern-react-qr-reader';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.module.scss';

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
      const result = data;
      const H = {
        PI_Merchant: result.publicData.payment,
        OI_data: result.publicData.order,
        PIMD_Buyer: result.privateData,
      };

      const isSignatureValid = verifySignature(H, result.signature);

      const hashPIBuyer = hashData(PI_data);
      const PIMD_Buyer = result.privateData;

      if (isSignatureValid && hashPIBuyer === PIMD_Buyer) {
        dispatch(updateSuccessActionScanner(true));
        dispatch(updatePiMerchant(result.publicData.payment))
      }
      // verifyQR(data, {
      //   onSuccess: async (res) => {
      //     // const url = await (
      //     //   await getUrlPaymentVNP(res.data.quantity * res.data.shoes.price * 24.61, res.data.shoes.name)
      //     // ).getPaymentUrl(res.data.id);
      //     // window.open(url, '_blank');
      //   },
      //   onSettled: () => {
      //     dispatch(onCloseScanner());
      //   },
      // });
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
              delay={50}
              onScan={(data) => {
                if (!!data) {
                  handleScan(data);
                }
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
