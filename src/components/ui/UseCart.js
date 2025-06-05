import { useContext } from "react";
import { CartContext } from "./CartContext";

/**
 * Custom hook to access the cart context.
 *
 * @returns {{ state: object, dispatch: function }} The current cart state and dispatch function.
 *
 * @example
 * const { state, dispatch } = useCart();
 */
export const useCart = () => useContext(CartContext);
