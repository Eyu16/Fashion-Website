import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const initialState = {
  cart: [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'setCart':
      return { ...state, cart: action.payload };
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

  // useEffect(() => {});

  const handleAddCartItem = useCallback(
    (newItem) => {
      console.log(newItem);
      const item = cart?.find((item) => item.id === newItem.id);
      if (item) return;
      dispatch({ type: 'addItem', payload: newItem });
    },
    [cart]
  );

  const handleDeleteCartItem = useCallback((id) => {
    dispatch({ type: 'removeItem', payload: id });
  }, []);

  const increaseQuantity = useCallback((id) => {
    dispatch({ type: 'increaseQuantity', payload: id });
  }, []);
  const decreaseQuantity = useCallback((id) => {
    dispatch({ type: 'decreaseQuantity', payload: id });
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        handleAddCartItem,
        handleDeleteCartItem,
        increaseQuantity,
        decreaseQuantity,
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
