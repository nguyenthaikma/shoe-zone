import { REACT_APP_BASE_URL } from '@src/configs/api';
import axios from 'axios';

export const singIn = (data) => axios({ url: `${REACT_APP_BASE_URL}/auth/login`, method: 'POST', data });
export const singUp = (data) => axios({ url: `${REACT_APP_BASE_URL}/explore/registers`, method: 'POST', data });
export const changePassword = (data, token) =>
  axios.post(`${REACT_APP_BASE_URL}/user/changePassword`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
