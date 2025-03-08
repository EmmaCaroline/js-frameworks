import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="flex flex-col items-center ">
      <img
        src={product.image.url}
        alt={product.image.alt}
        className="w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 aspect-square object-cover rounded-lg"
      />
      <h2 className="text-lg mt-2">{product.title}</h2>
      <p className="text-gray-700">{product.description}</p>
    </div>
  );
};

export default ProductCard;
