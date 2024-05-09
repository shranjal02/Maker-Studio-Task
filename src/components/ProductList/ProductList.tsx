import React from "react";
import { Product } from "../types";
import ProductCard from "./ProductCard";

interface Props {
  products: Product[];
  addToCart: (product: Product) => void;
}

const ProductList: React.FC<Props> = ({ products, addToCart }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;
