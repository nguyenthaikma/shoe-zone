import { queryClient } from '@src/App';
import { notification } from 'antd';
import { useMutation, useQuery } from 'react-query';
import { addToCart, getListCart, plusInCart, rmCart } from '../apis/cart';
import { checkAuth } from '@src/libs/localStorage';

export const useQueryListCart = (token) => {
  return useQuery(['LIST_CART', token], () => getListCart(token), {
    enabled: !!token,
  });
};
export const useMutationAddCart = () => {
  const token = checkAuth();
  return useMutation((data) => addToCart(data, token), {
    onSuccess: async (data) => {
      if (true) {
        queryClient.refetchQueries(['LIST_CART']);
      }
    },
    onError: (error) => {
      notification.error({ message: error.message || 'Add failure!' });
    },
  });
};
export const useMutationPlusCart = (token, id) => {
  return useMutation((quantity) => plusInCart(id, token, quantity), {
    onSuccess: async (data) => {
      if (true) {
        queryClient.refetchQueries(['LIST_CART']);
      }
    },
    onError: (error) => {
      notification.error({ message: error.message || 'Add failure!' });
    },
  });
};
export const useMutationRemoveCart = (token) => {
  return useMutation((id) => rmCart(id, token), {
    onSuccess: async (data) => {
      if (true) {
        queryClient.invalidateQueries(['LIST_CART']);
      }
    },
    onError: (error) => {
      notification.error({ message: error.message || 'Remove failure!' });
    },
  });
};
