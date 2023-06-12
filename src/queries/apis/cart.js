import { REACT_APP_BASE_URL } from '@src/configs/api';
import axios from 'axios';

export const getListCart = (params) => axios({ url: `${REACT_APP_BASE_URL}/cart/list`, method: 'GET', params });

export const addToCart = (data) => axios({ url: `${REACT_APP_BASE_URL}/cart/add`, method: 'POST', data });
export const rmCart = (data) => axios({ url: `${REACT_APP_BASE_URL}/cart/deleteCart`, method: 'POST', data });
