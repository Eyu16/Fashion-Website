import { useQuery } from '@tanstack/react-query';
import { getAllOrders, getCurrentUserOrders } from '../services/apiFashion';
import { useUser } from './useUser';

export function useOrders() {
  const { user } = useUser();
  const { isLoading, data: orders } = useQuery({
    queryKey: ['orders'],
    queryFn: user?.role === 'admin' ? getAllOrders : getCurrentUserOrders,
  });
  return { isLoading, orders };
}
