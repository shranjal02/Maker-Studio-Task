import React, { useState, useEffect } from "react";
import ProductList from "./components/ProductList/ProductList";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import SearchBar from "./components/SearchBar/SearchBar";
import { Product } from "./components/types";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product: Product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-3xl font-bold mb-5">Fake Store</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <ProductList products={filteredProducts} addToCart={addToCart} />
        </div>
        <div className="col-span-1">
          <ShoppingCart cart={cart} removeFromCart={removeFromCart} />
        </div>
      </div>
    </div>
  );
}

export default App;
