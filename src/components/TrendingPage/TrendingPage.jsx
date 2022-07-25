import * as React from "react";
import "./TrendingPage.css";
import TrendingSideBar from "../TrendingSideBar/TrendingSideBar";
import TrendingProducts from "../TrendingProducts/TrendingProducts";
import { useAuthContext } from "../../contexts/auth";
import apiClient from "../../services/apiClient";

export default function TrendingPage() {
  const [trendingProducts, setTrendingProducts] = React.useState([]);
  const { user } = useAuthContext();
  const [error, setError] = React.useState({});
  console.log("user in trending page", user);

  React.useEffect(() => {
    const getTrending = async () => {
      let trendingArray = [];
      try {
        trendingArray = await apiClient.getProducts();
        console.log(trendingArray);
        setTrendingProducts(trendingArray.products);
      } catch (err) {
        console.log("error in TrendingProducts:", err);
        setError(err.message);
      }
    };
    getTrending();
  }, []);

  return (
    <div className="trending-page">
      <TrendingSideBar
        trendingProducts={trendingProducts}
        setTrendingProducts={setTrendingProducts}
      />
      <div className="trending">
        <h1 className="trending-title">What's Trending</h1>
        <TrendingProducts trendingProducts={{ trendingProducts }} />
      </div>
    </div>
  );
}
