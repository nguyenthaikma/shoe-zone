import { REACT_APP_BASE_URL } from '@src/configs/api';
import axios from 'axios';

export const getListOrder = (params) => axios({ url: `${REACT_APP_BASE_URL}/order/listOrder`, method: 'GET', params });

export const getDetailOrder = (id) => axios({ url: `${REACT_APP_BASE_URL}/order/order_detail/${id}`, method: 'GET' });

export const approveOrder = (data, token) =>
  axios.post(`${REACT_APP_BASE_URL}/order/checkOrder`, data, {
    headers: {
      token: `beare ${token}`,
    },
  });

export const getOrderByUser = (id) => axios.get(`${REACT_APP_BASE_URL}/order/getOrderUser/${id}`)
