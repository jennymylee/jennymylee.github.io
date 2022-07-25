import * as React from "react";
import "./TrendingPage.css";
import TrendingSideBar from "../TrendingSideBar/TrendingSideBar";
import TrendingProducts from "../TrendingProducts/TrendingProducts";
import { useAuthContext } from "../../contexts/auth";
import apiClient from "../../services/apiClient";

export default function TrendingPage() {
  const [trendingProducts, setTrendingProducts] = React.useState();
  const { user } = useAuthContext();

  console.log("user in trending page", user);

  React.useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data, error } = await apiClient.getProducts();
        if (data) {
          console.log("this is data.products", data.products);
          setTrendingProducts(data.products);
        }
        if (error) {
          console.log("error in trending", error);
        }
      } catch (err) {
        console.log("err in trendingpage", err);
      }
    };
    fetchUser();
  }, []);

  return (
    <div className="trending-page">
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
