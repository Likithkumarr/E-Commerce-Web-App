import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

function Home() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // search input
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=190")
      .then(res => res.json())
      .then(data => setProducts(data.products))
      .catch(err => console.error(err));
  }, []);

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert("Added to cart");
  };

  // Filter products based on searchTerm
  const filteredProducts = products.filter(
    product =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Search bar */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search products by name or category..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Products grid */}
      <div className="row g-4">
        {filteredProducts.length === 0 && <p>No products found.</p>}
        {filteredProducts.map(product => (
          <div className="col-md-3" key={product.id}>
            <ProductCard product={product} addToCart={addToCart} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
