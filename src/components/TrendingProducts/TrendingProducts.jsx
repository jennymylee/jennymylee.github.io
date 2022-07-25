import * as React from "react";
import "./TrendingProducts.css";
import ProductCard from "../ProductCard/ProductCard";

export default function TrendingProducts({ trendingProducts }) {
  React.useEffect(() => {
    console.log("trendingProducts----", trendingProducts);
  }, [trendingProducts]);

  const renderProducts = () => {
    // console.log("trendingProducts in tp:", trendingProducts);
    return trendingProducts.trendingProducts.map((product, i) => {
      return <ProductCard key={i} product={product} />;
    });
  };

  return (
    <div className="trending-products">
      <div className="tp-content">
        <div className="tp-items">
          {trendingProducts ? renderProducts() : "Nothing here yet"}
        </div>
      </div>
    </div>
  );
}
