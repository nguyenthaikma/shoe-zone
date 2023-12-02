import { notification } from 'antd';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { createCategory, deleteCategory, getDetailCategory, getListCategoryAdmin, updateCategory } from '../apis';
import { checkAuth } from '@src/libs/localStorage';

export const useQueryListCategory = () => {
  const accessToken = checkAuth();
  return useQuery(['LIST_CATEGORY', accessToken], () => getListCategoryAdmin(accessToken));
};

export const useQueryDetailCategory = (id) => {
  const accessToken = checkAuth();
  return useQuery(['DETAIL_CATEGORY', id], () => getDetailCategory(id, accessToken));
};

export const useMutationUpdateCategory = (token, id) => {
  return useMutation((data) => updateCategory(data, id, token), {
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

export const useMutationCreateCategory = (token) => {
  const queryClient = useQueryClient();
  return useMutation((data) => createCategory(data, token), {
    onSuccess: async (data) => {
      if (data.status === 200) {
        notification.success({ message: 'Create Success!' });
        queryClient.invalidateQueries('LIST_CATEGORY');
      }
    },
    onError: (error) => {
      notification.error({ message: error.message || 'Create failure!' });
    },
  });
};

export const useMutationDeleteCategory = (token) => {
  return useMutation((id) => deleteCategory(id, token), {
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
