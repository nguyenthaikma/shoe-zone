import { notification } from 'antd';
import { useMutation } from 'react-query';
import { clearStoredAuth, setStoredAuth } from '../../libs/localStorage';
import { changePassword, singIn, singUp } from '../apis';

export const useMutationLogin = () => {
  return useMutation(singIn, {
    onSuccess: async (data) => {
      setStoredAuth(data.data);
      notification.success({ message: 'Login Success!' });
    },
    onError: (error) => {
      clearStoredAuth();  
      notification.error({ message: 'Login failure!' });
    },
  });
};

export const useMutationRegister = () => {
  return useMutation(singUp, {
    onSuccess: async (data) => {
      if (data.status === 200) {
        setStoredAuth(data.data);
        notification.success({ message: 'Register Success!' });
      }
    },
    onError: (error) => {
      clearStoredAuth();
      notification.error({ message: error.message || 'Register failure!' });
    },
  });
};

export const useMutationChangePassword = (token) => {
  return useMutation((data) => changePassword(data, token), {
    onSuccess: async (data) => {
      if (data.status === 200) {
        notification.success({ message: 'Change Success!' });
      }
    },
    onError: (error) => {
      notification.error({ message: 'Change failure!' });
    },
  });
};
