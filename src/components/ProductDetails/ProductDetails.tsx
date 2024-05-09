import React from "react";
import { Product } from "../types";

interface Props {
  product: Product;
}

const ProductDetails: React.FC<Props> = ({ product }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
      <div className="flex items-center mb-4">
        <img src={product.image} alt={product.title} className="h-40 w-auto mr-4" />
        <div>
          <p className="text-gray-700">{product.description}</p>
          <p className="text-blue-600 font-bold">${product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
