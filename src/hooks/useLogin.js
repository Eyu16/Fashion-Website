import { useMutation, useQueryClient } from '@tanstack/react-query';
import { singupLogin } from '../services/apiFashion';
import toast from 'react-hot-toast';
import { formatDuplicateFieldError } from '../utils/helpers';

export function useLogin() {
  const queryClient = useQueryClient();
  const { isLoading, mutate: login } = useMutation({
    mutationFn: ({ data, type }) => singupLogin(data, type),
    onSuccess: (user) => {
      queryClient.setQueryData(['user'], user);
      toast.success('Login successful! Welcome back!');
    },
    onError: (error) => {
      toast.error(formatDuplicateFieldError(error.message));
    },
  });
  return { isLoading, login };
}
