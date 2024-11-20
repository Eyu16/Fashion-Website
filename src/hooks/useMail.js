import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { sendContactEmail } from '../services/apiFashion';

export function useMail() {
  const { isLoading, mutate: sendMail } = useMutation({
    mutationFn: sendContactEmail,
    onSuccess: () => {
      toast.success('Email has been sent successfully!');
    },
    onError: () => {
      toast.error('There was an error sending your email!');
    },
  });
  return { isLoading, sendMail };
}
