import { notification } from 'antd';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { createSize, deleteSize, getDetailSize, getListSizeAdmin, updateSize } from '../apis';
import { checkAuth } from '@src/libs/localStorage';

export const useQueryListSize = (params) => {
  const accessToken = checkAuth();
  return useQuery(['LIST_SIZE', JSON.stringify(params), accessToken], () => getListSizeAdmin(accessToken, params));
};

export const useQueryDetailSize = (id) => {
  const accessToken = checkAuth();
  return useQuery(['DETAIL_SIZE', id], () => getDetailSize(id, accessToken));
};

export const useMutationUpdateSize = (token, id) => {
  return useMutation((data) => updateSize(data, id, token), {
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

export const useMutationCreateSize = (token) => {
  const queryClient = useQueryClient();
  return useMutation((data) => createSize(data, token), {
    onSuccess: async (data) => {
      if (true) {
        notification.success({ message: 'Create Success!' });
        queryClient.invalidateQueries('LIST_SIZE');
      }
    },
    onError: (error) => {
      notification.error({ message: error.message || 'Create failure!' });
    },
  });
};

export const useMutationDeleteSize = (token) => {
  return useMutation((id) => deleteSize(id, token), {
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
