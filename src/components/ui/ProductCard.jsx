import React from "react";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const discount = product.price - product.discountedPrice;
  const discountPercentage =
    discount > 0 ? Math.round((discount / product.price) * 100) : 0;

  const fullStars = Math.floor(product.rating);
  const halfStar = product.rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;

  return (
    <div className="flex flex-col items-center group my-4 shadow-md rounded pb-2">
      <div className="relative">
        <img
          src={product.image.url}
          alt={product.image.alt}
          className="w-56 h-56 sm:w-64 sm:h-64 xl:w-80 xl:h-80 aspect-square object-cover rounded-lg transition duration-300 ease-linear group-hover:scale-105 border border-gray-300"
        />
        {discount > 0 && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs rounded-full">
            -{discountPercentage}%
          </div>
        )}
      </div>

      <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
      <div className="flex mt-2">
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

      <div className="mt-4 flex items-center">
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
      <p className="text-gray-700 w-56 xl:w-72 mt-2">{product.description}</p>
    </div>
  );
};

export default ProductCard;
