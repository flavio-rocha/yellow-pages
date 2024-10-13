import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { get, Person } from '../services/searchApi.ts';

export const useSearch = (text): UseQueryResult<Person[], Error> => {
  return useQuery({
    queryKey: ['search', text],
    queryFn: async () => await get(text),
    enabled: !!text,
  });
};
