import axios from 'axios';
import { API_TIMEOUT, BASE_URL } from '../../configs/api';

const client = axios.create({
  baseURL: BASE_URL,
  timeout: API_TIMEOUT,
  timeoutErrorMessage: '🚧🚧🚧 Server connection time out !',
  headers: {
    Accept: 'application/json',
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    responseEncoding: 'utf8',
    responseType: 'json',
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'Access-Control-Allow-Origin': '*',
    'X-Application': 'web app',
    'X-Version': '1.0.1',
  },
});

export const request = async (options, additional) => {
  client.defaults.headers.common.Authorization = `Bearer ${additional?.token || undefined}`;

  const onSuccess = (response) => {
    return response;
  };
  const onError = async (error) => {
    // optionally catch errors and add additional logging here
    await Promise.reject({
      error,
    });
  };
  return client(options).then(onSuccess).catch(onError);
};
