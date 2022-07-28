import React, { useState, useMemo } from "react";
import "./SearchProduct.css"
import Pagination from "../Pagination/Pagination"
import ProductCard from "../ProductCard/ProductCard"
import { useAuthContent, useAuthContext } from "../../contexts/auth"
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


// Shows 12 products on each page
let PageSize = 12;

export default function SearchProduct({searchItem}) {
    const { searchProducts } = useAuthContext()
    const [currentPage, setCurrentPage] = useState(0)
    const [filter, setFilter] = useState("Newest to Oldest")
    const [filterProduct, setFilterProduct] = useState([])

    const handleOnChange = (event) => {
      setFilter(event.target.value)
    }

    React.useEffect(() => {
      if(filter === "Newest to Oldest"){

      }else if(filter === "Oldest to Newest"){

      }else if(filter === "Price - Low to High"){
        setFilterProduct([...searchItem].sort((a, b) => parseFloat(a.market_price) > parseFloat(b.market_price) ? 1: -1))
      }else if(filter === "Price - HIght to Low"){

      }else if(filter === "A - Z"){
        setFilterProduct([...searchItem].sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1: 1))
      }
    }, [filter, searchItem])

    console.log("filter", filterProduct)

    const currentProductData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        if(searchItem){
            return searchItem.slice(firstPageIndex, lastPageIndex)
        }
    }, [currentPage, searchItem])

    const renderProducts = () => {
        if(currentProductData){
            return currentProductData.map((product, i) => {
                return <ProductCard key={i} product={product}></ProductCard>
            })
        }
    }

    React.useEffect(() => {
        setCurrentPage(1)
    }, [searchItem])

    if (searchItem) {
        return (
          <div className="trending-products">
            <div className="tp-content">
              {/* Pagination component can be found on both top 
              and bottom of products */}
              <div className="headers">
                <p className="term">Showing search result for "{searchProducts}"</p>
                {/* <button className="drop-down-btn">Filter</button> */}
                <Select className="drop-down-btn" value={filter} onChange={handleOnChange}>
                  <MenuItem value={"Newest to Oldest"}>Newest to Oldest</MenuItem>
                  <MenuItem value={"Oldest to Newest"}>Oldest to Newest</MenuItem>
                  <MenuItem value={"Price - Low to High"}>Price - Low to High</MenuItem>
                  <MenuItem value={"Price - HIght to Low"}>Price - HIght to Low</MenuItem>
                  <MenuItem value={"A - Z"}>A - Z</MenuItem>
                </Select>
              </div>
              <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={searchItem.length}
                pageSize={PageSize}
                onPageChange={(page) => setCurrentPage(page)}
              />
              {/* Render products */}
              <div className="tp-items">{renderProducts()}</div>
              <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={searchItem.length}
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
