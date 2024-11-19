import { useQuery } from '@tanstack/react-query';
import { getLoggedInUser } from '../services/apiFashion';

export function useUser() {
  const { isLoading, data: user } = useQuery({
    queryKey: ['user'],
    queryFn: getLoggedInUser,
  });
  return { isLoading, user };
}
