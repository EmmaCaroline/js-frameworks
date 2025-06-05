import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../ui/CartContext";

const Checkout = () => {
  const { state, dispatch } = useCart();
  const navigate = useNavigate();

  const [selectedPayment, setSelectedPayment] = useState("");
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const [error, setError] = useState("");

  const handlePaymentChange = (event) => {
    setSelectedPayment(event.target.value);
    setError("");
  };

  const handleCardChange = (event) => {
    setCardDetails({
      ...cardDetails,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!selectedPayment) {
      setError("Please select a payment method.");
      return;
    }

    if (selectedPayment === "Credit Card") {
      const { cardNumber, expiryDate, cvv } = cardDetails;
      if (!cardNumber || !expiryDate || !cvv) {
        setError("Please fill in all credit card details.");
        return;
      }
    }

    dispatch({ type: "CLEAR_CART" });
    navigate("/success");
  };

  const totalSum = state.items.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  return (
    <div className="relative">
      <form
        onSubmit={handleSubmit}
        className="p-6 border rounded-lg shadow-md max-w-md mx-auto"
      >
        <h2 className="text-xl font-semibold mb-4">Checkout</h2>

        <div className="border-t pt-4">
          <h3 className="text-lg font-semibold mb-2">Order Summary</h3>
          <div className="space-y-2">
            <ul>
              {state.items.map((item) => (
                <li key={item.id} className="flex justify-between">
                  <span>
                    {item.title} x{item.quantity}
                  </span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-between mt-4">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between mt-4">
            <span>Total</span>
            <span>${totalSum.toFixed(2)}</span>
          </div>
        </div>

        <div className="space-y-2 mt-4 border-t pt-4">
          <h3 className="text-lg font-semibold mb-2">Choose Payment Method</h3>
          <label htmlFor="paymentCard" className="flex items-center space-x-2">
            <input
              id="paymentCard"
              type="radio"
              name="payment"
              value="Credit Card"
              checked={selectedPayment === "Credit Card"}
              onChange={handlePaymentChange}
              className="w-5 h-5 text-blue-500"
            />
            <span>Credit Card</span>
          </label>

          {selectedPayment === "Credit Card" && (
            <div className="mt-2 space-y-2 p-4 border rounded-md bg-gray-100">
              <label htmlFor="cardNumber"></label>
              <input
                id="cardNumber"
                type="text"
                name="cardNumber"
                placeholder="Card Number"
                value={cardDetails.cardNumber}
                onChange={handleCardChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
              <div className="flex space-x-2">
                <label htmlFor="expiryDate"></label>
                <input
                  id="expiryDate"
                  type="text"
                  name="expiryDate"
                  placeholder="MM/YY"
                  value={cardDetails.expiryDate}
                  onChange={handleCardChange}
                  className="w-1/2 px-3 py-2 border rounded"
                  required
                />
                <label htmlFor="cvv"></label>
                <input
                  id="cvv"
                  type="text"
                  name="cvv"
                  placeholder="CVV"
                  value={cardDetails.cvv}
                  onChange={handleCardChange}
                  className="w-1/2 px-3 py-2 border rounded"
                  required
                />
              </div>
            </div>
          )}

          <label
            htmlFor="paymentPaypal"
            className="flex items-center space-x-2"
          >
            <input
              id="paymentPaypal"
              type="radio"
              name="payment"
              value="PayPal"
              checked={selectedPayment === "PayPal"}
              onChange={handlePaymentChange}
              className="w-5 h-5 text-blue-500"
            />
            <span>PayPal</span>
          </label>

          <label htmlFor="paymentApple" className="flex items-center space-x-2">
            <input
              id="paymentApple"
              type="radio"
              name="payment"
              value="Apple Pay"
              checked={selectedPayment === "Apple Pay"}
              onChange={handlePaymentChange}
              className="w-5 h-5 text-blue-500"
            />
            <span>Apple Pay</span>
          </label>
        </div>

        {error && <p className="text-red-500 mt-2">{error}</p>}

        <button
          type="submit"
          className="mt-6 px-4 py-2 bg-teal-700 text-white rounded-lg shadow hover:bg-teal-800 transition"
        >
          Proceed to Payment
        </button>
      </form>
    </div>
  );
};

export default Checkout;
