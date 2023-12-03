import { REACT_APP_BASE_URL } from '@src/configs/api';
import axios from 'axios';

export const getListSizeAdmin = (token, params) =>
  axios.get(`${REACT_APP_BASE_URL}/cms/shoesRefSize`, {
    params,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const getDetailSize = (id, token) =>
  axios.get(`${REACT_APP_BASE_URL}/cms/shoesRefSize/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
export const createSize = (data, token) =>
  axios.post(`${REACT_APP_BASE_URL}/cms/shoesRefSize`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
export const updateSize = (data, id, token) =>
  axios.patch(`${REACT_APP_BASE_URL}/cms/shoesRefSize/${id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
export const deleteSize = (id, token) =>
  axios.delete(`${REACT_APP_BASE_URL}/cms/shoesRefSize/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: { productID: id },
  });
