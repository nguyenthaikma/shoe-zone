import { REACT_APP_BASE_URL } from '@src/configs/api';
import axios from 'axios';

export const singIn = (data) => axios({ url: `${REACT_APP_BASE_URL}/user/login`, method: 'POST', data });
export const singUp = (data) => axios({ url: `${REACT_APP_BASE_URL}/user/register`, method: 'POST', data });
