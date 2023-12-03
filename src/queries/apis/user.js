import { REACT_APP_BASE_URL } from '@src/configs/api';
import axios from 'axios';

export const getListUser = (token) =>
  axios.get(`${REACT_APP_BASE_URL}/cms/users`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

