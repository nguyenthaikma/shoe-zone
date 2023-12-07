import { queryClient } from '@src/App';
import { notification } from 'antd';
import { useMutation, useQuery } from 'react-query';
import { addToCart, getListCart, plusInCart, rmCart } from '../apis/cart';

export const useQueryListCart = (token) => {
  return useQuery([token], () => getListCart(token), {
    enabled: !!token,
  });
};
export const useMutationAddCart = (token) => {
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
export const useMutationPlusCart = () => {
  return useMutation(plusInCart, {
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
export const useMutationRemoveCart = () => {
  return useMutation(rmCart, {
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
