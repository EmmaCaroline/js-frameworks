/**
 * Initial state for the cart reducer.
 * Loads cart items from localStorage if available, otherwise starts with an empty array.
 *
 * @constant {Object}
 * @property {Array<Object>} items - Array of cart item objects, each with at least id and quantity.
 */
export const initialState = {
  items: JSON.parse(localStorage.getItem("cartItems")) || [],
};

/**
 * Reducer function to manage cart state updates.
 *
 * @param {Object} state - Current state of the cart.
 * @param {Array<Object>} state.items - Array of cart items.
 * @param {Object} action - Action object describing what to do.
 * @param {string} action.type - Type of action to perform.
 * @param {Object} action.payload - Payload containing data for the action.
 * @param {string} action.payload.id - ID of the item to add, remove, or clear.
 * @returns {Object} New state after applying the action.
 *
 * @example
 * // Adding an item to the cart
 * dispatch({ type: "ADD_TO_CART", payload: { id: "123", title: "Product", price: 10 } });
 *
 * @example
 * // Removing an item from the cart
 * dispatch({ type: "REMOVE_FROM_CART", payload: { id: "123" } });
 *
 * @example
 * // Clearing the entire cart
 * dispatch({ type: "CLEAR_CART" });
 */
export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const updatedItems = [...state.items];
      const itemIndex = updatedItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex === -1) {
        updatedItems.push({ ...action.payload, quantity: 1 });
      } else {
        updatedItems[itemIndex] = {
          ...updatedItems[itemIndex],
          quantity: updatedItems[itemIndex].quantity + 1,
        };
      }

      localStorage.setItem("cartItems", JSON.stringify(updatedItems));

      return { ...state, items: updatedItems };
    }

    case "REMOVE_FROM_CART": {
      const updatedItems = [...state.items];
      const itemIndex = updatedItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex !== -1) {
        if (updatedItems[itemIndex].quantity > 1) {
          updatedItems[itemIndex] = {
            ...updatedItems[itemIndex],
            quantity: updatedItems[itemIndex].quantity - 1,
          };
        } else {
          updatedItems.splice(itemIndex, 1);
        }
      }

      localStorage.setItem("cartItems", JSON.stringify(updatedItems));

      return { ...state, items: updatedItems };
    }

    case "CLEAR_CART": {
      localStorage.removeItem("cartItems");
      return { ...state, items: [] };
    }

    default:
      return state;
  }
};
