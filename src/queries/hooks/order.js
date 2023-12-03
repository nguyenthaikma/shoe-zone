import { useMutation, useQuery, useQueryClient } from 'react-query';
import { approveOrder, getDetailOrder, getListOrder, getOrderByUser } from '../apis';
import { notification } from 'antd';
import { checkAuth } from '@src/libs/localStorage';

export const useQueryListOrder = () => {
  const token = checkAuth();
  return useQuery(['LIST_ORDER'], () => getListOrder(token));
};

export const useQueryDetailOrder = (id) => {
  const token = checkAuth();
  return useQuery(['DETAIL_ORDER', id], () => getDetailOrder(id, token));
};

export const useQueryUserOrder = (id) => {
  return useQuery(['DETAIL_ORDER', id], () => getOrderByUser(id));
};

export const useMutationApproveOrder = (token) => {
  const queryClient = useQueryClient();
  return useMutation((data) => approveOrder(data, token), {
    onSuccess: async (data) => {
      if (true) {
        queryClient.invalidateQueries('LIST_ORDER');
        notification.success({ message: 'Approve Success!' });
      }
    },
    onError: (error) => {
      notification.error({ message: error.message || 'Approve failure!' });
    },
  });
};
