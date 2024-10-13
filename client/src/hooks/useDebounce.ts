import { useQuery } from '@tanstack/react-query';
// useState and useEffect could be used instead of tanstack

export const useDebounce = (input: string, delay: number): string => {
  const { data: debounceInput } = useQuery({
    queryKey: ['debounce', input],
    queryFn: async () => {
      return new Promise<string>((resolve) => {
        const debouncer = setTimeout(() => {
          resolve(input);
        }, delay);
        return () => {
          clearTimeout(debouncer);
        };
      });
    },
    enabled: !!input,
  });
  return debounceInput ?? '';
};
