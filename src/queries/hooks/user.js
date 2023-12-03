import { useQuery } from 'react-query';
import { getListUser } from '../apis';

export const useQueryListUser = (token) => {
  return useQuery(['LIST_USER'], () => getListUser(token));
};


