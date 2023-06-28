import { useMutation, useQuery, useQueryClient } from 'react-query';
import { approveOrder, getDetailOrder, getListOrder, getOrderByUser } from '../apis';
import { notification } from 'antd';

export const useQueryListOrder = () => {
  return useQuery(['LIST_ORDER'], () => getListOrder());
};

export const useQueryDetailOrder = (id) => {
  return useQuery(['DETAIL_ORDER', id], () => getDetailOrder(id));
};

export const useQueryUserOrder = (id) => {
  return useQuery(['DETAIL_ORDER', id], () => getOrderByUser(id));
};

export const useMutationApproveOrder = (token) => {
  const queryClient = useQueryClient();
  return useMutation((data) => approveOrder(data, token), {
    onSuccess: async (data) => {
      if (data.status === 200) {
        queryClient.invalidateQueries('LIST_ORDER');
        notification.success({ message: 'Approve Success!' });
      }
    },
    onError: (error) => {
      notification.error({ message: error.message || 'Approve failure!' });
    },
  });
};
