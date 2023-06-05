import { useMutation, useQuery } from 'react-query';
import { getDetailProduct, getListProduct, updateProduct } from '../apis';
import { notification } from 'antd';

export const useQueryListProduct = (params = { id: 'list' }) => {
  return useQuery(['LIST_PRODUCT', params], () => getListProduct(params));
};

export const useQueryDetailProduct = (id) => {
  return useQuery(['DETAIL_PRODUCT', id], () => getDetailProduct(id));
};

export const useMutationUpdateProduct = () => {
  return useMutation(updateProduct, {
    onSuccess: async (data) => {
      if (data.status === 200) {
        notification.success({ message: 'Update Success!' });
      }
    },
    onError: (error) => {
      notification.error({ message: error.message || 'Update failure!' });
    },
  });
};
