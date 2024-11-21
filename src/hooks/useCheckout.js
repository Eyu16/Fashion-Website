import { useMutation } from '@tanstack/react-query';
import { checkout as checkoutApi } from '../services/apiFashion';
import toast from 'react-hot-toast';
import { useCart } from '../context/CartContextProvider';

export function useCheckout() {
  const { handleReset } = useCart();
  const { isLoading, mutate: checkout } = useMutation({
    mutationFn: checkoutApi,
    onSuccess: (url) => {
      toast.success('Payment url has been sent successfully successfull!');
      handleReset();
      console.log(url);
      window.open(url, '_blank');
      console.log('done');
    },
    onError: (error) => {
      toast.error('There was an error processing your payment!');
    },
  });
  return { isLoading, checkout };
}
