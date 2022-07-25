import * as React from "react";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      {/* <div className="img-background" /> */}
      <img className="product-img" src={product.image_url} />
      <div className="pc-text">
        <p className="pc-name">{product.name}</p>
        <p className="pc-price">${product.market_price}</p>
      </div>
    </div>
  );
}
