import { REACT_APP_BASE_URL } from '@src/configs/api';
import axios from 'axios';

export const getListProduct = () => axios({ url: `${REACT_APP_BASE_URL}/product/list`, method: 'GET' });
