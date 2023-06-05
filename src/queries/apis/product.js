import { REACT_APP_BASE_URL } from '@src/configs/api';
import axios from 'axios';

export const getListProduct = (params) =>
  axios({ url: `${REACT_APP_BASE_URL}/product/${params.id}`, method: 'GET', params });

export const getDetailProduct = (id) => axios({ url: `${REACT_APP_BASE_URL}/product/${id}`, method: 'GET' });
export const updateProduct = (data) => axios({ url: `${REACT_APP_BASE_URL}/product/update`, method: 'POST', data });
