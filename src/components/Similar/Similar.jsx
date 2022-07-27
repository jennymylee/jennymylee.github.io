import React, { useState, useMemo, useEffect } from "react";
import "./Similar.css";
import Pagination from "../Pagination/Pagination";
import ProductCard from "../ProductCard/ProductCard";
import apiClient from "../../services/apiClient";

// Shows 4 products on each page
let PageSize = 4;

export default function Similar(props) {
  
const [similarProducts, setSimilarProducts] = useState();

console.log("shoeBrand", props.shoeBrand)

// Get array of products from shoes table and set similarProducts state.
useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data, error } = await apiClient.searchProduct(props.shoeBrand);
        console.log(2,data)
        if (data) {
            setSimilarProducts(data.products);
        }
      } catch (err) {
        return;
      }
    };
    fetchProducts();
  }, [props.shoeBrand]);

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
    useEffect(() => {
    setCurrentPage(1);
  }, [similarProducts]);

  const [currentPage, setCurrentPage] = useState(0);

  // This returns the subset of products that would be found on a certain page.
  // e.g give me the 12 products I would find on page 2
  const currentProductData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    if (similarProducts) {
      return similarProducts.slice(firstPageIndex, lastPageIndex);
    }
  }, [currentPage, similarProducts]);

  if (similarProducts) {
    return (
      <div className="similar-products">
        <div className="sp-content">
          {/* Pagination component can be found on both top 
          and bottom of products */}
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={similarProducts.length}
            pageSize={PageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />
          {/* Render products */}
          <div className="sp-items">{renderProducts()}</div>
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={similarProducts.length}
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
