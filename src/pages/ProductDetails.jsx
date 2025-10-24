import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.error(err));
  }, [id]);

  if (!product) return <h3>Loading...</h3>;

  return (
    <div className="row">
      <div className="col-md-6">
        {product.images && product.images.length > 1 ? (
          <div id="carouselProduct" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {product.images.map((img, index) => (
                <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                  <img src={img} className="d-block w-100" style={{ height: "400px", objectFit: "contain" }} alt={product.title} />
                </div>
              ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselProduct" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselProduct" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </button>
          </div>
        ) : (
          <img src={product.images[0]} className="img-fluid" alt={product.title} />
        )}
      </div>

      <div className="col-md-6">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h4>₹{product.price}</h4>
      </div>
    </div>
  );
}

export default ProductDetails;
