import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { logout as logoutApi } from '../services/apiFashion';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { isLoading, mutate: logout } = useMutation({
    mutationFn: logoutApi,
    onSuccess: (data) => {
      queryClient.setQueryData(['user'], data);
      queryClient.setQueryData(['orders'], []);
      toast.success('You have successfully logged out!');
    },
    onError: (error) => {
      console.log(error);
      toast.error('There was an error while logging you out!');
    },
  });
  return { isLoading, logout };
}
