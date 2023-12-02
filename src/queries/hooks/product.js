import { useMutation, useQuery, useQueryClient } from 'react-query';
import {
  createProduct,
  deleteProduct,
  getDetailProduct,
  getListProduct,
  getListSize,
  getRelatedProduct,
  paymentCheckout,
  paymentTT,
  updateProduct,
} from '../apis';
import { notification } from 'antd';
import { checkAuth } from '@src/libs/localStorage';

export const useQueryListProduct = (params = { id: 'list' }) => {
  const token = checkAuth();
  return useQuery(['LIST_PRODUCT', params], () => getListProduct(token));
};

export const useQueryDetailProduct = (id) => {
  const token = checkAuth();
  return useQuery(['DETAIL_PRODUCT', id], () => getDetailProduct(id, token));
};

export const useQueryRelatedProduct = (params) => {
  return useQuery(['RELATED_PRODUCT', params], () => getRelatedProduct(params));
};

export const useQueryListSize = (id) => {
  return useQuery(['SIZE_PRODUCT', id], () => getListSize(id));
};

export const useMutationUpdateProduct = (token) => {
  return useMutation((data) => updateProduct(data, token), {
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

export const useMutationCreateProduct = (token) => {
  const queryClient = useQueryClient();
  return useMutation((data) => createProduct(data, token), {
    onSuccess: async (data) => {
      if (data.status === 200) {
        notification.success({ message: 'Create Success!' });
        queryClient.invalidateQueries('LIST_PRODUCT');
      }
    },
    onError: (error) => {
      notification.error({ message: error.message || 'Create failure!' });
    },
  });
};

export const useMutationDeleteProduct = (token) => {
  return useMutation((id) => deleteProduct(id, token), {
    onSuccess: async (data) => {
      if (data.status === 200) {
        notification.success({ message: 'Delete Success!' });
      }
    },
    onError: (error) => {
      notification.error({ message: error.message || 'Delete failure!' });
    },
  });
};

export const useMutationPaymentTT = (token) => {
  return useMutation((data) => paymentTT(data, token), {
    onSuccess: async (data) => {
      if (data.status === 200) {
        notification.success({ message: 'Payment success' });
      }
    },
    onError: (error) => {
      notification.error({ message: error.message || 'Create order failure!' });
    },
  });
};

export const useMutationPaymentCheckout = (token) => {
  return useMutation((data) => paymentCheckout(data, token), {
    onSuccess: async (data) => {
      if (data.status === 200) {
        notification.success({ message: 'Payment success' });
      }
    },
    onError: (error) => {
      notification.error({ message: error.message || 'Create order failure!' });
    },
  });
};
