import { useQuery } from 'react-query';
import { getListProduct } from '../apis';

export const useQueryListProduct = () => {
  return useQuery(['LIST_PRODUCT'], getListProduct);
};
