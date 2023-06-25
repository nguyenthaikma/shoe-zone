import { REACT_APP_BASE_URL } from '@src/configs/api';
import axios from 'axios';

export const getListProduct = (params) =>
  axios({ url: `${REACT_APP_BASE_URL}/product/${params.id}`, method: 'GET', params });

export const getDetailProduct = (id) =>
  axios({ url: `${REACT_APP_BASE_URL}/product/product_detail/${id}`, method: 'GET' });
export const createProduct = (data, token) =>
  axios.post(`${REACT_APP_BASE_URL}/product/add`, data, {
    headers: {
      token: `beare ${token}`,
    },
  });
export const updateProduct = (data, token) =>
  axios.post(`${REACT_APP_BASE_URL}/product/update`, data, {
    headers: {
      token: `beare ${token}`,
    },
  });
export const deleteProduct = (id, token) =>
  axios.delete(`${REACT_APP_BASE_URL}/product/delete`, {
    headers: {
      token: `beare ${token}`,
    },
    data: { productID: id },
  });

export const getRelatedProduct = (params) =>
  axios({ url: `${REACT_APP_BASE_URL}/product/recommend`, method: 'GET', params });
export const getListSize = (id) => axios({ url: `${REACT_APP_BASE_URL}/product/size/${id}`, method: 'GET' });

export const paymentTT = (data, token) =>
  axios.post(`${REACT_APP_BASE_URL}/order/BuyItNow`, data, {
    headers: {
      token: `beare ${token}`,
    },
  });
export const paymentCheckout = (data, token) =>
  axios.post(`${REACT_APP_BASE_URL}/order/checkout`, data, {
    headers: {
      token: `beare ${token}`,
    },
  });
