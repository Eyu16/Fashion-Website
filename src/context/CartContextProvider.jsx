import { createContext, useContext, useState } from 'react';

const CartContext = createContext();
export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState();
  function handleAddCartItem() {}
  function handleDeleteCartItem(id) {}

  return (
    <CartContext.Provider
      value={{ cart, handleAddCartItem, handleDeleteCartItem }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  return context;
}
