import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../ui/CartContext";

const Checkout = () => {
  const { dispatch } = useCart();
  const navigate = useNavigate();

  const [selectedPayment, setSelectedPayment] = useState("");
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const [error, setError] = useState("");

  const [showPopup, setShowPopup] = useState(false);

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

    setShowPopup(true);
    dispatch({ type: "CLEAR_CART" });

    setTimeout(() => {
      setShowPopup(false);
      navigate("/success");
    }, 5000);
  };

  return (
    <div className="relative">
      <form
        onSubmit={handleSubmit}
        className="p-6 border rounded-lg shadow-md max-w-md mx-auto"
      >
        <h2 className="text-xl font-semibold mb-4">Choose Payment Method</h2>

        <div className="space-y-2">
          <label className="flex items-center space-x-2">
            <input
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
              <input
                type="text"
                name="cardNumber"
                placeholder="Card Number"
                value={cardDetails.cardNumber}
                onChange={handleCardChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
              <div className="flex space-x-2">
                <input
                  type="text"
                  name="expiryDate"
                  placeholder="MM/YY"
                  value={cardDetails.expiryDate}
                  onChange={handleCardChange}
                  className="w-1/2 px-3 py-2 border rounded"
                  required
                />
                <input
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

          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="payment"
              value="PayPal"
              checked={selectedPayment === "PayPal"}
              onChange={handlePaymentChange}
              className="w-5 h-5 text-blue-500"
            />
            <span>PayPal</span>
          </label>

          <label className="flex items-center space-x-2">
            <input
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
          className="mt-4 px-4 py-2 bg-teal-700 text-white rounded-lg shadow hover:bg-teal-800 transition"
        >
          Proceed to Payment
        </button>
      </form>

      {showPopup && (
        <div className="fixed bottom-25 left-1/2 transform -translate-x-1/2 bg-green-600 text-white py-3 px-6 rounded-lg shadow-lg animate-fadeIn">
          Payment successful!
        </div>
      )}
    </div>
  );
};

export default Checkout;
