import * as React from "react";
import "./TrendingPage.css";
import TrendingSideBar from "../TrendingSideBar/TrendingSideBar";
import TrendingProducts from "../TrendingProducts/TrendingProducts";
import { useAuthContext } from "../../contexts/auth";
import apiClient from "../../services/apiClient";

export default function TrendingPage() {
  // trendingProducts is an array of product objects
  const [trendingProducts, setTrendingProducts] = React.useState();
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

  return (
    <div className="trending-page">
      {/* Trending Side Bar will allow user to filter the Trending Section */}
      <TrendingSideBar
        trendingProducts={trendingProducts}
        setTrendingProducts={setTrendingProducts}
      />
      <div className="trending">
        <h1 className="trending-title">What's Trending</h1>
        <TrendingProducts trendingProducts={trendingProducts} />
      </div>
    </div>
  );
}
