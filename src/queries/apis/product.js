import { REACT_APP_BASE_URL } from '@src/configs/api';
import axios from 'axios';

export const getListProduct = (token) => {
  console.log(`${REACT_APP_BASE_URL}/cms/shoes`)
  return axios.get(`${REACT_APP_BASE_URL}/cms/shoes`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getDetailProduct = (id, token) =>
  axios.get(`${REACT_APP_BASE_URL}/cms/shoes/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
export const createProduct = (data, token) =>
  axios.post(`${REACT_APP_BASE_URL}/cms/shoes`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
export const updateProduct = (data, token, id) =>
  axios.patch(`${REACT_APP_BASE_URL}/cms/shoes/${id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
export const deleteProduct = (id, token) =>
  axios.delete(`${REACT_APP_BASE_URL}/cms/shoes/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const getRelatedProduct = (params) =>
  axios({ url: `${REACT_APP_BASE_URL}/product/recommend`, method: 'GET', params });
export const getListSize = (id) => axios({ url: `${REACT_APP_BASE_URL}/product/size/${id}`, method: 'GET' });

export const paymentTT = (data, token) =>
  axios.post(`${REACT_APP_BASE_URL}/order/BuyItNow`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
export const paymentCheckout = (data, token) =>
  axios.post(`${REACT_APP_BASE_URL}/order/checkout`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
