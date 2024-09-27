import { REACT_APP_BASE_URL } from '@src/configs/api';
import axios from 'axios';

export const getListOrder = (token) =>
  axios(`${REACT_APP_BASE_URL}/cms/orders`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const getDetailOrder = (id, token) =>
  axios.get(`${REACT_APP_BASE_URL}/cms/orders/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const approveOrder = (id, token) =>
  axios({
    url: `${REACT_APP_BASE_URL}/cms/orders/verify/${id}`,
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const getOrderByUser = (token) =>
  axios.get(`${REACT_APP_BASE_URL}/explore/orders`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });


export const verifyQr = (data, token) =>
  axios.post(`${REACT_APP_BASE_URL}/explore/verify-qr`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
