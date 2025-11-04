import { useQuery } from '@tanstack/react-query';
import { searchDeezer } from '../api/searchApi.js';

export const useSearchQuery = (query, type) => {
  return useQuery({
    queryKey: ['search', query, type],
    queryFn: () => searchDeezer(query, type),
    enabled: !!query, 
  });
};
