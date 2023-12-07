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
export const rmCart = (data) => axios({ url: `${REACT_APP_BASE_URL}/cart/deleteCart`, method: 'POST', data });

export const plusInCart = (data) => axios({ url: `${REACT_APP_BASE_URL}/cart/addToCart`, method: 'POST', data });
