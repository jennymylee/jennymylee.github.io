import * as React from "react";
import "./TrendingPage.css";
import TrendingSideBar from "../TrendingSideBar/TrendingSideBar";
import TrendingProducts from "../TrendingProducts/TrendingProducts";
import { useAuthContext } from "../../contexts/auth";
import apiClient from "../../services/apiClient";
import TrendingFooter from "../TrendingFooter/TrendingFooter";

export default function TrendingPage() {
  // trendingProducts is an array of product objects
  const [trendingProducts, setTrendingProducts] = React.useState();

  // trendingProducts is an array of product objects with filters applied
  const [filteredProducts, setFilteredProducts] = React.useState();

  // These states will act as filters for the trendingProducts
  const [brands, setBrands] = React.useState([]);
  const [priceRanges, setPriceRanges] = React.useState([]);
  const [releaseYears, setReleaseYears] = React.useState([]);

  const { user } = useAuthContext();

  // Get array of products from shoes table and set trendingProducts state.
  React.useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data, error } = await apiClient.getProducts();
        if (data) {
          setTrendingProducts(data.products);
        }
      } catch (err) {
        return;
      }
    };
    fetchProducts();
  }, []);

  React.useEffect(() => {
    setFilteredProducts(trendingProducts);

    // We only filter trendingProducts if filters are checked
    if (trendingProducts && (brands || releaseYears || priceRanges)) {
      setFilteredProducts(trendingProducts.filter(applyFilters));
    }
  }, [trendingProducts, brands, priceRanges, releaseYears]);

  // this is a function to check to see if a product meets our filter constraints
  const applyFilters = (product) => {
    let brand = false;
    let release_year = false;
    let price = false;

    if (brands.includes(product.brand) || brands.length === 0) {
      brand = true;
    }
    if (
      releaseYears.includes(product.release_year) ||
      releaseYears.length === 0
    ) {
      release_year = true;
    }
    if (priceRanges.length > 0) {
      for (let pr in priceRanges) {
        if (priceRanges[pr] === "<200" && product.market_price < 200) {
          price = true;
        }
        if (
          priceRanges[pr] === "200-400" &&
          200 <= product.market_price &&
          product.market_price <= 400
        ) {
          price = true;
        }
        if (
          priceRanges[pr] === "400-600" &&
          400 <= product.market_price &&
          product.market_price <= 600
        ) {
          price = true;
        }
        if (priceRanges[pr] === ">600" && product.market_price > 600) {
          price = true;
        }
      }
    } else {
      price = true;
    }
    return brand && release_year && price;
  };

  return (
    <div className="trending-page">
      {/* Trending Side Bar will allow user to filter the Trending Section */}
      <TrendingSideBar
        trendingProducts={trendingProducts}
        setTrendingProducts={setTrendingProducts}
        brands={brands}
        setBrands={setBrands}
        priceRanges={priceRanges}
        setPriceRanges={setPriceRanges}
        releaseYears={releaseYears}
        setReleaseYears={setReleaseYears}
      />
      <div className="trending">
        <h1 className="trending-title">What's Trending</h1>
        {/* displays filtered products */}
        <TrendingProducts filteredProducts={filteredProducts} />
        <TrendingFooter />
      </div>
    </div>
  );
}
