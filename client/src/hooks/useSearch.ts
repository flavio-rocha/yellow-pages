import { useQuery } from '@tanstack/react-query';
import { get } from '../services/searchApi.ts';

export const useSearch = (text) => {
  return useQuery({
    queryKey: ['search', text],
    queryFn: async () => await get(text),
    enabled: !!text,
  });
};
