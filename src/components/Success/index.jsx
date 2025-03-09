import { Link } from "react-router-dom";

const Success = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4">
        <h2 className="text-xl"> Payment successful!</h2>
        <p>
          Thank you for shopping at The Loopy Shop. You will receive an order
          confirmation shortly.
        </p>
        <p>We hope you enjoy your new products!</p>
        <Link to="/">
          <button className="mt-6 px-4 py-2 bg-teal-700 text-white rounded-lg shadow hover:bg-teal-800 transition">
            Continue Shopping
          </button>
        </Link>
      </div>
    </>
  );
};

export default Success;
