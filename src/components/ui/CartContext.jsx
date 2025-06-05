import { createContext, useReducer, useEffect } from "react";
import { cartReducer, initialState } from "./CartReducer";

/**
 * React context for managing shopping cart state.
 * Provides access to cart items and dispatch actions.
 */
export const CartContext = createContext();

/**
 * CartProvider wraps the app and provides cart state and dispatch via context.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - Child components that need access to the cart context.
 * @returns {JSX.Element} The context provider with cart state and dispatch.
 */
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(state.items));
  }, [state.items]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
