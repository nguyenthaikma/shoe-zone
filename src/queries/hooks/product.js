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

export const useQueryListProduct = (params = { id: 'list' }) => {
  return useQuery(['LIST_PRODUCT', params], () => getListProduct(params));
};

export const useQueryDetailProduct = (id) => {
  return useQuery(['DETAIL_PRODUCT', id], () => getDetailProduct(id));
};

export const useQueryRelatedProduct = (id, params) => {
  return useQuery(['RELATED_PRODUCT', id, params], () => getRelatedProduct(id));
};

export const useQueryListSize = (id) => {
  return useQuery(['SIZE_PRODUCT', id], () => getListSize(id));
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

export const useMutationCreateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation(createProduct, {
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

export const useMutationDeleteProduct = () => {
  return useMutation(deleteProduct, {
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

export const useMutationPaymentTT = () => {
  return useMutation(paymentTT, {
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

export const useMutationPaymentCheckout = () => {
  return useMutation(paymentCheckout, {
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
