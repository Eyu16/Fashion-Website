import { useMutation, useQueryClient } from '@tanstack/react-query';
import { singupLogin } from '../services/apiFashion';
import toast from 'react-hot-toast';
import { formatDuplicateFieldError } from '../utils/helpers';

export function useSignup() {
  const queryClient = useQueryClient();
  const { isLoading, mutate: signup } = useMutation({
    mutationFn: ({ data, type }) => singupLogin(data, type),
    onSuccess: (user) => {
      queryClient.setQueryData(['user'], user);
      toast.success('Sign-up successful! Welcome aboard!');
    },
    onError: (error) => {
      console.log(error.message);
      toast.error(formatDuplicateFieldError(error.message));
    },
  });
  return { isLoading, signup };
}
