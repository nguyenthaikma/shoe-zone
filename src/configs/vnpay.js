import { REACT_APP_VNP_HASHSECRET, REACT_APP_VNP_TMCODE, REACT_APP_VNP_URL } from '@src/configs/api';
import dayjs from 'dayjs';
import querystring from 'qs';
import { publicIpv4 } from 'public-ip';
import * as crypto from 'crypto';

export function sortObject(obj) {
  const sorted = {};
  const str = [];
  let key;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      str.push(encodeURIComponent(key));
    }
  }
  str.sort();
  for (key = 0; key < str.length; key++) {
    sorted[str[key]] = encodeURIComponent(obj[str[key]]).replace(/%20/g, '+');
  }
  return sorted;
}

export const getUrlPaymentVNP = async (amount, orderInfo) => {
  const IPv4 = await publicIpv4();
  const vnpcreatedAt = dayjs().format('YYYYMMDDHHmmss');

  const vnpParamsToOrder = {
    vnpTmnCode: REACT_APP_VNP_TMCODE,
    vnpReturnUrl: 'http://huge-shoes.kma.surge.sh/VnPayReturn',
    vnpVersion: '2.1.0',
    vnpCommand: 'pay',
    vnpOrderType: 'topu',
    vnpLocale: 'vn',
    vnpCurrCode: 'VND',
    vnpIpAddr: IPv4,
  };

  function getPaymentUrl(paymentId) {
    let vnpParams = {
      vnp_TmnCode: REACT_APP_VNP_TMCODE,
      vnp_ReturnUrl: 'http://huge-shoes.kma.surge.sh/VnPayReturn',
      vnp_Version: '2.1.0',
      vnp_Command: 'pay',
      vnp_OrderType: 'topu',
      vnp_Locale: 'vn',
      vnp_CurrCode: 'VND',
      vnp_Amount: amount * 100,
      vnp_createdAt: vnpcreatedAt,
      vnp_IpAddr: IPv4,
    };
    vnpParams.vnp_TxnRef = paymentId;
    vnpParams.vnp_OrderInfo = `Mua giày ${orderInfo}`;

    vnpParams = sortObject(vnpParams);

    const secretKey = REACT_APP_VNP_HASHSECRET ?? '';

    const signData = querystring.stringify(vnpParams, { encode: false });
    const hmac = crypto.createHmac('sha512', secretKey);
    // eslint-disable-next-line no-buffer-constructor
    const signed = hmac.update(new Buffer(signData, 'utf-8')).digest('hex');

    vnpParams.vnp_SecureHash = signed;

    const vnpParamsUrl = `${querystring.stringify(vnpParams, { encode: false })}`;

    const paymentUrl = `${REACT_APP_VNP_URL}?${vnpParamsUrl}`;

    return paymentUrl;
  }

  return {
    getPaymentUrl,
    vnpParamsToOrder,
  };
};
