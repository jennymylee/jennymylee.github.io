import React, { useState, useMemo } from "react";
import "./SearchProduct.css";
import Pagination from "../Pagination/Pagination";
import ProductCard from "../ProductCard/ProductCard";
import { useAuthContent, useAuthContext } from "../../contexts/auth";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

// Shows 12 products on each page
let PageSize = 12;

/*
This component will get passed an array of object from SearchPage.
Then, depending what the sort item is, we will sort the array and 
store it in a state variable. After we will pass this new state variable
with the sorted array to the Pagination component to display the products
*/
export default function SearchProduct({ searchItem }) {
  const { searchProducts } = useAuthContext();
  const [currentPage, setCurrentPage] = useState(0);
  const [filter, setFilter] = useState("Newest to Oldest");
  const [filterProduct, setFilterProduct] = useState([]);

  const handleOnChange = (event) => {
    setFilter(event.target.value);
  };

  React.useEffect(() => {
    setFilter("Newest to Oldest");
  }, [searchProducts]);

  React.useEffect(() => {
    if (filter === "Newest to Oldest") {
      setFilterProduct(
        [...searchItem].sort((a, b) =>
          new Date(a.release_date) < new Date(b.release_date) ? 1 : -1
        )
      );
    } else if (filter === "Oldest to Newest") {
      setFilterProduct(
        [...searchItem].sort((a, b) =>
          new Date(a.release_date) > new Date(b.release_date) ? 1 : -1
        )
      );
    } else if (filter === "Price - Low to High") {
      setFilterProduct(
        [...searchItem].sort((a, b) =>
          parseFloat(a.market_price) > parseFloat(b.market_price) ? 1 : -1
        )
      );
    } else if (filter === "Price - High to Low") {
      setFilterProduct(
        [...searchItem].sort((a, b) =>
          parseFloat(a.market_price) < parseFloat(b.market_price) ? 1 : -1
        )
      );
    } else if (filter === "A - Z") {
      setFilterProduct(
        [...searchItem].sort((a, b) =>
          a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1
        )
      );
    }
  }, [filter, searchItem]);

  const currentProductData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    if (filterProduct) {
      return filterProduct.slice(firstPageIndex, lastPageIndex);
    }
  }, [currentPage, filterProduct]);

  const renderProducts = () => {
    if (currentProductData) {
      return currentProductData.map((product, i) => {
        return <ProductCard key={i} product={product}></ProductCard>;
      });
    }
  };

  React.useEffect(() => {
    setCurrentPage(1);
  }, [filterProduct]);

  if (filterProduct) {
    return (
      <div className="trending-products">
        <div className="tp-content">
          {/* Pagination component can be found on both top 
              and bottom of products */}
              <div className="headers">
                <p className="term">Showing search results for "{searchProducts}"</p>
                <Select className="drop-down-btn" value={filter} onChange={handleOnChange}>
                  <MenuItem value={"Newest to Oldest"}>Newest to Oldest</MenuItem>
                  <MenuItem value={"Oldest to Newest"}>Oldest to Newest</MenuItem>
                  <MenuItem value={"Price - Low to High"}>Price - Low to High</MenuItem>
                  <MenuItem value={"Price - High to Low"}>Price - High to Low</MenuItem>
                  <MenuItem value={"A - Z"}>A - Z</MenuItem>
                </Select>
              </div>
              <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={filterProduct.length}
                pageSize={PageSize}
                onPageChange={(page) => setCurrentPage(page)}
              />
          {/* Render products */}
          <div
            className={
              currentProductData.length < 12
                ? "tp-items sp-padding"
                : "tp-items"
            }
          >
            {renderProducts()}
          </div>
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={filterProduct.length}
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
