import { useQuery } from 'react-query';
import { getListUser, getProfile } from '../apis';

export const useQueryListUser = (token) => {
  return useQuery(['LIST_USER'], () => getListUser(token));
};

export const useQueryProfile = (token) => {
  return useQuery(['PROFILE'], () => getProfile(token));
};
