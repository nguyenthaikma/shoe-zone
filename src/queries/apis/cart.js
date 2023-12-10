import { REACT_APP_BASE_URL } from '@src/configs/api';
import axios from 'axios';

export const getListCart = (token) =>
  axios.get(`${REACT_APP_BASE_URL}/explore/carts/orders`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
export const addToCart = (data, token) =>
  axios.post(`${REACT_APP_BASE_URL}/explore/carts/add-product`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
export const rmCart = (id, token) =>
  axios({
    url: `${REACT_APP_BASE_URL}/explore/carts/delete-product/${id}`,
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const plusInCart = (id, token, quantity) =>
  axios({
    url: `${REACT_APP_BASE_URL}/explore/carts/update-product/${id}`,
    method: 'PATCH',
    data: { quantity },
    headers: { Authorization: `Bearer ${token}` },
  });
