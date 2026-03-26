import React from "react";

function ProductCard({ product }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <p>{product.description}</p>
      <button>Buy Now</button>
    </div>
  );
}

export default ProductCard;