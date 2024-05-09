import React from "react";
import { Product } from "../types";

interface Props {
  product: Product;
  addToCart: (product: Product) => void;
}

const ProductCard: React.FC<Props> = ({ product, addToCart }) => {
  return (
    <div className="border p-4">
      <img src={product.image} alt={product.title} className="h-40 w-full object-cover mb-2" />
      <h3 className="font-bold text-lg">{product.title}</h3>
      <p className="text-gray-500">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-500 text-white px-4 py-2 mt-2 rounded hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
