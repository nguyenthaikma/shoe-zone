import { REACT_APP_BASE_URL } from '@src/configs/api';
import axios from 'axios';

export const getListProduct = (params) =>
  axios({ url: `${REACT_APP_BASE_URL}/product/${params.id}`, method: 'GET', params });

export const getDetailProduct = (id) =>
  axios({ url: `${REACT_APP_BASE_URL}/product/product_detail/${id}`, method: 'GET' });
export const createProduct = (data) => axios({ url: `${REACT_APP_BASE_URL}/product/add`, method: 'POST', data });
export const updateProduct = (data) => axios({ url: `${REACT_APP_BASE_URL}/product/update`, method: 'POST', data });
export const deleteProduct = (id) =>
  axios({ url: `${REACT_APP_BASE_URL}/product/delete`, method: 'DELETE', data: { productID: id } });

export const getRelatedProduct = (id, params) =>
  axios({ url: `${REACT_APP_BASE_URL}/product/recommend/${id}`, method: 'GET', data: { ...params } });
export const getListSize = (id) => axios({ url: `${REACT_APP_BASE_URL}/product/size/${id}`, method: 'GET' });

export const paymentTT = (data) => axios({ url: `${REACT_APP_BASE_URL}/order/BuyItNow`, method: 'POST', data });
export const paymentCheckout = (data) => axios({ url: `${REACT_APP_BASE_URL}/order/checkout`, method: 'POST', data });
