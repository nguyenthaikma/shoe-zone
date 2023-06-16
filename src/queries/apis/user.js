import { REACT_APP_BASE_URL } from '@src/configs/api';
import axios from 'axios';

export const getListUser = (token) =>
  axios.get(`${REACT_APP_BASE_URL}/user/list`, {
    headers: {
      token: `beare ${token}`,
    },
  });

export const deleteUser = (token, id) =>
  axios.delete(`${REACT_APP_BASE_URL}/user/delete/${id}`, {
    headers: {
      token: `beare ${token}`,
    },
  });
