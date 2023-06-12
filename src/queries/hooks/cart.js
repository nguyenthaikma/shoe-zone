import { queryClient } from '@src/App';
import { notification } from 'antd';
import { useMutation, useQuery } from 'react-query';
import { addToCart, getListCart, rmCart } from '../apis/cart';

export const useQueryListCart = (params) => {
  return useQuery(['LIST_CART', params], () => getListCart({ userID: params }), {
    enabled: !!params,
  });
};
export const useMutationAddCart = () => {
  return useMutation(addToCart, {
    onSuccess: async (data) => {
      if (data.status === 200) {
        notification.success({ message: 'Add Success!' });
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
      if (data.status === 200) {
        notification.success({ message: 'Remove Success!' });
        queryClient.invalidateQueries(['LIST_CART']);
      }
    },
    onError: (error) => {
      notification.error({ message: error.message || 'Remove failure!' });
    },
  });
};
