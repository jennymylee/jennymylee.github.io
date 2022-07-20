import * as React from "react";
import "./Wishlist.css";

export default function Wishlist() {
  return (
    <div className="wishlist">
      <div className="wishlist-tabs">
        <button className="wishlist-btn">Wishlist</button>
      </div>
      <div className="wishlist-items"></div>
    </div>
  );
}
