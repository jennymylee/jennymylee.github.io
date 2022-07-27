import React, { useState, useMemo } from "react";
import "./SearchProduct.css"
import Pagination from "../Pagination/Pagination"
import ProductCard from "../ProductCard/ProductCard"


// Shows 12 products on each page
let PageSize = 12;

export default function SearchProduct({searchProducts}) {

    const [currentPage, setCurrentPage] = useState(0)

    const currentProductData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        if(searchProducts){
            return searchProducts.slice(firstPageIndex, lastPageIndex)
        }
    }, [currentPage, searchProducts])

    const renderProducts = () => {
        if(currentProductData){
            return currentProductData.map((product, i) => {
                return <ProductCard key={i} product={product}></ProductCard>
            })
        }
    }

    React.useEffect(() => {
        setCurrentPage(1)
    }, [searchProducts])

    if (searchProducts) {
        return (
          <div className="trending-products">
            <div className="tp-content">
              {/* Pagination component can be found on both top 
              and bottom of products */}
              <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={searchProducts.length}
                pageSize={PageSize}
                onPageChange={(page) => setCurrentPage(page)}
              />
              {/* Render products */}
              <div className="tp-items">{renderProducts()}</div>
              <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={searchProducts.length}
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
