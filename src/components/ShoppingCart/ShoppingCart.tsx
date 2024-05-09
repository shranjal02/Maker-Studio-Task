import React from "react";
import { Product } from "../types";

interface Props {
  cart: Product[];
  removeFromCart: (product: Product) => void;
}

const ShoppingCart: React.FC<Props> = ({ cart, removeFromCart }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-5">Shopping Cart</h2>
      {cart.map((product) => (
        <div key={product.id} className="flex justify-between items-center mb-2">
          <p>{product.title}</p>
          <button
            onClick={() => removeFromCart(product)}
            className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default ShoppingCart;
