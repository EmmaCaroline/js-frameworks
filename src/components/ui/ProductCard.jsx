import { Link } from "react-router-dom";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

/**
 * Displays a product card with pricing, discount, rating stars, and a link to the product page.
 *
 * @param {Object} props - Component props.
 * @param {Object} props.product - Product data object.
 * @param {number} props.product.price - Original price of the product.
 * @param {number} props.product.discountedPrice - Discounted price of the product.
 * @param {number} props.product.rating - Product rating (e.g., 4.5).
 * @param {string} props.product.id - Unique product identifier.
 * @param {string} props.product.title - Product title/name.
 * @param {string} props.product.image - Product image URL.
 *
 * @returns {JSX.Element} Rendered product card.
 */
const ProductCard = ({ product }) => {
  const discount = product.price - product.discountedPrice;
  const discountPercentage =
    discount > 0 ? Math.round((discount / product.price) * 100) : 0;

  const fullStars = Math.floor(product.rating);
  const halfStar = product.rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;

  return (
    <div className="flex flex-col items-center group my-4 shadow-md rounded pb-3">
      <div className="flex-grow">
        <div className="relative">
          <Link to={`/product/${product.id}`}>
            <img
              src={product.image.url}
              alt={product.image.alt}
              className="w-56 h-56 sm:w-64 sm:h-64 xl:w-80 xl:h-80 aspect-square object-cover rounded-lg transition duration-300 ease-linear group-hover:scale-105 border border-gray-300"
            />
          </Link>
          {discount > 0 && (
            <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs rounded-full">
              -{discountPercentage}%
            </div>
          )}
        </div>

        <h2 className="text-xl font-semibold mt-2 mx-2">{product.title}</h2>
        <div className="flex mt-2 mx-2">
          {Array(fullStars)
            .fill(<FaStar className="text-yellow-400" />)
            .map((star, index) => (
              <span key={`full-${index}`}>{star}</span>
            ))}
          {halfStar === 1 && (
            <span key="half">
              <FaStarHalfAlt className="text-yellow-400" />
            </span>
          )}
          {Array(emptyStars)
            .fill(<FaRegStar className="text-yellow-400" />)
            .map((star, index) => (
              <span key={`empty-${index}`}>{star}</span>
            ))}
        </div>

        <div className="mt-4 flex items-center mx-2">
          <span className="text-lg font-semibold text-gray-900">
            ${product.discountedPrice.toFixed(2)}
          </span>

          {discount > 0 && (
            <>
              <span className="line-through text-gray-500 ml-2">
                ${product.price.toFixed(2)}
              </span>
            </>
          )}
        </div>
        <p className="text-gray-700 w-56 xl:w-72 mt-2 mx-2">
          {product.description}
        </p>
      </div>
      <Link to={`/product/${product.id}`}>
        <button className="border border-gray-400 px-2 mt-2 shadow-md transition duration-300 ease-linear group-hover:scale-105">
          View product
        </button>
      </Link>
    </div>
  );
};

export default ProductCard;
