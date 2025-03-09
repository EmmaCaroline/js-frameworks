import React from "react";
import { CiSquareRemove } from "react-icons/ci";
import { useCart } from "../ui/CartContext";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { state, dispatch } = useCart();

  const removeFromCart = (id) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: { id },
    });
  };

  const clearCart = () => {
    dispatch({
      type: "CLEAR_CART",
    });
  };

  const totalSum = state.items.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  return (
    <div className="ml-6">
      {state.items.length === 0 ? (
        <p className="text-gray-600 text-lg">Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {state.items.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between border border-gray-300 p-4 rounded-lg shadow-sm"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 rounded-md object-cover"
                />

                <div className="flex-1 ml-4">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-700">Quantity: {item.quantity}</p>
                  <p className="text-gray-700 font-medium">
                    Price: ${item.price.toFixed(2)}
                  </p>
                </div>

                <button
                  className="ml-4 text-red-500 hover:text-red-700 transition"
                  onClick={() => removeFromCart(item.id)}
                >
                  <CiSquareRemove size={32} />
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-6 p-4 border-t border-gray-300">
            <h3 className="text-lg font-semibold mb-3">
              Total: ${totalSum.toFixed(2)}
            </h3>
            <div className="group">
              <Link to="/checkout">
                <button className="bg-teal-700 text-white px-6 py-3 rounded shadow-md hover:bg-teal-800 transition">
                  Checkout
                </button>
              </Link>
            </div>
          </div>
          <div className="flex justify-end">
            {" "}
            <button
              className="bg-red-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-red-600 transition "
              onClick={clearCart}
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
