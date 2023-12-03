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

export const approveOrder = (data, token) =>
  axios.post(`${REACT_APP_BASE_URL}/order/checkOrder`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const getOrderByUser = (id) => axios.get(`${REACT_APP_BASE_URL}/order/getOrderUser/${id}`);
