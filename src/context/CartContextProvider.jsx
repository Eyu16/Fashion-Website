import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import toast from 'react-hot-toast';

const initialState = {
  cart: [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'setCart':
      return { ...state, cart: action.payload };
    case 'resetCart':
      return { ...state, cart: [] };
    case 'addItem':
      return { ...state, cart: [...state.cart, action.payload] };
    case 'removeItem':
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case 'increaseQuantity': {
      const updatedCart = state.cart.map((item) => {
        if (item.id === action.payload)
          return {
            ...item,
            quantity: item.quantity + 1,
            totalPrice: (item.quantity + 1) * item.unitPrice,
          };
        return item;
      });
      return { ...state, cart: updatedCart };
    }
    case 'decreaseQuantity': {
      const updatedCart = state.cart.map((item) => {
        if (item.id === action.payload)
          return {
            ...item,
            quantity: Math.max(item.quantity - 1, 1),
            totalPrice: Math.max(item.quantity - 1, 1) * item.unitPrice,
          };
        return item;
      });
      return { ...state, cart: updatedCart };
    }
    default:
      return new Error('Action type is unknown');
  }
}
const CartContext = createContext();
export default function CartContextProvider({ children }) {
  const localCart = localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : initialState;
  const [{ cart }, dispatch] = useReducer(reducer, localCart);

  console.log(cart);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify({ cart }));
  }, [cart]);

  const isIncart = useCallback(
    (id) => {
      const item = cart?.find((item) => item.id === id);
      if (item) return true;
      return false;
    },
    [cart]
  );

  const handleAddCartItem = useCallback(
    (newItem) => {
      if (isIncart(newItem.id)) {
        toast.success('Item is already in cart!');
        return;
      }
      dispatch({ type: 'addItem', payload: newItem });
      toast.success('Item is added to cart successfully!');
    },
    [isIncart]
  );

  const handleDeleteCartItem = useCallback((id) => {
    dispatch({ type: 'removeItem', payload: id });
    toast.success('Item is removed from cart successfully!');
  }, []);

  const increaseQuantity = useCallback((id) => {
    dispatch({ type: 'increaseQuantity', payload: id });
  }, []);

  const decreaseQuantity = useCallback((id) => {
    dispatch({ type: 'decreaseQuantity', payload: id });
  }, []);

  const handleReset = useCallback(() => {
    dispatch({ type: 'resetCart' });
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        handleAddCartItem,
        handleDeleteCartItem,
        increaseQuantity,
        decreaseQuantity,
        handleReset,
        isIncart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  return context;
}
