import React, { useState, useMemo } from "react";
import "./WishlistDisplay.css";
import Pagination from "../Pagination/Pagination";
import ProductCard from "../ProductCard/ProductCard";

// Shows 4 products on each page
let PageSize = 4;

// This component renders a list of products and includes pagination.
export default function WishlistDisplay({ wishlistItems }) {
//console.log("WishlistItems", wishlistItems)
    const wishlistItemss = [
        {
            brand: "Jordan",
            colorway: "Black/University Blue/White",
            current_bid: "250.00",
            description: "The Air Jordan 13 Retro 'Black University Blue' dresses the championship silhouette in a familiar two-tone color scheme. The upper pairs reflective black mesh overlays with matching black leather construction throughout the forefoot. Synthetic suede in a contrasting Carolina blue finish wraps around the heel and collar, accented with a holographic cat eye on the lateral side. The soft material extends to a midsole enhanced with a carbon fiber plate and Zoom Air cushioning. Underfoot, the panther paw outsole features herringbone traction pods for superior grip.",
            id: 1,
            image_url: "https://sneakernews.com/wp-content/uploads/2022/03/air-jordan-13-university-blue-black-2022-release-date.jpg",
            lowest_ask: "300.00",
            market_price: "200.00",
            name: "Air Jordan 13 Retro 'Black University Blue'",
            release_date: "2022-12-29T08:00:00.000Z",
            release_year: "2022",
            retail_price: "200.00",
            silhouette: "Air Jordan 13",
            total_sales: 0
        },
        {
            brand: "Jordan",
            colorway: "Black/University Blue/White",
            current_bid: "250.00",
            description: "The Air Jordan 13 Retro 'Black University Blue' dresses the championship silhouette in a familiar two-tone color scheme. The upper pairs reflective black mesh overlays with matching black leather construction throughout the forefoot. Synthetic suede in a contrasting Carolina blue finish wraps around the heel and collar, accented with a holographic cat eye on the lateral side. The soft material extends to a midsole enhanced with a carbon fiber plate and Zoom Air cushioning. Underfoot, the panther paw outsole features herringbone traction pods for superior grip.",
            id: 1,
            image_url: "https://sneakernews.com/wp-content/uploads/2022/03/air-jordan-13-university-blue-black-2022-release-date.jpg",
            lowest_ask: "300.00",
            market_price: "200.00",
            name: "Air Jordan 13 Retro 'Black University Blue'",
            release_date: "2022-12-29T08:00:00.000Z",
            release_year: "2022",
            retail_price: "200.00",
            silhouette: "Air Jordan 13",
            total_sales: 0
        },
        
]


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
      <div className="trending-products">
        <div className="tp-content">
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
          <div className="tp-items">{renderProducts()}</div>
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
