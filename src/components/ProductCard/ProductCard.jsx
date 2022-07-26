import * as React from "react";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";
 
export default function ProductCard({ product }) {
  const navigate = useNavigate();
    return (
    <div
      className="product-card"
      onClick={() => navigate(`/product/id/${product.id}`)}
    >
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
