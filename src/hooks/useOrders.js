import { useQuery } from '@tanstack/react-query';
import { getAllOrders } from '../services/apiFashion';

export function useOrders() {
  const { isLoading, data: orders } = useQuery({
    queryKey: ['orders'],
    queryFn: getAllOrders,
  });
  return { isLoading, orders };
}
