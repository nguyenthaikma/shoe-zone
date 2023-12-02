import { REACT_APP_BASE_URL } from '@src/configs/api';
import axios from 'axios';

export const getListCategoryAdmin = (token) =>
  axios.get(`${REACT_APP_BASE_URL}/cms/categories`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const getDetailCategory = (id, token) =>
  axios.get(`${REACT_APP_BASE_URL}/cms/categories/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
export const createCategory = (data, token) =>
  axios.post(`${REACT_APP_BASE_URL}/cms/categories`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
export const updateCategory = (data, id, token) =>
  axios.patch(`${REACT_APP_BASE_URL}/cms/categories/${id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
export const deleteCategory = (id, token) =>
  axios.delete(`${REACT_APP_BASE_URL}/cms/categories/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: { productID: id },
  });
