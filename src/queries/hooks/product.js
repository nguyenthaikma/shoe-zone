import { useMutation, useQuery, useQueryClient } from 'react-query';
import {
  createProduct,
  deleteProduct,
  getDetailProduct,
  getDetailShoes,
  getListProduct,
  getListShoes,
  getRelatedProduct,
  paymentCheckout,
  paymentTT,
  updateProduct,
} from '../apis';
import { notification } from 'antd';
import { checkAuth } from '@src/libs/localStorage';

// CMS
export const useQueryListProduct = (params = { id: 'list' }) => {
  const token = checkAuth();
  return useQuery(['LIST_PRODUCT', params], () => getListProduct(token));
};
export const useQueryDetailProduct = (id) => {
  const token = checkAuth();
  return useQuery(['DETAIL_PRODUCT', id], () => getDetailProduct(id, token));
};
export const useMutationUpdateProduct = (token, id) => {
  return useMutation((data) => updateProduct(data, token, id), {
    onSuccess: async (data) => {
      if (true) {
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
      if (true) {
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
      if (true) {
        notification.success({ message: 'Delete Success!' });
      }
    },
    onError: (error) => {
      notification.error({ message: error.message || 'Delete failure!' });
    },
  });
};

//USER
export const useQueryListShoes = () => {
  return useQuery(['LIST_SHOES'], () => getListShoes());
};
export const useQueryDetailShoes = (id) => {
  return useQuery(['DETAIL_SHOES', id], () => getDetailShoes(id));
};
export const useQueryRelatedProduct = (params) => {
  return useQuery(['RELATED_PRODUCT', params], () => getRelatedProduct(params));
};

export const useMutationPaymentTT = (token) => {
  return useMutation((data) => paymentTT(data, token), {
    onSuccess: async (data) => {
      if (true) {
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
      if (true) {
        notification.success({ message: 'Payment success' });
      }
    },
    onError: (error) => {
      notification.error({ message: error.message || 'Create order failure!' });
    },
  });
};
