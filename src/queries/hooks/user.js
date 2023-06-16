import { useMutation, useQuery, useQueryClient } from 'react-query';
import { deleteUser, getListUser } from '../apis';
import { notification } from 'antd';

export const useQueryListUser = (token) => {
  return useQuery(['LIST_USER'], () => getListUser(token));
};

export const useMutationDeleteUser = (token) => {
  const queryClient = useQueryClient();
  return useMutation((id) => deleteUser(token, id), {
    onSuccess: async (data) => {
      if (data.status === 200) {
        queryClient.invalidateQueries(['LIST_USER']);
        notification.success({ message: 'Delete Success!' });
      }
    },
    onError: (error) => {
      notification.error({ message: error.message || 'Delete failure!' });
    },
  });
};
