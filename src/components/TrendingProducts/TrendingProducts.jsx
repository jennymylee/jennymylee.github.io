import React, { useState, useMemo } from "react";
import "./TrendingProducts.css";
import Pagination from "../Pagination/Pagination";
import ProductCard from "../ProductCard/ProductCard";

let PageSize = 12;

export default function TrendingProducts({ trendingProducts }) {
  console.log("trendingProducts: ", trendingProducts);
  const renderProducts = () => {
    if (currentProductData) {
      return currentProductData.map((product, i) => {
        return <ProductCard key={i} product={product} />;
      });
    }
  };

  React.useEffect(() => {
    setCurrentPage(1);
  }, [trendingProducts]);

  const [currentPage, setCurrentPage] = useState(0);

  const currentProductData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    if (trendingProducts) {
      return trendingProducts.slice(firstPageIndex, lastPageIndex);
    }
  }, [currentPage, trendingProducts]);

  if (trendingProducts) {
    return (
      <div className="trending-products">
        <div className="tp-content">
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={trendingProducts.length}
            pageSize={PageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />
          <div className="tp-items">
            {trendingProducts ? renderProducts() : "Nothing here yet"}
          </div>
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={trendingProducts.length}
            pageSize={PageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}
