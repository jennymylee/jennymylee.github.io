import * as React from "react";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";


export default function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    // Clicking on a product card takes you to its respective
    // product detail page classified by id.
    <div
      className="product-card"
      onClick={() => navigate(`/product/id/${product.id}`)}
    >
      {/* this image wrapper adds a white background to the product image */}
      <div className="img-wrapper">
        <img className="product-img" src={product.image_url} />
      </div>
      <div className="pc-text">
        <p className="pc-name">{product.name}</p>
        <p className="pc-price">${product.market_price}</p>
      </div>
    </div>
  );
}
