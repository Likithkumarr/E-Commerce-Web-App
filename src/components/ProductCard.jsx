import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product, addToCart }) {
  return (
    <div className="card h-100">
      {product.images && product.images.length > 1 ? (
        <div id={`carousel${product.id}`} className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {product.images.map((img, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                <img src={img} className="d-block w-100 p-3" style={{ height: "200px", objectFit: "contain" }} alt={product.title} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <img src={product.images[0]} className="card-img-top p-3" style={{ height: "200px", objectFit: "contain" }} alt={product.title} />
      )}

      <div className="card-body d-flex flex-column">
        <h6 className="card-title">{product.title}</h6>
        <p className="card-text fw-bold">₹{product.price}</p>
        <div className="mt-auto d-flex justify-content-between">
          <Link to={`/product/${product.id}`} className="btn btn-sm btn-primary">View</Link>
          <button onClick={() => addToCart(product)} className="btn btn-sm btn-success">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
