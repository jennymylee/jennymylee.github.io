import React, { useState, useMemo, useEffect } from "react";
import "./WishlistDisplay.css";
import Pagination from "../Pagination/Pagination";
import ProductCard from "../ProductCard/ProductCard";

// Shows 4 products on each page
let PageSize = 41;

// This component renders a list of products and includes pagination.
export default function WishlistDisplay({ wishlistItemsRaw }) {

  console.log("WIshlistDisplay", wishlistItemsRaw)
  const uniqueIds = [];

  const wishlistItems = wishlistItemsRaw.filter(element => {
    const isDuplicate = uniqueIds.includes(element.id);

    if (!isDuplicate) {
      uniqueIds.push(element.id);

      return true;
    }

    return false;
  });
    
 
  // This function creates a product card for the current set of products
  const renderProducts = () => {
    if (currentProductData) {
      return currentProductData.map((product, i) => {
        return <ProductCard key={i} product={product} />;
      });
    }
  };

  // When we have a new set of relevant products, we set the
  // current page number to be 1.
  React.useEffect(() => {
    setCurrentPage(1);
  }, [wishlistItems]);

  const [currentPage, setCurrentPage] = useState(0);

  // This returns the subset of products that would be found on a certain page.
  // e.g give me the 12 products I would find on page 2
  const currentProductData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    if (wishlistItems) {
      return wishlistItems.slice(firstPageIndex, lastPageIndex);
    }
  }, [currentPage, wishlistItems]);

  if (wishlistItems) {
    return (
      <div className="wishlist-products">
        <div className="wp-content">
          {/* Pagination component can be found on both top 
          and bottom of products */}
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={wishlistItems.length}
            pageSize={PageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />
          {/* Render products */}
          <div className="wp-items">
              {renderProducts()}
          </div>
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={wishlistItems.length}
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
